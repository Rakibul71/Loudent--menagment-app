import React from 'react'
import '../components/Style.css';
import furniture_img_one from '../images/furniture/furniture_img_one.jpg'
import furniture_img_two from '../images/furniture/furniture_img_two.jpg'
import furniture_img_three from '../images/furniture/furniture_img_three.jpg'


const project_furniture = () => {
  return (
    <>
    <div className="mt-10">
      <h1 className="text-center font-bold md:ml-20 text-5xl tracking-widest antialiased uppercase font-black pt-20">EVENT FURNITURE</h1>
      <div className="mt-20 lg:grid ml-24 lg:grid-cols-3 gap-4">
      <div className="group box-content h-96 flex w-96 justify-center p-10 border-4">
      <img src={furniture_img_one} alt="" className="w-9/12"/>
      </div>
      
      <div className="box-content h-96 flex w-96 justify-center p-10 border-4">
      <img src={furniture_img_two} alt="" className="w-7/12"/>
      
      </div>
      <div className="box-content h-96 flex w-96 justify-center p-10 border-4">
      <img src={furniture_img_three} alt="" className="w-9/12"/>
      </div>
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
    </>
  )
}
export default project_furniture;