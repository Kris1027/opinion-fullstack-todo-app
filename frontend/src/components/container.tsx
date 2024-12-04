import { useTask } from '../hooks/use-task';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';

const Container = () => {
    const {
        isLoading,
        isError,
        tasks,
        taskInput,
        setTaskInput,
        handleAddTask,
        isPending,
        handleDeleteTask,
    } = useTask();

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
                    <Button disabled={isPending} type='submit'>
                        Add new task
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
                            <li key={task.id}>
                                <span>{task.text}</span>
                                <Button onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                            </li>
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
