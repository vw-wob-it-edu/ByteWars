import React from 'react';
import './AboutUs.css'; // Import CSS for styling

function AboutUs() {
  return (
    <div className="info-card">
      <h2>About Us</h2>
      <p>
        Welcome to our coding learning website! Our platform is designed to help you enhance your coding skills through interactive tasks and challenges. Powered by AI, we provide you with coding tasks that you must complete within a set time frame. The faster you solve the tasks, the more points you earn.
      </p>
      <p>
        One of the highlights of our platform is the leaderboard feature, where you can compare your performance with others. See how you stack up against fellow learners and track your progress over time.
      </p>
      <p>
        This project was developed as part of an apprenticeship program at Volkswagen. Our team is committed to creating a learning environment that fosters growth and skill development in coding. Join us on this exciting journey as we strive to empower individuals with the knowledge and tools they need to succeed in the world of coding.
      </p>
    </div>
  );
}

export default AboutUs;
