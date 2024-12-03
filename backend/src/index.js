import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

let tasks = [];

app.post('/api/tasks/create', (req, res) => {
    try {
        const { taskInput } = req.body;
        if (!taskInput || taskInput.trim() === '')
            return res.status(200).json({ message: 'Task input cannot be empty' });

        const newTask = {
            id: Math.random(),
            text: taskInput,
            complete: false,
        };

        tasks.push(newTask);

        res.status(201).json({ message: 'Task created successfully', newTask });
    } catch (error) {
        console.error('Error in createTask controller', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.get('/api/tasks/all', (req, res) => {
    try {
        res.status(200).json({
            message: tasks.length > 0 ? 'Tasks fetched successfully' : 'No tasks',
            tasks,
        });
    } catch (error) {
        console.error('Error in getAllTasks controller', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.delete('/api/tasks/:id/delete', (req, res) => {
    try {
        const id = Number(req.params.id);

        const taskExist = tasks.find((task) => task.id === id);
        if (!taskExist) return res.status(404).json({ message: 'Task not found' });

        tasks = tasks.filter((task) => task.id !== id);

        return res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error('Error in deleteTask controller', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
