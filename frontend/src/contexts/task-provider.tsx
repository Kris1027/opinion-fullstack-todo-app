import { TaskContext } from '../contexts/task-context';
import { useEffect, useState } from 'react';
import { useToast } from '../hooks/use-toast';

export type TaskProps = {
    id: string;
    text: string;
    complete: boolean;
};

const API_URL = 'http://localhost:3000/api/tasks';

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string | null>(null);
    const [isPending, setIsPending] = useState<boolean>(false);

    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [taskInput, setTaskInput] = useState<string>('');

    const { toast } = useToast();

    useEffect(() => {
        const fetchTasks = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`${API_URL}/all`);

                const data = await res.json();
                if (!res.ok) throw new Error(data.message || 'Failed to fetch tasks');

                setTasks(data.tasks);
            } catch (error) {
                setIsError((error as Error).message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTasks();
    }, []);

    const handleAddTask = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsPending(true);
        try {
            if (taskInput && taskInput.trim() !== '') {
                const res = await fetch(`${API_URL}/create`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ taskInput: taskInput }),
                });

                const data = await res.json();
                if (!res.ok) throw new Error(data.message || 'Failed to add new task');

                setTasks([...tasks, data.newTask]);
                setTaskInput('');
                toast({ title: data.message });
            } else {
                toast({ title: 'Task input cannot be empty' });
            }
        } catch (error) {
            setIsError((error as Error).message);
        } finally {
            setIsPending(false);
        }
    };

    const handleDeleteTask = async (id: string) => {
        try {
            const res = await fetch(`${API_URL}/${id}/delete`, {
                method: 'DELETE',
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Failed while deleting task');

            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
            toast({ title: data.message });
        } catch (error) {
            setIsError((error as Error).message);
        }
    };

    const handleToggleComplete = async (id: string) => {
        try {
            const res = await fetch(`${API_URL}/${id}/complete`, {
                method: 'PATCH',
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Failed while completing task');

            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === id ? { ...task, complete: !task.complete } : task
                )
            );
            toast({ title: data.message });
        } catch (error) {
            setIsError((error as Error).message);
        }
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                isLoading,
                isError,
                taskInput,
                setTaskInput,
                handleAddTask,
                isPending,
                handleDeleteTask,
                handleToggleComplete,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};
