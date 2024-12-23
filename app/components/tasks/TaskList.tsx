import { useContext } from 'react'
import { TaskContext, type Task } from './Task.context'
import { observer } from 'mobx-react-lite';

function TaskList() {
  const context = useContext(TaskContext);

  return (
    <div>
      <h2>Task List</h2>
      <div>
        {context.store.tasks.map((task: Task) => (
          <div key={task.id} className='flex gap-4 items-center'>
            <input
              type="checkbox"
              onInput={() => context.store.toggleTask(task.id)}
            />
            <span>{task.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default observer(TaskList);