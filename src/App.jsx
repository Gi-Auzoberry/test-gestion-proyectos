import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProjectProvider } from './context/ProjectContext';
import NavBar from './componentes/NavBar/NavBar';
import ProjectContainer from './componentes/ProjectContainer/ProjectContainer';
import ProjectForm from './componentes/ProjectForm/ProjectForm';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ProjectProvider>
          <Routes>
            <Route path="/" element={< ProjectContainer />} />
            <Route path='/form' element={< ProjectForm />} />
          </Routes>
        </ProjectProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
