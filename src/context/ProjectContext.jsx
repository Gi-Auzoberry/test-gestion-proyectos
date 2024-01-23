import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {

  const [managers, setManagers] = useState([
    { img: "./img/", name: "Walter Cosani" },
    { img: "./img/", name: "Manager 2" },
  ]);
  const [devs, setDevs] = useState([
    { img: "../img/dev1.jpg", name: "Ignacio Truffa" },
    { img: "../img/dev2.jpg", name: "Dev 2" },
    { img: "../img/dev2.jpg", name: "Dev 3" }
  ]);

  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };
  const updateProject = (updatedProject) => {
    setProjects(projects.map(project =>
      project.id === updatedProject.id ? updatedProject : project
    ));
  };
  const deleteProject = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '7066e0',
      cancelButtonColor: '#F5222D',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const index = projects.findIndex((project) => project.id === id);
        projects.splice(index, 1);
        setProjects([...projects]);
        Swal.fire(
          'Deleted!',
          '"Your file has been deleted."',
          'success'
        )
      }
    })
  };

  return (
    <ProjectContext.Provider value={{ managers, devs, projects, addProject, updateProject, deleteProject, currentProject, setCurrentProject }}>
      {children}
    </ProjectContext.Provider>
  );
};