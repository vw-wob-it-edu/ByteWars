import React from 'react';
import './Home.css';
import WelcomeAnimation from '../WelcomeAnimation/WelcomeAnimation';
import Card from '../Card/Card';

function Home() {
    return (
      <div className="home-container">
        <div className="content-container">
          <WelcomeAnimation />
          <div className="cards-container">
            <Card name="Practice Area" path="/practice" />
            <Card name="Compete" path="/path-for-card-2" />
            <Card name="Single Player" path="/path-for-card-3" />
            {}
          </div>
        </div>
      </div>
    );
  }

export default Home;
