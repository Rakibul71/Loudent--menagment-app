import React from 'react'
import '../components/Style.css';
import { Link } from 'react-router-dom'
import led_dance from '../images/led_dance.jpg'
import chair_table from '../images/chair_table.jpg'
import wedding from '../images/weeding.jpg'
import furniture from '../images/FURNITURE.jpg'

const rentals = () => {
  return (
    <>
      <div>
        <h1 className="text-center font-bold text-5xl tracking-widest antialiased uppercase font-black pt-20">EVENT RENTALS</h1>
        <h6 className="text-center tracking-wider pt-7 text-3xl">Whether you are planning a backyard party or <br /> a corporate event rent everything you need, <br /> from drop off to pick up we will create your <br /> event and make sure you have everything <br /> on your list.</h6>
        <div className="m-8 card mt-20">
          <div className="grid site-container gap-8">
            <article className="article-card rounded-3xl">
              <figure className="m-0 p-0 overflow-hidden">
                <img src={chair_table} alt="" className="max-w-full h-auto article-img" />
              </figure>
              <div className="p-8">
                <div className="text-sm uppercase tracking-widest font-semibold block no-underline ">
                  <h3 className="m-4 card-title text-center text-3xl font-extrabold">Table & Chair</h3>

                </div>
                <div className="rounded-md text-center mt-10">
                 <Link to='/table'> <a
                    href="../pages/table.js"
                    className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
                  >
                    Table & Chair
        </a></Link>
                </div>
              </div>
            </article>
            <article className="article-card rounded-3xl">
              <figure className="m-0 p-0 overflow-hidden">
                <img src={wedding} alt="" className="max-w-full h-auto article-img" />
              </figure>
              <div className="p-8">
                <div className="text-sm uppercase tracking-widest font-semibold block no-underline colors.coolGray-900">
                  <h3 className="m-4 card-title text-center text-3xl font-extrabold">Special Fx</h3>

                </div>
                <div className="rounded-md text-center mt-10">
                <Link to='/special_fx'>
                  <a
                    href="/special_fx"
                    className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
                  >
                    Special Fx
        </a></Link>
                </div>
              </div>
            </article>
            <article className="article-card rounded-3xl">
              <figure className="m-0 p-0 overflow-hidden">
                <img src={furniture} alt="" className="max-w-full h-auto article-img" />
              </figure>
              <div className="p-8">
                <div className="text-sm uppercase tracking-widest font-semibold block no-underline colors.coolGray-900">
                  <h3 className="m-4 card-title text-center text-3xl font-extrabold">Event Furniture</h3>
                  
                </div>
                <div className="rounded-md text-center mt-10">
                 <Link to='/project_furniture'> <a
                    href="../pages/project_furniture.js"
                    className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
                  >
                    Event Furniture
        </a></Link>
                </div>
              </div>
            </article>
            <article className="article-card rounded-3xl  ">
              <figure className="m-0 p-0 overflow-hidden">
                <img src={led_dance} alt="" className="max-w-full h-auto article-img" />
              </figure>
              <div className="p-8">
                <div className="text-sm uppercase tracking-widest font-semibold block no-underline colors.coolGray-900">
                  <h3 className="m-4 card-title text-center text-3xl font-extrabold">Led dance cubes & more</h3>
                  
                </div>
                <div className="rounded-md text-center mt-10">
                  <Link to='/led_rentals'><a
                    href="../pages/led_rentals.js"
                    className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
                  >
                    Led dance cubes & more
        </a></Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
export default rentals;
