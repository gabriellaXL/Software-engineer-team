const express = require('express');
const { uploadTemplate, getTemplates, deleteTemplate } = require('../controllers/templateController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticate, authorize(['admin', 'teacher']), uploadTemplate);
router.get('/', authenticate, getTemplates);
router.delete('/:id', authenticate, authorize(['admin', 'teacher']), deleteTemplate);

module.exports = router;
