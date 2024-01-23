import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectContext } from '../../context/ProjectContext';
import { VscKebabVertical } from "react-icons/vsc";
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import './ProjectListItems.css';

const ProjectListItems = ({ projects }) => {

  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);
  const { deleteProject, setCurrentProject } = useContext(ProjectContext);

  const handleEdit =(project) => {
    setCurrentProject(project);
    navigate('/edit')
  };

  return (
    <div className="item-container">
      {projects.map((project, index) => (
        <tr key={index} className='items'>
          <td className='p-name'>{project.projectName}<br /> <span className='p-date'>Creation date: {project.submittedAt}</span></td>
          <td className='p-manager'>{project.manager}</td>

          <td className='p-dev'><img src={project.devs.img} alt={project.devs.name} /> {project.devs.name}</td>

          <td className='status'>{project.status}</td>
          <td id='dot-menu'> <VscKebabVertical onClick={() => setMenu((prev) => !prev)} /> </td>

          {menu && <DropDownMenu onEdit={() => handleEdit(project)} onDelete={deleteProject} />}

        </tr>
      ))}
    </div>
  );
};
                       
export default ProjectListItems;
