export interface ReviewRequest {
  businessName: string;
  category: string;
  type: string;
  highlights?: string;
  selectedServices?: string[];
  starRating: number;
  language?: string;
  tone?: "Professional" | "Friendly" | "Casual" | "Grateful";
  useCase?: "Customer review" | "Student feedback" | "Patient experience";
}

export interface GeneratedReview {
  text: string;
  hash: string;
  language: string;
  rating: number;
  source: "ai" | "fallback";
}

export interface GenerateReviewOptions {
  maxRetries?: number;
  existingHashes?: Set<string>;
}

// Store used review hashes to prevent duplicates
const usedReviewHashes = new Set<string>();

export class AIReviewService {
  // Call Sarvam through backend proxy (key stays on server)
  private async callSarvam(prompt: string): Promise<string> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 35000);

    try {
      const response = await fetch("/api/sarvam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
        signal: controller.signal,
      });

      const data = await response.json().catch(() => ({}));
      const text = typeof data.text === "string" ? data.text.trim() : "";

      if (!response.ok || !text) {
        throw new Error(
          data.error || `AI proxy error: ${response.status} ${response.statusText}`,
        );
      }

      return text;
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        throw new Error("AI request timed out after 35 seconds");
      }
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private trimReview(text: string, maxChars = 200): string {
    const cleaned = text.replace(/^["']|["']$/g, "").trim();
    if (cleaned.length <= maxChars) return cleaned;

    const truncated = cleaned.slice(0, maxChars);
    const lastStop = Math.max(
      truncated.lastIndexOf("."),
      truncated.lastIndexOf("!"),
      truncated.lastIndexOf("?"),
      truncated.lastIndexOf("।"),
    );

    if (lastStop > maxChars * 0.5) {
      return truncated.slice(0, lastStop + 1).trim();
    }

    return truncated.trim();
  }

  // Generate a simple hash for review content
  private generateHash(content: string): string {
    let hash = 0;
    for (let i = 0; i < content.length; i++) {
      const char = content.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36);
  }

  // Check if review is unique (session + database hashes)
  private isReviewUnique(
    content: string,
    existingHashes?: Set<string>,
  ): boolean {
    const hash = this.generateHash(content);
    if (existingHashes?.has(hash)) return false;
    return !usedReviewHashes.has(hash);
  }

  // Mark review as used in current session
  private markReviewAsUsed(content: string): void {
    const hash = this.generateHash(content);
    usedReviewHashes.add(hash);
  }

  async generateReview(
    request: ReviewRequest,
    options: GenerateReviewOptions = {},
  ): Promise<GeneratedReview> {
    const { maxRetries = 2, existingHashes } = options;
    const {
      businessName,
      category,
      type,
      highlights,
      selectedServices,
      starRating,
      language,
      tone,
      useCase,
    } = request;

    const sentimentGuide = {
      1: "Very negative, expressing frustration and dissatisfaction with specific issues",
      2: "Below average experience, mentioning problems but being constructive",
      3: "Mixed or neutral review with both positive and negative aspects",
      4: "Positive experience with good aspects, maybe one small downside",
      5: "Enthusiastic and praise-worthy, fully satisfied customer",
    };

    // Language options and random selection logic
    const languageOptions = ["English", "Gujarati", "Hindi"];

    const selectedLanguage =
      language ||
      languageOptions[Math.floor(Math.random() * languageOptions.length)];
    const selectedTone = tone || "Friendly";
    const selectedUseCase = useCase || "Customer review";

    // Build service-specific instructions
    let serviceInstructions = "";
    if (selectedServices && selectedServices.length > 0) {
      serviceInstructions = `
Customer specifically wants to highlight these services: ${selectedServices.join(", ")}
- Mention these services naturally in the review context
- Don't list them generically, weave them into the experience narrative
- Focus on how these specific aspects contributed to the ${starRating}-star experience
- Use authentic language that reflects real customer experience with these services`;
    }

    // Language-specific instructions
    let languageInstruction = "";
    switch (selectedLanguage) {
      case "English":
        languageInstruction = "Write the review entirely in English.";
        break;
      case "Gujarati":
        languageInstruction = "Write the review entirely in Gujarati.";
        break;
      case "Hindi":
        languageInstruction = "Write the review entirely in Hindi script.";
        break;
    }

    // Tone instructions
    const toneInstructions = {
      Professional:
        "Use formal, professional language appropriate for business contexts.",
      Friendly:
        "Use warm, approachable language that feels personal and genuine.",
      Casual:
        "Use relaxed, informal language that sounds conversational and natural.",
      Grateful:
        "Use appreciative, thankful language that expresses genuine gratitude.",
    };

    // Use case instructions
    const useCaseInstructions = {
      "Customer review":
        "Write from the perspective of a satisfied customer who used the service.",
      "Student feedback":
        "Write from the perspective of a student or learner who benefited from the education/training.",
      "Patient experience":
        "Write from the perspective of a patient who received medical care or treatment.",
    };

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      const prompt = `Generate a realistic Google review for "${businessName}" which is a ${type} in the ${category} category.

Star Rating: ${starRating}/5
Sentiment: ${sentimentGuide[starRating as keyof typeof sentimentGuide]}
Tone: ${selectedTone} - ${toneInstructions[selectedTone]}
Use Case: ${selectedUseCase} - ${useCaseInstructions[selectedUseCase]}
${highlights ? `Customer highlights: ${highlights}` : ""}
${serviceInstructions}

STRICT LENGTH RULE (most important):
- Write EXACTLY 2-3 short sentences only
- Maximum 200 characters total — never exceed this
- Keep it concise like a real Google Maps review, not an essay

Other requirements:
- Mention "${businessName}" once, naturally
- Sound human, simple, and authentic
- Match the ${starRating}-star sentiment
- Be specific to ${type} / ${category}
- Don't mention star rating in the text
${highlights ? `- Include briefly: ${highlights}` : ""}
${selectedServices && selectedServices.length > 0 ? `- Mention 1-2 of these only: ${selectedServices.slice(0, 2).join(", ")}` : ""}
- ${languageInstruction}

Return ONLY the review text. No quotes, labels, or extra formatting.`;

      try {
        const reviewText = this.trimReview(await this.callSarvam(prompt));

        // Check if review is unique
        if (this.isReviewUnique(reviewText, existingHashes)) {
          this.markReviewAsUsed(reviewText);
          return {
            text: reviewText,
            hash: this.generateHash(reviewText),
            language: selectedLanguage,
            rating: starRating,
            source: "ai",
          };
        }

        console.log(
          `Attempt ${attempt + 1}: Generated duplicate review, retrying...`,
        );
      } catch (error) {
        console.error(
          `AI Review Generation Error (attempt ${attempt + 1}):`,
          error,
        );
      }
    }

    // Fallback to unique hardcoded review if all attempts fail
    return this.getFallbackReview(request, existingHashes);
  }

  getFallbackReview(
    request: ReviewRequest,
    existingHashes?: Set<string>,
  ): GeneratedReview {
    const {
      businessName,
      category,
      type,
      selectedServices,
      starRating,
      language,
    } = request;
    const timestamp = Date.now();

    // Generate service-specific text
    let serviceText = "";
    if (selectedServices && selectedServices.length > 0) {
      if (selectedServices.length === 1) {
        serviceText = ` The ${selectedServices[0]} was particularly good.`;
      } else if (selectedServices.length === 2) {
        serviceText = ` The ${selectedServices[0]} and ${selectedServices[1]} were particularly good.`;
      } else {
        serviceText = ` The ${selectedServices.slice(0, 2).join(", ")} and other services were particularly good.`;
      }
    }

    const fallbacks: Record<number, Record<string, string[]>> = {
      4: {
        English: [
          `Good experience at ${businessName}. Professional service and quality work, just a minor wait time.`,
          `Really satisfied with ${businessName}. Great service quality and friendly staff. Highly recommend.`,
          `${businessName} exceeded expectations. Professional approach and excellent customer service.`,
        ],
        Gujarati: [
          `સારો અનુભવ રહ્યો. વ્યાવસાયિક સેવા અને ગુણવત્તાયુક્ત કામ, માત્ર થોડી રાહ જોવી પડી.`,
          `${businessName} માં ખૂબ સારી સેવા મળી. કર્મચારીઓ મદદગાર હતા અને કામ પણ સારું થયું.`,
        ],
        Hindi: [
          `${businessName} में अच्छा अनुभव रहा। प्रोफेशनल सर्विस और क्वालिटी वर्क, बस थोड़ा इंतजार करना पड़ा।`,
          `${businessName} में बहुत अच्छी सेवा मिली। स्टाफ सहयोगी था और काम भी बेहतरीन हुआ।`,
        ],
      },
      5: {
        English: [
          `Great experience at ${businessName}! Professional ${type} with excellent service.${serviceText} Highly recommend for ${category.toLowerCase()}.`,
          `${businessName} exceeded expectations! Quality ${type} service with friendly staff.${serviceText} Will definitely return.`,
          `Outstanding ${type}! ${businessName} provides top-notch ${category.toLowerCase()} service.${serviceText} Five stars!`,
        ],
        Gujarati: [
          `શાનદાર અનુભવ! વ્યાવસાયિક ${type} અને ઉત્તમ સેવા.${serviceText} ${category} માટે ભલામણ કરું છું.`,
          `અપેક્ષાઓથી વધુ સારું! ગુણવત્તાયુક્ત સેવા અને મિત્રતાપૂર્ણ સ્ટાફ.${serviceText} ફરીથી આવીશ.`,
        ],
        Hindi: [
          `${businessName} में बेहतरीन अनुभव! प्रोफेशनल ${type} और उत्कृष्ट सेवा.${serviceText} ${category} के लिए सिफारिश करता हूं.`,
          `${businessName} ने उम्मीदों से बढ़कर सेवा दी! गुणवत्तापूर्ण सेवा और दोस्ताना स्टाफ.${serviceText} फिर से आऊंगा.`,
        ],
      },
    };

    // Select random fallback from available options
    const ratingFallbacks = fallbacks[starRating] || fallbacks[5];
    const langKey =
      language && ratingFallbacks[language] ? language : "English";
    const languageFallbacks = ratingFallbacks[langKey];
    const randomIndex = Math.floor(Math.random() * languageFallbacks.length);
    const selectedFallback = languageFallbacks[randomIndex];
    // Make it unique by adding timestamp-based variation
    let uniqueFallback = selectedFallback;
    let hash = this.generateHash(uniqueFallback);

    if (existingHashes?.has(hash) || usedReviewHashes.has(hash)) {
      uniqueFallback = `${selectedFallback} ${timestamp}`;
      hash = this.generateHash(uniqueFallback);
    }

    this.markReviewAsUsed(uniqueFallback);
    return {
      text: uniqueFallback,
      hash,
      language: langKey,
      rating: starRating,
      source: "fallback",
    };
  }

  // Generate tagline for business
  async generateTagline(
    businessName: string,
    category: string,
    type: string,
  ): Promise<string> {
    const prompt = `Generate a catchy, professional tagline for "${businessName}" which is a ${type} in the ${category} category.

Requirements:
- Keep it under 8 words
- Make it memorable and professional
- Reflect the business type and category
- Use action words or emotional appeal
- Avoid clichés like "Your trusted partner"
- Make it unique and specific to the business

Return only the tagline, no quotes or extra text.`;

    try {
      return await this.callSarvam(prompt);
    } catch (error) {
      console.error("Tagline generation error:", error);
      // Fallback taglines based on category
      const fallbackTaglines: Record<string, string[]> = {
        Services: [
          "Excellence in Every Service",
          "Your Service Solution",
          "Quality You Can Trust",
        ],
        "Food & Beverage": [
          "Taste the Difference",
          "Fresh & Delicious Always",
          "Where Flavor Meets Quality",
        ],
        "Health & Medical": [
          "Your Health, Our Priority",
          "Caring for Your Wellness",
          "Expert Care Always",
        ],
        Education: [
          "Learning Made Easy",
          "Knowledge for Success",
          "Education Excellence",
        ],
        "Professional Businesses": [
          "Professional Solutions",
          "Expert Services",
          "Business Excellence",
        ],
      };

      const categoryTaglines =
        fallbackTaglines[category] || fallbackTaglines["Services"];
      return categoryTaglines[
        Math.floor(Math.random() * categoryTaglines.length)
      ];
    }
  }

  // Clear used hashes (for testing or reset)
  clearUsedHashes(): void {
    usedReviewHashes.clear();
  }

  // Get usage statistics
  getUsageStats(): { totalGenerated: number } {
    return {
      totalGenerated: usedReviewHashes.size,
    };
  }
}

export const aiService = new AIReviewService();
