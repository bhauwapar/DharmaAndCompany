import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Header/Navigation';
import Footer from './components/Footer/Footer';
import Home from './components/Body/Home';
import About from './components/Body/About';
// import Navigation from './components/Navigation';
// import Footer from './components/Footer';

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function About() {
//   return <h1>About Page</h1>;
// }

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
