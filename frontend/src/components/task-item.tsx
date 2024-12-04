import { useTask } from '../hooks/use-task';
import type { TaskProps } from '../contexts/task-provider';
import EditForm from './edit-form';
import { Button } from './ui/button';

const TaskItem = ({ task }: { task: TaskProps }) => {
    const { completingTask, handleToggleComplete, deletingTask, handleDeleteTask } = useTask();

    return (
        <li className='flex justify-between p-2'>
            <span className={task.complete ? 'line-through opacity-50' : ''}>{task.text}</span>
            <div className='space-x-2'>
                <Button
                    disabled={completingTask === task.id}
                    onClick={() => handleToggleComplete(task.id)}
                >
                    {task.complete
                        ? completingTask === task.id
                            ? '...'
                            : 'undo'
                        : completingTask === task.id
                        ? '...'
                        : 'done'}
                </Button>
                <EditForm task={task} />
                <Button
                    disabled={deletingTask === task.id}
                    onClick={() => handleDeleteTask(task.id)}
                >
                    {deletingTask === task.id ? 'Deleting...' : 'Delete'}
                </Button>
            </div>
        </li>
    );
};

export default TaskItem;
