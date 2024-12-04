import { useTask } from '../hooks/use-task';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Container = () => {
    const { isLoading, isError, tasks } = useTask();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Opinion FullStack Todo App</CardTitle>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <p>is Loading...</p>
                ) : isError ? (
                    <p>{isError}</p>
                ) : tasks.length > 0 ? (
                    <ul>
                        {tasks.map((task) => (
                            <li key={task.id}>{task.text}</li>
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
