import React from 'react';
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Practice from './components/views/practice/practice';
import Home from './components/views/Home/Home';
import AuthPage from './components/views/LoginPage/login';
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
