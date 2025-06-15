const express = require('express');
const router = express.Router();
const upload = require("../middleware/upload");
const mcqHandler = require('../controllers/mcqController');

router.post('/', upload.single('file'), mcqHandler);

module.exports = router;