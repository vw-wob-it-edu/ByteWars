import React from 'react';
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Practice from './components/views/practice';
import Home from './components/views/Home';
import AuthPage from './components/AuthPage/AuthPage';
function App() {
  
  return (
      
      <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route path="/practice" element={<Practice />} />
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthPage />} />
            {}
          </Routes>
        </Router>
        {}
      </div>
     
  );
}



export default App;
