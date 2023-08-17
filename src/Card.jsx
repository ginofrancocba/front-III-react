import React from 'react';
import './Card.css';

function Cards({ artistas }) {
  return (
    <div>
      <h2>Su músico favorito es:</h2>
      {artistas.map((artista, index) => (
        <div key={index} className="card">
          <h3>{artista.nombre} {artista.apellido}</h3>
        </div>
      ))}
    </div>
  );
}

export default Cards;