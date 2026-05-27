const express = require('express');
const {
  getNotices,
  createNotice,
  updateNotice,
  deleteNotice,
  markNoticeRead,
  markAllNoticesRead,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getPlans,
  createPlan,
  updatePlan,
  deletePlan,
} = require('../controllers/basicController');
const {
  downloadTemplate,
  exportData,
  importData,
} = require('../controllers/importExportController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/notices', authenticate, getNotices);
router.post('/notices', authenticate, authorize(['admin', 'teacher', 'leader']), createNotice);
router.post('/notices/read-all', authenticate, authorize(['student', 'student_leader']), markAllNoticesRead);
router.post('/notices/:noticeId/read', authenticate, authorize(['student', 'student_leader']), markNoticeRead);
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
router.get('/import-export/templates/:type', authenticate, authorize(['admin', 'teacher', 'leader']), downloadTemplate);
router.get('/import-export/data/:type', authenticate, authorize(['admin', 'teacher', 'leader']), exportData);
router.post('/import-export/import/:type', authenticate, authorize(['admin', 'teacher', 'leader']), importData);

module.exports = router;
