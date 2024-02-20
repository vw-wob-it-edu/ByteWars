import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Practice from './components/views/practice/practice';
import Home from './components/views/Home/Home';
import AuthPage from './components/views/LoginPage/login';
import SignUp from './components/views/LoginPage/signUp';
import ChooseCodingMode from './components/views/Coding/coding';
import LeaderboardPage from './components/views/LeaderboardPage/LeaderboardPage';
import AboutUs from './components/views/AboutUs/AboutUs';
import Contact from './components/views/Contact/Contact';
import SinglePlayer from './components/views/SinglePlayer/SinglePlayer';

function App() {
  const [backendData, setBackendData] = useState([{}])
  
  useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  
    
  },[])
    
  return (
      
      <div className="App">
        <Router>
          <Navbar />
            <Routes>
              <Route path="/practice" element={<Practice />} />
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/sign-up" element={<SignUp/>}/>
              <Route path="/coding" element={<ChooseCodingMode/>}/>
              <Route path="/leaderboard" element={<LeaderboardPage/>}/>
              <Route path="/aboutus" element={<AboutUs/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/singleplayer" element={<SinglePlayer/>}/>
            </Routes>
            <div className="footer-links">
              <Link to="/aboutus" className="aboutUs-button">About Us</Link>
              <Link to="/contact" className="contact-button">Contact</Link>
              <a href="https://github.com/vw-wob-it-edu/ByteWars" className="contact-button" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </Router>
      </div>
      
     
  );
}



export default App;
