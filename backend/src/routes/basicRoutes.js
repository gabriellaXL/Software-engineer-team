const express = require('express');
const {
  getNotices,
  createNotice,
  updateNotice,
  deleteNotice,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getPlans,
  createPlan,
  updatePlan,
  deletePlan,
} = require('../controllers/basicController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/notices', authenticate, getNotices);
router.post('/notices', authenticate, authorize(['admin', 'teacher', 'leader']), createNotice);
router.put('/notices/:noticeId', authenticate, authorize(['admin', 'teacher', 'leader']), updateNotice);
router.delete('/notices/:noticeId', authenticate, authorize(['admin', 'teacher', 'leader']), deleteNotice);
router.get('/users', authenticate, authorize(['admin', 'teacher', 'leader']), getUsers);
router.post('/users', authenticate, authorize(['admin', 'teacher', 'leader']), createUser);
router.put('/users/:userId', authenticate, authorize(['admin', 'teacher', 'leader']), updateUser);
router.delete('/users/:userId', authenticate, authorize(['admin', 'teacher', 'leader']), deleteUser);
router.get('/plans', authenticate, getPlans);
router.post('/plans', authenticate, authorize(['admin', 'teacher', 'leader']), createPlan);
router.put('/plans/:planId', authenticate, authorize(['admin', 'teacher', 'leader']), updatePlan);
router.delete('/plans/:planId', authenticate, authorize(['admin', 'teacher', 'leader']), deletePlan);

module.exports = router;
