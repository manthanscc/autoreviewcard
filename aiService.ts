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
  starRating: number;
}

export class AIReviewService {
  private model = genAI?.getGenerativeModel({ model: 'gemini-2.0-flash' }) || null;

  async generateReview(request: ReviewRequest): Promise<string> {
    // Check if Gemini is configured
    if (!config.isGeminiConfigured() || !this.model) {
      console.warn('Gemini API not configured, using fallback review');
      return this.getFallbackReview(request.businessName, request.starRating);
    }

    const { businessName, category, type, highlights, starRating } = request;

    // Language combinations
    const languageCombos = [
      { label: 'English', prompt: 'Write the review in English.' },
      { label: 'Gujarati', prompt: 'Write the review in Gujarati.' },
      { label: 'Hindi', prompt: 'Write the review in Hindi.' },
      // { label: 'English + Gujarati', prompt: 'Write the review in English and Gujarati, mixing both languages naturally.' },
      // { label: 'English + Hindi', prompt: 'Write the review in English and Hindi, mixing both languages naturally.' },
      // { label: 'Hindi + Gujarati', prompt: 'Write the review in Hindi and Gujarati, mixing both languages naturally.' }
    ];
    // Pick a random language combination
    const randomCombo = languageCombos[Math.floor(Math.random() * languageCombos.length)];

    const sentimentGuide = {
      1: "Very negative, expressing frustration and dissatisfaction with specific issues",
      2: "Below average experience, mentioning problems but being constructive",
      3: "Mixed or neutral review with both positive and negative aspects",
      4: "Positive experience with good aspects, maybe one small downside",
      5: "Enthusiastic and praise-worthy, fully satisfied customer"
    };

    const prompt = `Generate a realistic Google review for "${businessName}" which is a ${type} in the ${category} category.

Star Rating: ${starRating}/5
Sentiment: ${sentimentGuide[starRating as keyof typeof sentimentGuide]}
${highlights ? `Customer highlights: ${highlights}` : ''}

Requirements:
- Write 2-6 sentences maximum
- Sound natural, human-like, simple language
- Match the ${starRating}-star sentiment exactly
- Be specific to the business type (${type})
- Use realistic customer language
- No fake exaggeration, keep it credible
- Don't mention the star rating in the text
${highlights ? `- Try to incorporate these highlights naturally: ${highlights}` : ''}

${randomCombo.prompt}
Return only the review text, no quotes or extra formatting.`;

    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text().trim();
    } catch (error) {
      console.error('AI Review Generation Error:', error);
      return this.getFallbackReview(businessName, starRating);
    }
  }

  private getFallbackReview(businessName: string, starRating: number): string {
    const fallbacks = {
      1: `Had a disappointing experience at ${businessName}. The service was below expectations and several issues weren't addressed properly.`,
      2: `${businessName} was okay but had some problems. The staff tried to help but there's definitely room for improvement.`,
      3: `Mixed experience at ${businessName}. Some things were good, others could be better. Average overall.`,
      4: `Good experience at ${businessName}. Professional service and quality work, just a minor wait time.`,
      5: `Excellent experience at ${businessName}! Outstanding service, professional team, and exceeded expectations. Highly recommended!`
    };
    
    return fallbacks[starRating as keyof typeof fallbacks];
  }
}

export const aiService = new AIReviewService();