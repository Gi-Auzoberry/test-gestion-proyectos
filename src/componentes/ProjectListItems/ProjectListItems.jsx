import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectContext } from '../../context/ProjectContext';
import { VscKebabVertical } from "react-icons/vsc";
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import './ProjectListItems.css';

const ProjectListItems = ({ projects }) => {
  
  console.log(projects);

  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);
  const { deleteProject, setCurrentProject, devs } = useContext(ProjectContext);

  const handleEdit = (project) => {
    setCurrentProject(project);
    navigate('/edit')
  };

  return (
    <div className="item-container">
      {projects.map((project, index) => {
        const dev = devs.find(d => d.name === project.devs);
        return (
          <tr key={index} className='items'>
            <td className='p-name'>{project.projectName}<br /> <span className='p-date'>Creation date: {project.submittedAt}</span></td>
            <td className='p-manager'>{project.manager}</td>
            <td className='p-dev'>
              {dev && <img className='dev-img' src={dev.img} alt={dev.name} />}
              {project.devs}
            </td>
            <td className='status'>{project.status}</td>
            <td id='dot-menu'> <VscKebabVertical onClick={() => setMenu((prev) => !prev)} /> </td>
            {menu && <DropDownMenu onEdit={() => handleEdit(project)} onDelete={deleteProject} />}
          </tr>
        )
      })}
    </div>
  );

 

};

export default ProjectListItems;
