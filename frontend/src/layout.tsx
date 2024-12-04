import { TaskProvider } from './contexts/task-provider';
import Container from './components/container';
import { Toaster } from './components/ui/toaster';

const Layout: React.FC = () => {
    return (
        <TaskProvider>
            <main>
                <Container />
            </main>
            <Toaster />
        </TaskProvider>
    );
};

export default Layout;
