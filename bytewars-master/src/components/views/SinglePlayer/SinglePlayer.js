import React from 'react';
import TextContainer from '../../Textcontainer/TextContainer';
import CodingSpace from '../../Codingspace/CodingSpace';
import SubmitButton from '../../Button/SubmitButton';
import './SinglePlayer.css'
import Timer from '../../Timer/Timer';
function SinglePlayer() {

    return (
        
        <div className="SinglePlayer">
        <Timer countUp={true} initialTime="00:00:00" />
        <TextContainer />
        <CodingSpace />
        <SubmitButton />
        </div>
       
    );
  }
  
  
  
  export default SinglePlayer;