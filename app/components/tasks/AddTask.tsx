import { useContext, useState, type ChangeEvent } from 'react';
import { TaskContext } from './Task.context';

export default function AddTask() {
  const context = useContext(TaskContext)
  const [ newTask, setNewTask ] = useState<string>('');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  }

  const handleClick = () => {
    context.addTask(newTask);
    setNewTask('');
  }

  return (
    <div className='flex gap-4 items-center'>
      <input
        type="text"
        placeholder="Task name"
        onChange={handleOnChange}
        value={newTask}
      />
      <button
        disabled={!newTask}
        onClick={handleClick}>
          Add Task
      </button>
    </div>
  );
}