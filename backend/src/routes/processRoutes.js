const express = require('express');
const {
  getProcessNodes,
  createProcessNode,
  updateProcessNode,
  deleteProcessNode,
  getStudentProgress,
  getProcessSubmissions,
  getProcessHistory,
  saveProcessSubmission,
  reviewProcessSubmission,
  deleteProcessSubmission,
  updateProgress
} = require('../controllers/processController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/nodes', authenticate, getProcessNodes);
router.post('/nodes', authenticate, authorize(['admin', 'teacher', 'leader']), createProcessNode);
router.put('/nodes/:nodeId', authenticate, authorize(['admin', 'teacher', 'leader']), updateProcessNode);
router.delete('/nodes/:nodeId', authenticate, authorize(['admin', 'teacher', 'leader']), deleteProcessNode);
router.get('/progress', authenticate, getStudentProgress);
router.get('/submissions', authenticate, getProcessSubmissions);
router.get('/history', authenticate, getProcessHistory);
router.post('/submissions', authenticate, saveProcessSubmission);
router.post('/submissions/:submissionId/review', authenticate, authorize(['admin', 'teacher', 'leader']), reviewProcessSubmission);
router.delete('/submissions/:submissionId', authenticate, deleteProcessSubmission);
router.put('/progress', authenticate, authorize(['admin', 'teacher', 'student_leader']), updateProgress);

module.exports = router;
