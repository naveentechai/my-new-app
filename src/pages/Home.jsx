import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Home Page Developer</h1>
      <p>This is the starting point of our React app.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px'
  }
};

export default Home;
