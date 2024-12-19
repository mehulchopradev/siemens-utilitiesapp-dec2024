import { useContext } from 'react'
import { TaskContext, type Task } from './Task.context'

export default function TaskList() {
  const context = useContext(TaskContext);

  return (
    <div>
      <h2>Task List</h2>
      <div>
        {context.tasks.map((task: Task) => (
          <div key={task.id} className='flex gap-4 items-center'>
            <input type="checkbox" />
            <span>{task.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}