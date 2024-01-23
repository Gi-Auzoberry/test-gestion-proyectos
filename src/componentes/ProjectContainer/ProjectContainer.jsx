import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import { Link } from "react-router-dom";
import ProjectListItems from "../ProjectListItems/ProjectListItems";
import './ProjectContainer.css'

const ProjectContainer = () => {

  const { projects } = useContext(ProjectContext);

  return (
    <>
      <div className="subheader">
        <h3>My Projects</h3>
        <Link to="/form" className="btn-add">  + Add Project </Link>
      </div>
      <table className="projects-container">
        <thead className="table-header">
          <tr>
            <th className="info">Project Info</th>
            <th>Project Manager</th>
            <th>Assigned to</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="p-body">
        {projects.length > 0 ? <> <ProjectListItems projects={projects} /> </> : <tr className="no-project"><td colSpan="5" className="no-p">
          You do not have any projects added yet. Click on the + Add Project button to create one.</td></tr>}
        </tbody>
      </table>
    </>
  )
}

export default ProjectContainer;
