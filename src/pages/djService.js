import React from 'react'
import '../components/Style.css';
import wedding from '../images/weeding.jpg'
import sweet from '../images/sweet.jpg'
import mitzvah from '../images/mitzvah.jpg'

const rentals = () => {
  return (
    <>
        <div>
        <h1 className="text-center font-bold text-5xl tracking-widest antialiased uppercase font-black pt-20">DJ SERVICES</h1>
        <h6 className="text-center tracking-wider pt-7 text-3xl">LOUD Entertainment provides a top notch DJs and specializes in events <br /> and know just what it takes to get your crowd going. <br /> Whether it is their favorite song or the Emcees outgoing <br /> personality your guests will remember your event for years <br /> to come... "Who did you book for your wedding?"</h6>
        <div className="m-8 card mt-20">
        <div className=" djservices gap-8">
          <article className="article-card rounded-3xl">
            <figure className="m-0 p-0 overflow-hidden">
              <img src={wedding} alt="" className="max-w-full h-auto article-img" />
            </figure>
            <div className="p-8">
              <div className="text-sm uppercase tracking-widest font-semibold block no-underline ">
                <h3 className="m-4 card-title text-center text-3xl font-extrabold">WEDDING</h3>
                <p className="text-base m-0 card-para text-center">Make your wedding as special and memorable as you always planned. From our DJs to the Lighting we will make it one to remember.</p>
              </div>
              <div className="rounded-md text-center mt-10">
                <a
                  href="www.google.com"
                  className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
                >
                  Get Started
        </a>
              </div>
            </div>
          </article>
          <article className="article-card rounded-3xl">
            <figure className="m-0 p-0 overflow-hidden">
              <img src={sweet} alt="" className="max-w-full h-auto article-img" />
            </figure>
            <div className="p-8">
              <div className="text-sm uppercase tracking-widest font-semibold block no-underline colors.coolGray-900">
                <h3 className="m-4 card-title text-center text-3xl font-extrabold">SWEET 16</h3>
                <p className="text-base m-0 card-para text-center">We will create your dream Sweet Sixteen from start to finish, from our lighting to the grand entrance we will make sure your guests will leave knowing you had the most epic sweet sixteen yet.</p>
              </div>
              <div className="rounded-md text-center mt-10">
                <a
                  href="www.google.com"
                  className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
                >
                  Get Started
        </a>
              </div>
            </div>
          </article>
          <article className="article-card rounded-3xl">
            <figure className="m-0 p-0 overflow-hidden">
              <img src={mitzvah} alt="" className="max-w-full h-auto article-img" />
            </figure>
            <div className="p-8">
              <div className="text-sm uppercase tracking-widest font-semibold block no-underline colors.coolGray-900">
                <h3 className="m-4 card-title text-center text-3xl font-extrabold">MITZVAH</h3>
                <p className="text-base m-0 card-para text-center">Setting a theme is key. We start with your favorite hobby or sports team and go from there. We will design a Mitzvah that leaves you feeling like a celebrity throughout the entire night.</p>
              </div>
              <div className="rounded-md text-center mt-10">
                <a
                  href="www.google.com"
                  className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
                >
                  Get Started
        </a>
              </div>
            </div>
          </article>
        </div>
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
    </>
  )
}
export default rentals;
