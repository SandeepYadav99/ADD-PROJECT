import React, { useState } from "react";

const NewTask = ({onAdd}) => {
  const [addTask, setAddTask] = useState();

  const handleAddTask = (e) => {
    setAddTask(e.target.value);
  };

  const saveTask = () => {
    onAdd(addTask);
    setAddTask("")
  };

  return (
    <div className="flex gap-4 mt-2">
      <input
        type="text"
        value={addTask}
        onChange={(e) => handleAddTask(e)}
        className="py-1 px-4 w-64 rounded-sm border-1 border-gray-500 outline-none bg-stone-200"
      />
      <button
        className="text-stone-800 hover:text-stone-950 focus:outline-none  "
        onClick={saveTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
