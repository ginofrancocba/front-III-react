import { useState } from 'react';
import Form from './Form';
import Turnos from './Turnos';
import './App.css';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const addPatient = (patient) => {
    setPacientes([...pacientes, patient]);
  };

  return (
    <div className="App">
      <h1>Ingrese su músico favorito</h1>
      <Form onAddPatient={addPatient} />
      <Turnos pacientes={pacientes} />
    </div>
  )
}

export default App
