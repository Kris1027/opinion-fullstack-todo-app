import { TaskContext, type TaskContextProps } from '../contexts/task-context';
import { useContext } from 'react';

export const useTask = (): TaskContextProps => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};
