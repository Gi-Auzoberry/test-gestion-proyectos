import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectContext } from '../../context/ProjectContext';
import { VscKebabVertical } from "react-icons/vsc";
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import './ProjectListItems.css';

const ProjectListItems = ({ projects }) => {

  const [menu, setMenu] = useState(false);
  const { editProject, deleteProject } = useContext(ProjectContext);
  const navigate = useNavigate();


  return (
    <div className="item-container">
      {projects.map((project, index) => (
        <tr key={index} className='items'>
          <td className='p-name'>{project.projectName}<br /> <span className='p-date'>Creation date: {project.submittedAt}</span></td>
          <td>{project.manager}</td>
          <td>{project.devs}</td>
          <td className='status'>{project.status}</td>
          <td id='dot-menu'> <VscKebabVertical onClick={() => setMenu((prev) => !prev)} /> </td>

          {menu && <DropDownMenu id={project.id} onEdit={editProject} onDelete={deleteProject} />}

        </tr>
      ))}
    </div>
  );
};

export default ProjectListItems;
