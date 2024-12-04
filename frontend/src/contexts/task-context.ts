import type { TaskProps } from '../contexts/task-provider';
import { createContext } from 'react';

export type TaskContextProps = {
    tasks: TaskProps[];
    isLoading: boolean;
    isError: string | null;
    taskInput: string;
    setTaskInput: React.Dispatch<React.SetStateAction<string>>;
    handleAddTask: (e: React.FormEvent) => Promise<void>;
    handleDeleteTask: (id: string) => Promise<void>;
    handleToggleComplete: (id: string) => Promise<void>;
    addingTask: boolean;
    deletingTask: string | null;
    completingTask: string | null;
};

export const TaskContext = createContext<TaskContextProps | undefined>(undefined);
