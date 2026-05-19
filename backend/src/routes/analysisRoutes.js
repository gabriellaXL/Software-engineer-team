const express = require('express');
const multer = require('multer');
const { uploadTranscript, getAnalysisResult } = require('../controllers/analysisController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', authenticate, upload.single('file'), uploadTranscript);
router.get('/:transcriptId', authenticate, getAnalysisResult);

module.exports = router;
