import { Check, ChevronDown, Trash2 } from "lucide-react";

export const ListTasks = ({ tasks, onTaskClick, onTaskDelete }) => {
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              className={`flex gap-1 w-full bg-slate-400 text-white text-left p-2 rounded-md ${
                task.isCompleted && "line-through"
              }`}
              onClick={() => onTaskClick(task.id)}
            >
              {task.isCompleted ? <Check /> : ""}
              {task.title}
            </button>
            <button className=" bg-slate-400 text-white p-2 rounded-md">
              <ChevronDown />
            </button>
            <button
              className=" bg-slate-400 text-white p-2 rounded-md"
              onClick={() => onTaskDelete(task.id)}
            >
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
