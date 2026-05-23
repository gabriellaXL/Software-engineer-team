const express = require('express');
const multer = require('multer');
const os = require('os');
const path = require('path');
const { uploadTranscript, getAnalysisResult } = require('../controllers/analysisController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();
const upload = multer({ dest: path.join(os.tmpdir(), 'sds-transcript-uploads') });

router.post('/upload', authenticate, upload.single('file'), uploadTranscript);
router.get('/:transcriptId', authenticate, getAnalysisResult);

module.exports = router;
