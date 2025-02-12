import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = process.env.GOOGLE_API_KEY || "AIzaSyDX66YkP8DukzdC5D7fLYpZIFR-Cqb6vl4"
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const prompt = "Explain how AI works";

const result = await model.generateContent(prompt);
console.log(result.response.text());

const generateContent = async (prompt)=>{
const result = await model.generateContent(prompt)
return result.response.text()
}

export default generateContent