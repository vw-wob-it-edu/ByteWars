import React from 'react';
import './SubmitButton.css'; 

function SubmitButton({ onClick }) {
  return (
    <button className="submit-button" onClick={onClick}>
      Submit Code
    </button>
  );
}

export default SubmitButton;
