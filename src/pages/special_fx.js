import React from 'react'
import '../components/Style.css';
import canoon from '../images/canoon.jpg'
import wedding from '../images/weeding.jpg'
import led_fox from '../images/led_fox.jpg'
import bluster from '../images/bluster.jpg'

const special_fx = () => {
  return (
    <>
      <div>
        <h1 className="text-center font-bold text-5xl tracking-widest antialiased uppercase font-black pt-20">SPECIAL FX RENTALS</h1>
        <h6 className="text-center tracking-wider pt-7 text-3xl">Special FX are a great way to add something extra to your <br /> event and create that stunning "WOW" factor. </h6>
        <div className="m-8 card mt-20">
          <div className="grid site-container gap-8">
            <article className="article-card rounded-3xl">
              <figure className="m-0 p-0 overflow-hidden">
                <img src={wedding} alt="" className="max-w-full h-auto article-img" />
              </figure>
              <div className="p-8">
                <div className="text-sm uppercase tracking-widest font-semibold block no-underline ">
                  <h3 className="m-4 card-title text-center text-3xl font-extrabold">SPARKULARS</h3>
                  <p className="text-xl m-0 card-para text-center">Used as Grand Entrance & More...</p>
                </div>
                <div className="rounded-md text-center mt-10">
                  <a
                    href="../pages/table.js"
                    className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
                  >
                    Rent More
        </a>
                </div>
              </div>
            </article>
            <article className="article-card rounded-3xl">
              <figure className="m-0 p-0 overflow-hidden">
                <img src={led_fox} alt="" className="max-w-full h-auto article-img" />
              </figure>
              <div className="p-8">
                <div className="text-sm uppercase tracking-widest font-semibold block no-underline colors.coolGray-900">
                  <h3 className="m-4 card-title text-center text-3xl font-extrabold">LED VIDEO WALL</h3>
                  <p className="text-xl m-0 card-para text-center">Create an LED Video Wall DJ Booth or use as a video projector for live performances and more...</p>
                </div>
                <div className="rounded-md text-center mt-10">
                  <a
                    href="www.google.com"
                    className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
                  >
                    Rent Now
        </a>
                </div>
              </div>
            </article>
            <article className="article-card rounded-3xl">
              <figure className="m-0 p-0 overflow-hidden">
                <img src={bluster} alt="" className="max-w-full h-auto article-img" />
              </figure>
              <div className="p-8">
                <div className="text-sm uppercase tracking-widest font-semibold block no-underline colors.coolGray-900">
                  <h3 className="m-4 card-title text-center text-3xl font-extrabold">C02 BLASTER</h3>
                  <p className="text-xl m-0 card-para text-center">A great add-on for Sweet 16s, Weddings, and other events.</p>
                  
                </div>
                <div className="rounded-md text-center mt-10">
                  <a
                    href="www.google.com"
                    className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
                  >
                    Rent Now
        </a>
                </div>
              </div>
            </article>
            <article className="article-card rounded-3xl  ">
              <figure className="m-0 p-0 overflow-hidden">
                <img src={canoon} alt="" className="max-w-full h-auto article-img" />
              </figure>
              <div className="p-8">
                <div className="text-sm uppercase tracking-widest font-semibold block no-underline colors.coolGray-900">
                  <h3 className="m-4 card-title text-center text-3xl font-extrabold">C02 CANNON</h3>
                  <p className="text-xl m-0 card-para text-center">As seen at concerts and other live performances, C02 gives your guests a "wow" factor and is great for Grand Entrances.</p>
                </div>
                <div className="rounded-md text-center mt-10">
                  <a
                    href="www.google.com"
                    className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
                  >
                    Rent Now
        </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
export default special_fx;
