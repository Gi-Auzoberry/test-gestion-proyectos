import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import './DropDownMenu.css';

const DropDownMenu = ({ onEdit, onDelete}) => {

 /* SI ESTA OPCION VUELVE, AGREGAR PROJECT COMO PROP 
 const handleEdit = () => {
    onEdit();
    setCurrentProject(project);
  }*/

  return (
    <div className='drop-menu'>
        <ul className='opt-menu'>
            <li onClick={onEdit}> <FaRegEdit /> Edit </li>
            <li onClick={onDelete}> <MdDeleteOutline /> Delete </li>
        </ul>
    </div>
  )
}

export default DropDownMenu

