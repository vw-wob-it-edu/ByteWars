import React from 'react';
import './HomeCard.css'; 

function HomeCard({ name, content }) {
    return (
      <div className="homecard">
        <div>
          <h2>{name}</h2>
        </div>
        <div>
          <p>{content}</p>
        </div>
      </div>
    );
}

export default HomeCard;


