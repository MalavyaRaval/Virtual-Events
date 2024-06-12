import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import AboutUs from './components/aboutus.jsx';
import Recordings from './components/Recordings.jsx';
import Intro from './components/Intro.jsx';
import Camera from './components/Camera.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/recordings" element={<Recordings />} />
        <Route path="/camera" element={<Camera />} /> {/* Add the new route */}
        <Route path="/" element={<Intro />} />
      </Routes>
    </Router>
  );
};

export default App;
