import React from 'react';
import './Home.css';
import WelcomeAnimation from '../../WelcomeAnimation/WelcomeAnimation';
import HomeCard from '../../HomeCard/HomeCard';

function Home() {
  return (
    <div className="home-container">
      <div className="content-container">
        <WelcomeAnimation />
        <div className="cards-container">
            <HomeCard name="Features:" content={<p> <span className="headline">AI Tasks:</span> Challenge yourself with tasks of varying difficulty levels. Our AI then checks your results. <p></p><span className="headline">Leaderboard:</span> Compete with others and track your progress.</p>} />
            <HomeCard name="Upcoming:" content={<p><span className="headline">Competetive Coding:</span> We want to add a mode in which you compete against others. The faster coder gets the points! </p>} />
            <HomeCard name="Beta Phase Notice:" content={<p>Our platform is currently in beta testing. While we are working hard to improve security, we cannot guarantee data security at this time.<p> <span className="headline">Thank you for your understanding.</span></p></p>} />
          </div>
      </div>
    </div>
  );
}

export default Home;


