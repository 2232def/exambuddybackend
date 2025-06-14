const express = require('express');
const router = express.Router();
const upload = require("../middleware/upload");
const summarizeHandler = require('../controllers/summarizeController');

router.post('/', upload.single('file'),summarizeHandler);

module.exports = router;