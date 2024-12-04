import TaskItem from './task-item';
import { Table, TableBody, TableHead, TableHeader, TableRow } from './ui/table';
import { useTask } from '../hooks/use-task';

const TaskList = () => {
    const { isLoading, isError, tasks } = useTask();

    return (
        <>
            {isLoading ? (
                <p>Is Loading...</p>
            ) : isError ? (
                <p>{isError}</p>
            ) : tasks && tasks.length > 0 ? (
                <Table className='text-xs sm:text-base'>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Tasks</TableHead>
                            <TableHead className='text-right'>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tasks.map((task) => (
                            <TaskItem key={task.id} task={task} />
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <p>You have no task to do...</p>
            )}
        </>
    );
};

export default TaskList;
