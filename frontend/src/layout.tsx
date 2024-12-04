import AddForm from './components/add-form';
import Container from './components/container';
import TaskList from './components/task-list';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Toaster } from './components/ui/toaster';
import { TaskProvider } from './contexts/task-provider';

const Layout: React.FC = () => {
    return (
        <TaskProvider>
            <Container>
                <Card className='w-[768px]'>
                    <CardHeader>
                        <CardTitle className='pb-4'>Opinion FullStack Todo App</CardTitle>
                        <AddForm />
                    </CardHeader>
                    <CardContent>
                        <TaskList />
                    </CardContent>
                </Card>
                <Toaster />
            </Container>
        </TaskProvider>
    );
};

export default Layout;
