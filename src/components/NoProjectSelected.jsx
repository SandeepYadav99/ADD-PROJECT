import React from "react";
import noProject from "../assets/no-projects.png";
import Button from "./Button";
const NoProjectSelected = ({onAddProject}) => {
  return (
    <div className="mt-16 w-2/3 text-center ">
      <img
        src={noProject}
        alt="No Project setup "
        className="w-16 h-16 mx-auto object-contain"
      />
      <h2 className="font-bold text-stone-500 text-xl mt-2">
        No Project Selected{" "}
      </h2>
      <p className="text-stone-400 mt-2">Select a project to start a new one</p>
      <p className="mt-8">
        <Button onClick={onAddProject}>+ Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
