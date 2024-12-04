import type { TaskProps } from '../contexts/task-provider';
import { createContext } from 'react';

export type TaskContextProps = {
    tasks: TaskProps[];
    isLoading: boolean;
    isError: string | null;
};

export const TaskContext = createContext<TaskContextProps | undefined>(undefined);
