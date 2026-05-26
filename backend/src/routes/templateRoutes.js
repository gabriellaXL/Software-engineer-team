const express = require('express');
const { uploadTemplate, getTemplates, deleteTemplate, downloadTemplate } = require('../controllers/templateController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticate, authorize(['admin', 'teacher']), uploadTemplate);
router.get('/', authenticate, getTemplates);
router.get('/:id/download', authenticate, downloadTemplate);
router.delete('/:id', authenticate, authorize(['admin', 'teacher']), deleteTemplate);

module.exports = router;
