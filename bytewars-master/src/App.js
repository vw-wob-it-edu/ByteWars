import React,{useEffect, useState} from 'react';
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Practice from './components/views/practice/practice';
import Home from './components/views/Home/Home';
import AuthPage from './components/views/LoginPage/login';
import SignUp from './components/views/LoginPage/signUp';
import ChooseCodingMode from './components/views/Coding/coding';
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
            {}
          </Routes>
        </Router>
        {}
      </div>
     
  );
}



export default App;
