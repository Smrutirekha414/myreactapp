import React from 'react';
import download from '../images/download.jpg'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <img src={download} alt="Home" style={{ width: '100%', height: '480px' }} />
    </div>
  );
}

export default Home;
