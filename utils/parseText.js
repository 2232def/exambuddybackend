const pdfparser = require('pdf-parse');

exports.extractTextFromPDF = async (Buffer, filename) => {
    if (filename.endsWith('.pdf')) {
        try {
            const data = await pdfparser(Buffer);
            return data.text;
        } catch (error) {
            console.error('Error extracting PDF text:', error);
            throw error;
        }
    }
    else if (filename.endsWith('.txt')) {
        return Buffer.toString('utf-8');
    } 
    else {
        throw new Error('Invalid file type. Please upload a PDF or TXT file.');
    }
}