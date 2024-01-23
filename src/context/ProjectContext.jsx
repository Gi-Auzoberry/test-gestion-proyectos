import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);


  const editProject = (id, newData) => {
    const index = projects.findIndex((project) => project.id === id)
    projects[index] = { ...projects[index], ...newData }
    setProjects([...projects])
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
    <ProjectContext.Provider value={{ projects, setProjects, editProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
};