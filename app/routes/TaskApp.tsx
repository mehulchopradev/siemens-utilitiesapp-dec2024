import AddTask from '~/components/tasks/AddTask';
import TaskProvider from '~/components/tasks/Task.context';
import TaskList from '~/components/tasks/TaskList';

export default function TaskApp() {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <h1>Task App</h1>
      <TaskProvider>
        <AddTask />
        <TaskList />
        <button>Clear completed tasks</button>
      </TaskProvider>
    </div>
  );
}