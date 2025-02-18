import { Check, ChevronDown, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ListTasks = ({ tasks, onTaskClick, onTaskDelete }) => {
  const navigate = useNavigate();
  const onTaskDatailsClick = (task) => {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/taskdetails?${query.toString()}`);
  };

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
            <button
              className=" bg-slate-400 text-white p-2 rounded-md"
              onClick={() => onTaskDatailsClick(task)}
            >
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
