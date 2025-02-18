import { useSearchParams } from "react-router-dom";

export const TaskDetails = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
