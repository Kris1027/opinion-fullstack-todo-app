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
        addingTask,
        deletingTask,
        completingTask,
        editTaskInput,
        setEditTaskInput,
        handleStartEditing,
        handleSaveEditedTask,
        editingTask,
        setEditingTask,
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
                    <Button disabled={addingTask} type='submit'>
                        {addingTask ? 'Adding new task...' : 'Add new task'}
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
                                {editingTask && editingTask.id === task.id ? (
                                    <form onSubmit={handleSaveEditedTask}>
                                        <input
                                            type='text'
                                            value={editTaskInput}
                                            onChange={(e) => setEditTaskInput(e.target.value)}
                                            placeholder='edit task...'
                                        />
                                        <Button type='submit'>Save</Button>
                                        <Button onClick={() => setEditingTask(null)} type='reset'>
                                            Cancel
                                        </Button>
                                    </form>
                                ) : (
                                    <>
                                        <span
                                            className={
                                                task.complete ? 'line-through opacity-50' : ''
                                            }
                                        >
                                            {task.text}
                                        </span>
                                        <Button
                                            disabled={completingTask === task.id}
                                            onClick={() => handleToggleComplete(task.id)}
                                        >
                                            {task.complete
                                                ? completingTask === task.id
                                                    ? '...'
                                                    : 'undo'
                                                : completingTask === task.id
                                                ? '...'
                                                : 'done'}
                                        </Button>
                                        <Button onClick={() => handleStartEditing(task)}>
                                            Edit
                                        </Button>
                                        <Button
                                            disabled={deletingTask === task.id}
                                            onClick={() => handleDeleteTask(task.id)}
                                        >
                                            {deletingTask === task.id ? 'Deleting...' : 'Delete'}
                                        </Button>
                                    </>
                                )}
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
