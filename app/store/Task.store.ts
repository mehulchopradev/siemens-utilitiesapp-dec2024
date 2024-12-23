import { action, computed, makeAutoObservable, observable } from 'mobx';
import type { Task } from '~/components/tasks/Task.context';

class TaskStore {
  tasks: Task[] = [];

  constructor() {
    makeAutoObservable(this, {
      tasks: observable,
      addTask: action,
      toggleTask: action,
      removeMarkedForCompletionTasks: action,
      markedForCompletionTaskCount: computed,
    });
  }

  // actions
  addTask(newTask: string) {
    const task: Task = {
      id: String(Date.now()),
      name: newTask,
      done: false,
    };

    this.tasks.push(task);
  }

  toggleTask(taskId: string) {
    const task = this.tasks.find((task) => task.id === taskId);

    if (task) {
      task.done = !task.done;
    }
  }

  removeMarkedForCompletionTasks() {
    this.tasks = this.tasks.filter((task) => !task.done);
  }

  get markedForCompletionTaskCount() {
    return this.tasks.filter((task) => task.done).length;
  }  
}

export default TaskStore;