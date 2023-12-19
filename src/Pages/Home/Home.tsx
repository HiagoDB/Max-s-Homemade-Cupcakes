import React from 'react';
import HomeImage from '../../assets/homeImage.svg';

export default function Home() {
  const homeContainerStyle = {
    backgroundImage: `url(${HomeImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',

  };

  return (
    <div className="homeContainer" style={homeContainerStyle}>
      <h1 className='homeHI text-white text-8xl pt-[0.78em] pl-[1.1em] leading-[120px]'>We all know<br />you want a bite!</h1>
    </div>
  );
}
