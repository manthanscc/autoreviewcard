import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from './config';

const genAI = config.isGeminiConfigured() 
  ? new GoogleGenerativeAI(config.ai.geminiApiKey)
  : null;

export interface ReviewRequest {
  businessName: string;
  category: string;
  type: string;
  highlights?: string;
  selectedServices?: string[];
  starRating: number;
  language?: string;
  tone?: 'Professional' | 'Friendly' | 'Casual' | 'Grateful';
  useCase?: 'Customer review' | 'Student feedback' | 'Patient experience';
}

export interface GeneratedReview {
  text: string;
  hash: string;
  language: string;
  rating: number;
}

// Store used review hashes to prevent duplicates
const usedReviewHashes = new Set<string>();

export class AIReviewService {
  private model = genAI?.getGenerativeModel({ model: 'gemini-2.0-flash' }) || null;

  // Generate a simple hash for review content
  private generateHash(content: string): string {
    let hash = 0;
    for (let i = 0; i < content.length; i++) {
      const char = content.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36);
  }

  // Check if review is unique
  private isReviewUnique(content: string): boolean {
    const hash = this.generateHash(content);
    return !usedReviewHashes.has(hash);
  }

  // Mark review as used
  private markReviewAsUsed(content: string): void {
    const hash = this.generateHash(content);
    usedReviewHashes.add(hash);
  }

  async generateReview(request: ReviewRequest, maxRetries: number = 5): Promise<GeneratedReview> {

    // Check if Gemini is configured
    if (!config.isGeminiConfigured() || !this.model) {
      console.warn('Gemini API not configured, using fallback review');
      return this.getFallbackReview(request);
    }

    const { businessName, category, type, highlights, selectedServices, starRating, language, tone, useCase } = request;



    const sentimentGuide = {
      1: "Very negative, expressing frustration and dissatisfaction with specific issues",
      2: "Below average experience, mentioning problems but being constructive",
      3: "Mixed or neutral review with both positive and negative aspects",
      4: "Positive experience with good aspects, maybe one small downside",
      5: "Enthusiastic and praise-worthy, fully satisfied customer"
    };

    // Language options and random selection logic
    const languageOptions = [
      "English",
      "Gujarati",
      "Hindi", 
    ];
    
    const selectedLanguage = language || languageOptions[Math.floor(Math.random() * languageOptions.length)];
    const selectedTone = tone || 'Friendly';
    const selectedUseCase = useCase || 'Customer review';

    // Build service-specific instructions
    let serviceInstructions = '';
    if (selectedServices && selectedServices.length > 0) {
      serviceInstructions = `
Customer specifically wants to highlight these services: ${selectedServices.join(', ')}
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
      'Professional': 'Use formal, professional language appropriate for business contexts.',
      'Friendly': 'Use warm, approachable language that feels personal and genuine.',
      'Casual': 'Use relaxed, informal language that sounds conversational and natural.',
      'Grateful': 'Use appreciative, thankful language that expresses genuine gratitude.'
    };

    // Use case instructions
    const useCaseInstructions = {
      'Customer review': 'Write from the perspective of a satisfied customer who used the service.',
      'Student feedback': 'Write from the perspective of a student or learner who benefited from the education/training.',
      'Patient experience': 'Write from the perspective of a patient who received medical care or treatment.'
    };

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      const prompt = `Generate a realistic Google review for "${businessName}" which is a ${type} in the ${category} category.

Star Rating: ${starRating}/5
Sentiment: ${sentimentGuide[starRating as keyof typeof sentimentGuide]}
Tone: ${selectedTone} - ${toneInstructions[selectedTone]}
Use Case: ${selectedUseCase} - ${useCaseInstructions[selectedUseCase]}
${highlights ? `Customer highlights: ${highlights}` : ''}
${serviceInstructions}

Requirements:
- Write 3-5 sentences maximum
- First sentence always different
- ${businessName} is shown always different place in review
- Sound natural and human-like with regional authenticity
- Match the ${starRating}-star sentiment exactly
- Be specific to the business type (${type}) and category (${category})
- Use realistic customer language for ${selectedUseCase}
- No fake exaggeration, keep it credible and locally relevant
- Don't mention the star rating in the text
- Make it unique - avoid common phrases or structures
- Use varied sentence structures and vocabulary
${highlights ? `- Try to incorporate these highlights naturally: ${highlights}` : ''}
${selectedServices && selectedServices.length > 0 ? `- Naturally incorporate these service experiences: ${selectedServices.join(', ')}` : ''}
${selectedServices && selectedServices.length > 0 ? `- Naturally incorporate these service experiences: ${selectedServices.join(', ')}` : ''}
- ${languageInstruction}
- For mixed languages, ensure both languages flow naturally together
- Use authentic regional expressions and terminology
- Avoid generic templates or repetitive structures

Return only the review text, no quotes or extra formatting.`;

      try {
        const result = await this.model.generateContent(prompt);
        const response = await result.response;
        const reviewText = response.text().trim();

        // Check if review is unique
        if (this.isReviewUnique(reviewText)) {
          this.markReviewAsUsed(reviewText);
          return {
            text: reviewText,
            hash: this.generateHash(reviewText),
            language: selectedLanguage,
            rating: starRating
          };
        }

        console.log(`Attempt ${attempt + 1}: Generated duplicate review, retrying...`);
      } catch (error) {
        console.error(`AI Review Generation Error (attempt ${attempt + 1}):`, error);
      }
    }

    // Fallback to unique hardcoded review if all attempts fail
    return this.getFallbackReview(request);
  }

  private getFallbackReview(request: ReviewRequest): GeneratedReview {
    const { businessName, category, type, selectedServices, starRating, language } = request;
    const timestamp = Date.now();
    
    // Generate service-specific text
    let serviceText = '';
    if (selectedServices && selectedServices.length > 0) {
      if (selectedServices.length === 1) {
        serviceText = ` The ${selectedServices[0]} was particularly good.`;
      } else if (selectedServices.length === 2) {
        serviceText = ` The ${selectedServices[0]} and ${selectedServices[1]} were particularly good.`;
      } else {
        serviceText = ` The ${selectedServices.slice(0, 2).join(', ')} and other services were particularly good.`;
      }
    }
      
    const fallbacks: Record<number, Record<string, string[]>> = {
      4: {
        "English": [
          `Good experience at ${businessName}. Professional service and quality work, just a minor wait time.`,
          `Really satisfied with ${businessName}. Great service quality and friendly staff. Highly recommend.`,
          `${businessName} exceeded expectations. Professional approach and excellent customer service.`
        ],
        "Gujarati": [
          `સારો અનુભવ રહ્યો. વ્યાવસાયિક સેવા અને ગુણવત્તાયુક્ત કામ, માત્ર થોડી રાહ જોવી પડી.`,
          `${businessName} માં ખૂબ સારી સેવા મળી. કર્મચારીઓ મદદગાર હતા અને કામ પણ સારું થયું.`
        ],
        "Hindi": [
          `${businessName} में अच्छा अनुभव रहा। प्रोफेशनल सर्विस और क्वालिटी वर्क, बस थोड़ा इंतजार करना पड़ा।`,
          `${businessName} में बहुत अच्छी सेवा मिली। स्टाफ सहयोगी था और काम भी बेहतरीन हुआ।`
        ]
      },
      5: {
        "English": [
          `Great experience at ${businessName}! Professional ${type} with excellent service.${serviceText} Highly recommend for ${category.toLowerCase()}.`,
          `${businessName} exceeded expectations! Quality ${type} service with friendly staff.${serviceText} Will definitely return.`,
          `Outstanding ${type}! ${businessName} provides top-notch ${category.toLowerCase()} service.${serviceText} Five stars!`
        ],
        "Gujarati": [
          `શાનદાર અનુભવ! વ્યાવસાયિક ${type} અને ઉત્તમ સેવા.${serviceText} ${category} માટે ભલામણ કરું છું.`,
          `અપેક્ષાઓથી વધુ સારું! ગુણવત્તાયુક્ત સેવા અને મિત્રતાપૂર્ણ સ્ટાફ.${serviceText} ફરીથી આવીશ.`
        ],
        "Hindi": [
          `${businessName} में बेहतरीन अनुभव! प्रोफेशनल ${type} और उत्कृष्ट सेवा.${serviceText} ${category} के लिए सिफारिश करता हूं.`,
          `${businessName} ने उम्मीदों से बढ़कर सेवा दी! गुणवत्तापूर्ण सेवा और दोस्ताना स्टाफ.${serviceText} फिर से आऊंगा.`
        ]
      }
    };

    // Select random fallback from available options
    const ratingFallbacks = fallbacks[starRating] || fallbacks[5];
    const langKey = language && ratingFallbacks[language] ? language : "English";
    const languageFallbacks = ratingFallbacks[langKey];
    const randomIndex = Math.floor(Math.random() * languageFallbacks.length);
    const selectedFallback = languageFallbacks[randomIndex];
    // Make it unique by adding timestamp-based variation
    const uniqueFallback = `${selectedFallback} (${timestamp})`.replace(` (${timestamp})`, '');
    return {
      text: uniqueFallback,
      hash: this.generateHash(uniqueFallback + timestamp),
      language: langKey,
      rating: starRating
    };
  }

  // Generate tagline for business
  async generateTagline(businessName: string, category: string, type: string): Promise<string> {
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
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text().trim();
    } catch (error) {
      console.error('Tagline generation error:', error);
      // Fallback taglines based on category
      const fallbackTaglines: Record<string, string[]> = {
        'Services': ['Excellence in Every Service', 'Your Service Solution', 'Quality You Can Trust'],
        'Food & Beverage': ['Taste the Difference', 'Fresh & Delicious Always', 'Where Flavor Meets Quality'],
        'Health & Medical': ['Your Health, Our Priority', 'Caring for Your Wellness', 'Expert Care Always'],
        'Education': ['Learning Made Easy', 'Knowledge for Success', 'Education Excellence'],
        'Professional Businesses': ['Professional Solutions', 'Expert Services', 'Business Excellence']
      };
      
      const categoryTaglines = fallbackTaglines[category] || fallbackTaglines['Services'];
      return categoryTaglines[Math.floor(Math.random() * categoryTaglines.length)];
    }
  }

  // Clear used hashes (for testing or reset)
  clearUsedHashes(): void {
    usedReviewHashes.clear();
  }

  // Get usage statistics
  getUsageStats(): { totalGenerated: number } {
    return {
      totalGenerated: usedReviewHashes.size
    };
  }
}

export const aiService = new AIReviewService();