import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);


  const editProject = (id, newData) => {
    const index = projects.findIndex((project) => project.id === id)
    projects[index] = { ...projects[index], ...newData }
    setProjects([...projects])
  };

  const deleteProject = (id) => {
    const index = projects.findIndex((project) => project.id === id)
    projects.splice(index, 1)
    setProjects([...projects])
  };

  return (
    <ProjectContext.Provider value={{ projects, setProjects, editProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};