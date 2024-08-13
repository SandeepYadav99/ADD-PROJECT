import React from "react";
import Button from "./Button";

const ProjectSideBar = ({ onAddProject, projectData, onSelectProject, selectedId }) => {

  
  return (
    <aside className="w-1/3 bg-stone-900 text-stone-50 px-10 py-10 md:w-72 rounded-r-xl">
      <h2 className="uppercase font-bold mb-8 md:text-2xl text-stone-200">
        Your Project
      </h2>
      <div>
        <Button onClick={onAddProject}>+ Add Project </Button>
      </div>
      <ul className="mt-8">
        {projectData?.map((project) => {
          let activeClass ="w-full mt-4  hover:text-stone-200 hover:bg-stone-800 py-1 px-2 rounded-sm";
          if(project?.id === selectedId){
            activeClass += " bg-stone-800 text-stone-200"
          }else{
            activeClass += " text-stone-400"
          }
          return (
            <li
              key={project.id}
              className={activeClass}
            >
              <button
                className=" font-bold  "
                onClick={() => onSelectProject(project?.id)}
              >
                {project?.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSideBar;
