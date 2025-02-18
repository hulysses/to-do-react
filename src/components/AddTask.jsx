import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export const AddTask = ({ onTaskAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <Input
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
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
      </Button>
    </div>
  );
};
