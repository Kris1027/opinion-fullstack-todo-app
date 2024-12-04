import type { TaskProps } from '@/contexts/task-provider';
import { useTask } from '../hooks/use-task';
import { Button } from './ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';

const EditForm = ({ task }: { task: TaskProps }) => {
    const {
        handleSaveEditedTask,
        editTaskInput,
        setEditTaskInput,
        setEditingTask,
        handleStartEditing,
    } = useTask();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button onClick={() => handleStartEditing(task)}>Edit</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit your task</DialogTitle>
                    <DialogDescription>Edited task cannot be the same or empty</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSaveEditedTask} className='flex gap-2'>
                    <input
                        className='flex-grow'
                        type='text'
                        value={editTaskInput}
                        onChange={(e) => setEditTaskInput(e.target.value)}
                        placeholder='edit task...'
                    />
                    <div className='space-x-2'>
                        <DialogClose asChild>
                            <Button
                                disabled={
                                    editTaskInput === task.text || editTaskInput.trim() === ''
                                }
                                type='submit'
                            >
                                Save
                            </Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type='button' onClick={() => setEditingTask(null)}>
                                Cancel
                            </Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditForm;
