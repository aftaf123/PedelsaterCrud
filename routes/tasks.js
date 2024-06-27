const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getLandingPage);
router.get('/tasks', taskController.getTasks);
router.post('/tasks', taskController.createTask);
router.get('/tasks/:id', taskController.getTaskById);
router.get('/tasks/edit/:id', taskController.getEditTask);
router.post('/tasks/update/:id', taskController.updateTask);
router.post('/tasks/delete/:id', taskController.deleteTask);

module.exports = router;
