import React from 'react';
import TextContainer from '../../Textcontainer/TextContainer';
import CodingSpace from '../../Codingspace/CodingSpace';
import SubmitButton from '../../Button/SubmitButton';
import './practice.css'
import Timer from '../../Timer/Timer';
function Practice() {

    return (
        
        <div className="Practice">
        <Timer countUp={true} initialTime="00:00:00" />
        <TextContainer />
        <CodingSpace />
        <SubmitButton />
        </div>
       
    );
  }
  
  
  
  export default Practice;