import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setmode] = useState('light'); //where dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const toggleModeGreen = () => {
    if (mode === 'light') {
      setmode('green');
      document.body.style.backgroundColor = '#008000';
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const toggleModeRed = () => {
    if (mode === 'light') {
      setmode('red');
      document.body.style.backgroundColor = '#FF0000';
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModeGreen={toggleModeGreen} toggleModeRed={toggleModeRed} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
           </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
