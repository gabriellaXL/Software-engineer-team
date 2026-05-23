const express = require('express');
const { getNotices, createNotice, getUsers, getPlans } = require('../controllers/basicController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/notices', authenticate, getNotices);
router.post('/notices', authenticate, authorize(['admin', 'teacher', 'leader']), createNotice);
router.get('/users', authenticate, authorize(['admin', 'teacher', 'leader']), getUsers);
router.get('/plans', authenticate, getPlans);

module.exports = router;
