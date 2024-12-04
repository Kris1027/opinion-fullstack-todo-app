import { TaskContext } from '../contexts/task-context';
import { useEffect, useState } from 'react';

export type TaskProps = {
    id: string;
    text: string;
    complete: boolean;
};

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTasks = async () => {
            setIsLoading(true);
            try {
                const res = await fetch('http://localhost:3000/api/tasks/all');
                const data = await res.json();
                if (!res.ok) throw new Error(data.message || 'failed to fetch tasks');

                setTasks(data.tasks);
            } catch (error) {
                setIsError((error as Error).message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTasks();
    }, []);

    return (
        <TaskContext.Provider value={{ tasks, isLoading, isError }}>
            {children}
        </TaskContext.Provider>
    );
};
