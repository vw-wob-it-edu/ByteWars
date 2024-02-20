import React from 'react';
import './coding.css';
import Header from '../../HeaderAnimation/Header';
import Card from '../../Card/Card';

function ChooseCodingMode() {
    return (
      <div className="home-container">
        <div className="content-container">
          <Header />
          <div className="cards-container">
            <Card name="Practice Area" path="/practice" />
            <Card name="Single Player" path="/singleplayer" />
            {}
          </div>
        </div>
      </div>
    );
  }

export default ChooseCodingMode;