const {GoogleGenerativeAI} = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',    
})

// const cache = new Map();
const generateContent = async (text)=>{
    try{
        const prompt = `Summarize the following academic content clearly and concisely:\n\n${text}`;
        // if (cache.has(prompt)) {
        //     return res.json({ text: cache.get(prompt) });
        // }
        const result = await model.generateContent(prompt);
        const response = await result.response;

        return response.text();
        // const text = response.text();
        // cache.set(prompt, text);
        // res.json({ text });
    }
    catch(err){
        console.log(err);
    }
}

module.exports = generateContent;