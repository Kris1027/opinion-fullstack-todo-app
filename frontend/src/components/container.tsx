import { useTask } from '../hooks/use-task';
import AddForm from './add-form';
import TaskList from './task-list';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Container = () => {
    const { isLoading, isError, tasks } = useTask();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Opinion FullStack Todo App</CardTitle>
                <AddForm />
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
