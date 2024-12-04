import { v4 as uuidv4 } from 'uuid';

let tasks = [];

export const createTask = (req, res) => {
    try {
        const { taskInput } = req.body;
        if (!taskInput || taskInput.trim() === '')
            return res.status(400).json({ message: 'Task input cannot be empty' });

        const newTask = {
            id: uuidv4(),
            text: taskInput,
            complete: false,
        };

        tasks.push(newTask);

        res.status(201).json({ message: 'Task created successfully', newTask });
    } catch (error) {
        console.error('Error in createTask controller', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

export const getAllTasks = (req, res) => {
    try {
        res.status(200).json({
            message: tasks.length > 0 ? 'Tasks fetched successfully' : 'No tasks',
            tasks,
        });
    } catch (error) {
        console.error('Error in getAllTasks controller', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

export const deleteTask = (req, res) => {
    try {
        const id = req.params.id;

        const taskExist = tasks.find((task) => task.id === id);
        if (!taskExist) return res.status(404).json({ message: 'Task not found' });

        tasks = tasks.filter((task) => task.id !== id);

        return res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error('Error in deleteTask controller', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

export const updateTask = (req, res) => {
    try {
        const id = req.params.id;
        const { editTaskInput } = req.body;

        const taskExist = tasks.find((task) => task.id === id);
        if (!taskExist) return res.status(404).json({ message: 'Task not found' });
        if (!editTaskInput || editTaskInput.trim() === '') {
            return res.status(400).json({ message: 'Task input cannot be empty' });
        }

        tasks = tasks.map((task) => (task.id === id ? { ...task, text: editTaskInput } : task));

        const updatedTask = tasks.find((task) => task.id === id);

        return res.status(200).json({ message: 'Task updated successfully', updatedTask });
    } catch (error) {
        console.error('Error in updateTask controller', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

export const toggleCompleteTask = (req, res) => {
    try {
        const id = req.params.id;

        const taskExist = tasks.find((task) => task.id === id);
        if (!taskExist) return res.status(404).json({ message: 'Task not found' });

        tasks = tasks.map((task) =>
            task.id === id ? { ...task, complete: !task.complete } : task
        );

        const updatedTask = tasks.find((task) => task.id === id);

        res.status(200).json({
            message: updatedTask.complete ? 'Task marked as complete' : 'Task marked as uncomplete',
            task: updatedTask,
        });
    } catch (error) {
        console.error('Error in toggleCompleteTask controller', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};
