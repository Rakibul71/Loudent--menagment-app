import React from 'react';

const About = () => {
  return (
    <div className="pt-10">
      <h1 className="text-center font-bold text-5xl tracking-widest antialiased uppercase font-black pt-20">CUSTOM EVENT <br />PRODUCT</h1>
      <h6 className="text-center tracking-wider pt-5 text-3xl">Our team will work with you step by step <br /> to create and design your event.  We offer <br />
    Sound Rentals, Staging and more.</h6>
      <div className="rounded-md text-center mt-10">
        <a
          href="www.google.com"
          className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
        >
        Contact a Speciallist
        </a>
      </div>
      <div className="pt-10">
        <h1 className="text-center font-bold text-4xl tracking-widest antialiased uppercase font-black pt-8">Planning a corporate event?</h1>
        <h6 className="text-center tracking-wider pt-5 text-3xl">Chat with an event specialist now <br /> and let us create your event step by step.</h6>
        <div className="rounded-md text-center mt-10">
        <a
          href="www.google.com"
          className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
        >
        Contact us
        </a>
      </div>
      </div>
    </div>
  );
};

export default About;