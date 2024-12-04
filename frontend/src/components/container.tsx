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
        handleDeleteTask,
        handleToggleComplete,
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
                    <Button type='submit'>Add new task</Button>
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
                                <span className={task.complete ? 'line-through opacity-50' : ''}>
                                    {task.text}
                                </span>
                                <Button onClick={() => handleToggleComplete(task.id)}>
                                    {task.complete ? 'Undo' : 'Done'}
                                </Button>
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
