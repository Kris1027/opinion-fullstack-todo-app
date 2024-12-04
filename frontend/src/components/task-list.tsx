import TaskItem from './task-item';
import { Table, TableBody, TableHead, TableHeader, TableRow } from './ui/table';
import { useTask } from '../hooks/use-task';

const TaskList = () => {
    const { tasks } = useTask();

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Tasks</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </TableBody>
        </Table>
    );
};

export default TaskList;
