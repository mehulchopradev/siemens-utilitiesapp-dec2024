import { createContext, useState } from 'react';

export type Task = {
  id: string,
  name: string,
  done: boolean;
}

export type TaskContextType = {
  tasks: Task[];
  addTask: (newTask: string) => void;
}

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
});

type TaskProviderProps = {
  children: React.ReactNode;
};

export default function TaskProvider(props: TaskProviderProps) {
  const [ tasks, setTasks ] = useState<Task[]>([]);

  const addTask = (newTask: string) => {
    const task: Task = {
      id: String(Date.now()),
      name: newTask,
      done: false,
    };

    setTasks([...tasks, task]);
  }

  return (
    <TaskContext.Provider value={{ tasks: tasks, addTask: addTask, }}>
      {props.children}
    </TaskContext.Provider>
  );
}