import express from 'express';
import {
    createTask,
    deleteTask,
    getAllTasks,
    toggleCompleteTask,
    updateTask,
} from '../controllers/task.controller.js';

const router = express.Router();

router.post('/api/tasks/create', createTask);
router.get('/api/tasks/all', getAllTasks);
router.delete('/api/tasks/:id/delete', deleteTask);
router.patch('/api/tasks/:id/update', updateTask);
router.patch('/api/tasks/:id/complete', toggleCompleteTask);

export default router;
