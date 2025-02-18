import { Check, ChevronDown, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

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
              className={`flex gap-1 w-full bg-slate-500 text-white text-left p-2 rounded-md ${
                task.isCompleted && "line-through"
              }`}
              onClick={() => onTaskClick(task.id)}
            >
              {task.isCompleted ? <Check /> : ""}
              {task.title}
            </button>
            <Button onClick={() => onTaskDatailsClick(task)}>
              <ChevronDown />
            </Button>
            <Button onClick={() => onTaskDelete(task.id)}>
              <Trash2 />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
