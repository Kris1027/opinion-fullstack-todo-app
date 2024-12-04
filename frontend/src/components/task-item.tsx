import { useTask } from '../hooks/use-task';
import type { TaskProps } from '../contexts/task-provider';
import EditForm from './edit-form';
import { Button } from './ui/button';
import { TableCell, TableRow } from './ui/table';

const TaskItem = ({ task }: { task: TaskProps }) => {
    const { completingTask, handleToggleComplete, deletingTask, handleDeleteTask } = useTask();

    return (
        <TableRow key={task.id}>
            <TableCell>
                <p className={task.complete ? 'line-through opacity-50' : ''}>{task.text}</p>
            </TableCell>
            <TableCell className='flex justify-end space-x-1 sm:space-x-2'>
                <Button
                    variant='outline'
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
                {!task.complete && <EditForm task={task} />}
                <Button
                    variant='destructive'
                    disabled={deletingTask === task.id}
                    onClick={() => handleDeleteTask(task.id)}
                >
                    {deletingTask === task.id ? 'Deleting...' : 'Delete'}
                </Button>
            </TableCell>
        </TableRow>
    );
};

export default TaskItem;
