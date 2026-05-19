const express = require('express');
const { searchPolicy, maintainKnowledge } = require('../controllers/policyController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/search', authenticate, searchPolicy);
router.post('/maintain', authenticate, authorize(['admin', 'teacher']), maintainKnowledge);

module.exports = router;
