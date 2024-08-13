import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ onAddTask, onDeleteTask, tasks }) => {
    console.log(tasks);
    
  return (
    <section>
      <h2 className="text-xl text-stone-700 font-bold">Tasks</h2>
      <NewTask onAdd={onAddTask} />
      {tasks.length === 0 && (
        <p className="text-stone-600 mt-8 text-xl">
          This project does not have any task at !
        </p>
      )}
      {tasks.length > 0 && (
        <ul >
          {tasks?.map((task) => {
          return  <li key={task.id} className="w-64 mt-4 py-2 flex px-2 justify-between bg-stone-300">
              <span className="  text-left">{task.text}</span>
              <button className="text-stone-500 hover:text-red-500" onClick={()=>onDeleteTask(task.id)}>Clear</button>
            </li>;
          })}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
