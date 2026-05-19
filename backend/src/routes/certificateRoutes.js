const express = require('express');
const { generateCertificate, getCertificates } = require('../controllers/certificateController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/generate', authenticate, authorize(['admin', 'teacher']), generateCertificate);
router.get('/', authenticate, authorize(['student', 'student_leader']), getCertificates);

module.exports = router;
