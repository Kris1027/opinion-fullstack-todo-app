import Container from './components/container';
import { TaskProvider } from './contexts/task-provider';

const Todo: React.FC = () => {
    return (
        <TaskProvider>
            <Container />
        </TaskProvider>
    );
};

export default Todo;
