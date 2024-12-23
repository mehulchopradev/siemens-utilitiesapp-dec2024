import { observer } from 'mobx-react-lite'
import { useContext } from 'react';
import { TaskContext } from './Task.context';

function ActionButtons() {
  const context = useContext(TaskContext);

  return (
    <div>
      <button
        disabled={context.store.markedForCompletionTaskCount === 0}
        onClick={() => context.store.removeMarkedForCompletionTasks()}
      >
        Clear completed tasks
      </button>
      <span>({context.store.markedForCompletionTaskCount})</span>
    </div>
  )
}

export default observer(ActionButtons);