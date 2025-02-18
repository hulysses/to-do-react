import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Title } from "../components/Title";

export const TaskDetails = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            className="text-white absolute left-0 bottom-0 top-0"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft />
          </button>
          <Title>
            Descrição da Tarefa
          </Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md shadow">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};
