import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";

const App = () => {
  const [projectState, setProjectState] = useState({
    projectSelectedId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddToTask = (text) => {
    setProjectState((prevState) => {
      const newProject = {
        id: Math.random(),
        text: text,
        projectId: prevState.projectSelectedId,
      };
      return {
        ...prevState,

        tasks: [...projectState.tasks, newProject],
      };
    });
  };
  const handleAddToDeleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        // projectSelectedId: null,
        tasks: prevState?.tasks.filter((pro) => pro.id !== id),
      };
    });
  };

  const addProjectHandler = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: null,
      };
    });
  };

  const handleCancel = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: undefined,
      };
    });
  };
  const handleSelectProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: id,
      };
    });
  };

  const addNewProject = (project) => {
    const newProject = { ...project, id: Math.random() };
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: undefined,
        projects: [...projectState.projects, newProject],
      };
    });
  };
  const handleDeleteProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: undefined,
        projects: prevState?.projects.filter(
          (pro) => pro.id !== prevState.projectSelectedId
        ),
      };
    });
  };

  const selectedProject = projectState?.projects.find(
    (pro) => pro.id === projectState.projectSelectedId
  );
  let content = (
    <SelectedProject
      addTask={handleAddToTask}
      deleteTask={handleAddToDeleteTask}
      project={selectedProject}
      deleteProject={handleDeleteProject}
      tasks={projectState.tasks}
    />
  );
  if (projectState.projectSelectedId === null) {
    content = <NewProject onAdd={addNewProject} onCancel={handleCancel} />;
  } else if (projectState.projectSelectedId === undefined) {
    content = <NoProjectSelected onAddProject={addProjectHandler} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onAddProject={addProjectHandler}
        selectedId={selectedProject?.id}
        onSelectProject={handleSelectProject}
        projectData={projectState?.projects}
      />
      {content}
    </main>
  );
};

export default App;
