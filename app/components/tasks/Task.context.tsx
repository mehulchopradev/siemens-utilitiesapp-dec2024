import { createContext } from 'react';
import TaskStore from '~/store/Task.store';

export type Task = {
  id: string,
  name: string,
  done: boolean;
}

export type TaskContextType = {
  store: TaskStore;
};

const taskStore = new TaskStore(); // create the mobx store once

export const TaskContext = createContext<TaskContextType>({
  store: taskStore,
});

type TaskProviderProps = {
  children: React.ReactNode;
};

export default function TaskProvider(props: TaskProviderProps) {
  return (
    <TaskContext.Provider value={{ store: taskStore }}>
      {props.children}
    </TaskContext.Provider>
  );
}