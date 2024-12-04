import { useTask } from '../hooks/use-task';
import TaskList from './task-list';
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
                {isLoading && <p>Is Loading...</p>}
                {isError && <p>{isError}</p>}
                {tasks && tasks.length > 0 ? <TaskList /> : <p>You have no task to do...</p>}
            </CardContent>
        </Card>
    );
};

export default Container;
