const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {extractTextFromPDF} = require('../utils/parseText');

router.post('/',upload.single('file'),async (req,res) => {
    try{
        if (!req.file) {
            return res.status(400).json({error: 'No file uploaded'});
        }

        const buffer = req.file.buffer;
        const filename = req.file.originalname;

        const text = await extractTextFromPDF(buffer, filename);
        
        res.json({text});
    }
    catch(error){
        console.error('Error processing file:', error);
        res.status(500).json({error: 'Failed to process file'});
    }
});

module.exports = router;