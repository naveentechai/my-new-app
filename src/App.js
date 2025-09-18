import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About Us</Link>
      </nav>

      {/* Page Routes */}nav
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

const styles = {
  nav: {
    background: '#333',
    padding: '10px'
  },
  link: {
    color: '#fff',
    marginRight: '15px',
    textDecoration: 'none',
    fontSize: '18px'
  }
};

export default App;