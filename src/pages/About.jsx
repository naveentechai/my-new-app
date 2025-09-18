import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p>We are learning how to build multi-page React apps with routing 🚀.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px'
  }
};

export default About;