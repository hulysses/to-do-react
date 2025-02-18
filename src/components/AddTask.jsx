import { useState } from "react";

export const AddTask = ({ onTaskAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Preencha todos os campos!");
            return;
          }
          onTaskAdd(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
};
