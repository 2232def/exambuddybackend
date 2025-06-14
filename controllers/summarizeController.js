const {extractTextFromPDF} = require('../utils/parseText');
const generateContent = require('../services/aiService');

const summarizeHandler = async (req, res) => {
    try {
        const buffer = req.file.buffer;
        const filename = req.file.originalname;

        const text = await extractTextFromPDF(buffer,filename);
        const content = await generateContent(text);

        res.json({ content });

    }
    catch (error) {
        console.error('Error summarizing document:', error);
        res.status(500).json({ error: 'Failed to summarize document' });
    }
}

module.exports = summarizeHandler;