import { useTask } from '../hooks/use-task';
import { Button } from './ui/button';
import { Input } from './ui/input';

const AddForm = () => {
    const { taskInput, setTaskInput, handleAddTask, addingTask } = useTask();

    return (
        <form onSubmit={handleAddTask} className='flex gap-2'>
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
    );
};

export default AddForm;
