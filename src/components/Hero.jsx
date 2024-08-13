import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center" style={{ backgroundImage: 'url(/src/assets/logo.png)' }}>
      <h1 className="text-5xl font-bold mb-4 animate-slide-in">Build Your Digital Presence</h1>
      <p className="text-xl mb-8 animate-slide-in delay-200">We create stunning websites that grow your business.</p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg animate-slide-in delay-400">Start Your Project</button>
    </section>
  );
};

export default Hero;
