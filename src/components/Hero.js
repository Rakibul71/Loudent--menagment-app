import React from 'react';

const Hero = () => {
  return (
    <div className="background-hero bg-opacity-10 bg-center bg-no-repeat inset-0 bg-fixed bg-center">
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black text-white mb-14 text-center'>
      YOUR NEXT EVENT STARTS HERE.
      </h1>
      <a href="#contact"
        className='py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out flex items-center animate-bounce uppercase text-center'
        
      >
        Request a Quote{' '}
        
      </a>
    </div>
    </div>
  );
};

export default Hero;