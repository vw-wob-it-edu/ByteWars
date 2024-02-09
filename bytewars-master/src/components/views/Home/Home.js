import React from 'react';
import './Home.css';
import WelcomeAnimation from '../../WelcomeAnimation/WelcomeAnimation';


function Home() {
    return (
      <div className="home-container">
        <div className="content-container">
          <WelcomeAnimation />
          
        </div>
      </div>
    );
  }

export default Home;
