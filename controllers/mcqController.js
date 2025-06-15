const {extractTextFromPDF} = require('../utils/parseText');
const {generateMCQFromText} = require('../services/aiService');

const mcqHandler = async (req, res) => {
    try{
        const buffer = req.file.buffer;
        const filename = req.file.originalname;

        const text = await extractTextFromPDF(buffer, filename);
        const mcqs = await generateMCQFromText(text);

        res.json({ mcqs });
    }
    catch (error) {
        console.error('Error generating MCQs:', error);
        res.status(500).json({ error: 'Failed to generate MCQs' });
    }
}

module.exports = mcqHandler;