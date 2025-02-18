import { useState } from "react";
import { AddTask } from "./components/AddTask";
import { ListTasks } from "./components/ListTasks";

export const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React para criar aplicações web",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar TailwindCSS",
      description: "Estudar TailwindCSS para estilizar aplicações web",
      isCompleted: false,
    },
  ]);

  const onTaskClick = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      return task;
    });

    setTasks(newTasks);
  };

  const onTaskDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-slate-500 p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <ListTasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
};
