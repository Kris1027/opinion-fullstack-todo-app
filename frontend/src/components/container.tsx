import { useTask } from '../hooks/use-task';
import TaskItem from './task-item';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';

const Container = () => {
    const { isLoading, isError, tasks, taskInput, setTaskInput, handleAddTask, addingTask } =
        useTask();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Opinion FullStack Todo App</CardTitle>
                <form onSubmit={handleAddTask}>
                    <Input
                        type='text'
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                        placeholder='new task...'
                    />
                    <Button disabled={addingTask} type='submit'>
                        {addingTask ? 'Adding new task...' : 'Add new task'}
                    </Button>
                </form>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <p>is Loading...</p>
                ) : isError ? (
                    <p>{isError}</p>
                ) : tasks.length > 0 ? (
                    <ul>
                        {tasks.map((task) => (
                            <TaskItem key={task.id} task={task} />
                        ))}
                    </ul>
                ) : (
                    <p>No Task</p>
                )}
            </CardContent>
        </Card>
    );
};

export default Container;
