import type { TaskProps } from '../contexts/task-provider';
import { createContext } from 'react';

export type TaskContextProps = {
    tasks: TaskProps[];
    isLoading: boolean;
    isError: string | null;
    taskInput: string;
    setTaskInput: React.Dispatch<React.SetStateAction<string>>;
    handleAddTask: (e: React.FormEvent) => Promise<void>;
    isPending: boolean;
};

export const TaskContext = createContext<TaskContextProps | undefined>(undefined);
