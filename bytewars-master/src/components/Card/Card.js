// Card.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Card.css'; 

function Card({ name, path }) {
    const navigate = useNavigate(); 
  
    const handleCardClick = () => {
      navigate(path); 
    };
  
    return (
      <div className="card" onClick={handleCardClick}>
        <h2>{name}</h2>
        {}
      </div>
    );
  }
  
  export default Card;
