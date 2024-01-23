import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProjectContext } from "../../context/ProjectContext";
import { FiArrowLeft } from "react-icons/fi";

const EditForm = () => {

    const managers = [
        { img: "./img/", name: "Walter Cosani" },
        { img: "./img/", name: "Manager 2" },
    ];
    const devs = [
        { img: "../img/dev1.jpg", name: "Ignacio Truffa" },
        { img: "../img/dev2.jpg", name: "Dev 2" },
        { img: "../img/dev2.jpg", name: "Dev 3" }
    ];
  
    const navigate = useNavigate();

    const { currentProject, updateProject } = useContext(ProjectContext)
    const [form, setForm] = useState( currentProject || {
        projectName: '',
        projectDescription: '',
        manager: '',
        devs: '',
        status: '',
        submittedAt: ''
    });

    useEffect(() => {
        if (currentProject) {
            setForm(currentProject);
        }
    }, [currentProject]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProject(form); // Actualiza el proyecto existente con los nuevos datos del formulario
        navigate('/');
    };

    return (
        <>
            <div className="subheader-form">
                <Link className="back-icon" to="/">
                    <FiArrowLeft /> Back
                </Link>
                <h3> Edit Project </h3>
            </div>
            <div className="form-parent-container">
                <form onSubmit={handleSubmit} id="p-form">
                    <div>
                        <label htmlFor=""> Project Name </label>
                        <input type="text" id="projectName" value={form.projectName} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor=""> Description </label>
                        <input type="text" id="projectDescription" value={form.projectDescription} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor=""> Project Manager </label>
                        <select name="" id="manager" value={form.manager} onChange={handleChange}>
                            <option value="" disabled> Select a person </option>
                            {managers.map((manager, index) => (
                                <option key={index} value={manager.name}>{manager.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor=""> Assigned to </label>
                        <select name="" id="devs" value={form.devs} onChange={handleChange}>
                            <option value="" disabled> Select a person </option>
                            {devs.map((dev, img, index) => (
                                <option key={index} value={dev.name}>{dev.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor=""> Status </label>
                        <select name="" id="status" value={form.status}  onChange={handleChange}>
                            <option value=""> Enabled </option>
                            <option value=""> Disabled </option>
                        </select>
                    </div>
                    <button type="submit" id="submit" className="btn-form"> Save Changes </button>
                </form>
            </div>
        </>
    )
}

export default EditForm

/* POR AHORA QUITO ESTE ERROR
{error && <h4 className="error"> {error} </h4>} */