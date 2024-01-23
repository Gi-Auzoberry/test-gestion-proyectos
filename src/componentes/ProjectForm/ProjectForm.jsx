import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProjectContext } from "../../context/ProjectContext";
import { v4 as uuidv4 } from 'uuid';
import { FiArrowLeft } from "react-icons/fi";
import './ProjectForm.css';


const ProjectForm = () => {

    const managers = [
        { img: "./img/", name: "Walter Cosani" },
        { img: "./img/", name: "Manager 2" },
    ];
    const devs = [
        { img: "./img/", name: "Ignacio Truffa" },
        { img: "./img/", name: "Dev 2" },
        { img: "./img/", name: "Dev 3" }
    ];

    const navigate = useNavigate();
    const { setProjects, editProject, deleteProject } = useContext(ProjectContext);
    const [error, setError] = useState('');
    const { id } = useParams();
    const { projects } = useContext(ProjectContext);
    const [form, setForm] = useState({
        projectName: '',
        submittedAt: '',
        projectDescription: '',
        manager: '',
        devs: '',
        status: 'Enabled',
    });

    useEffect(() => {
        const project = projects.find((project) => project.id === id)
        if (project) {
            setForm(project)
        }
    }, [id, projects]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.projectName || !form.projectDescription || !form.manager || !form.devs || !form.status) {
            setError('Please complete all fields before submitting');
            return;
        }

        setProjects((prevProjects) => [...prevProjects, { ...form, id: uuidv4(), submittedAt: new Date().toLocaleString().toLowerCase() }]);

        setForm({
            projectName: '',
            submittedAt: '',
            projectDescription: '',
            manager: '',
            devs: '',
            status: '',
        });
        navigate('/');
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    };


    return (
        <>
            <div className="subheader-form">
                <Link className="back-icon" to="/">
                    <FiArrowLeft /> Back
                </Link>
                <h3> Add Project </h3>
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
                            {devs.map((dev, index) => (
                                <option key={index} value={dev.name}>{dev.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor=""> Status </label>
                        <select name="" id="status">
                            <option value=""> Enabled </option>
                            <option value=""> Disabled </option>
                        </select>
                    </div>

                    {error && <h4 className="error"> {error} </h4>}

                    <button type="submit" id="submit" className="btn-form"> Create Project </button>
                </form>
            </div>
        </>
    )
}

export default ProjectForm