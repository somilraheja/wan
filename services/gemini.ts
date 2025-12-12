import { GoogleGenAI, Chat } from "@google/genai";

// Ensure API key is available
const apiKey = process.env.API_KEY || ''; 

let chatSession: Chat | null = null;

export const initializeChat = () => {
  if (!apiKey) {
    console.error("Gemini API Key is missing. Please set process.env.API_KEY.");
    return null;
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are WanderAI, a world-class travel agent assistant for 'Wanderlust Travels'. 
      Your goal is to help users plan amazing travel itineraries. 
      Be enthusiastic, knowledgeable, and concise. 
      Ask clarifying questions about their budget, duration, and interests if they are vague. 
      Suggest specific locations based on the company's prime destinations (Paris, Tokyo, Bali, New York) but cover the whole world.
      Formatting: Use Markdown for bolding key locations and creating bulleted lists for itineraries.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string) => {
  if (!chatSession) {
    const session = initializeChat();
    if (!session) return "I'm sorry, my AI brain is currently offline (Missing API Key).";
    chatSession = session;
  }
  
  try {
    const response = await chatSession.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the travel network right now. Please try again later.";
  }
};