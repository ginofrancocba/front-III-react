import { useState } from 'react';
import Form from './Form';
import Card from './Card';
import './App.css';


function App() {
  const [artistas, setArtistas] = useState([]);
  const addArtista = (artista) => {
    setArtistas([...artistas, artista]);
  };

  return (
    <div className="App">
      <h1>Ingrese su músico favorito</h1>
      <Form onAddMusic={addArtista} />
      <Card artistas={artistas} />
    </div>
  );
}

export default App;
