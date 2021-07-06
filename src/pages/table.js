import React from 'react'
import '../components/Style.css';
import img_chair_one from '../images/table_chair/img_chair_one.png'
import img_chair_two from '../images/table_chair/img_chair_two.png'
import img_chair_three from '../images/table_chair/img_chair_three.png'
import img_chair_four from '../images/table_chair/img_chair_four.png'
import img_chair_five from '../images/table_chair/img_chair_five.png'
import img_chair_six from '../images/table_chair/img_chair_six.png'

const table = () => {
  return (
    <>
    <div className="mt-10">
      <h1 className="lg:text-center font-bold md:ml-20 text-5xl tracking-widest antialiased uppercase font-black pt-20">TABLES & CHAIRS</h1>
      <div className="mt-20 lg:grid ml-24 lg:grid-cols-3 gap-4">
      <div className="group box-content h-96 flex w-96 justify-center p-10 border-4">
      <img src={img_chair_one} alt="" className="w-9/12"/>
      </div>
      
      <div className="box-content h-96 flex w-96 justify-center p-10 border-4">
      <img src={img_chair_two} alt="" className="w-7/12"/>
      
      </div>
      <div className="box-content h-96 flex w-96 justify-center p-10 border-4">
      <img src={img_chair_four} alt="" className="w-9/12"/>
      </div>
      </div>
      <div className="mt-20 lg:grid ml-24 lg:grid-cols-3 gap-4">
      <div className="box-content h-96 flex w-96 justify-center p-10 border-4">
      <img src={img_chair_three} alt="" className="w-9/12"/>
      </div>
      <div className="box-content h-96 flex w-96 justify-center p-10 border-4">
      <img src={img_chair_five} alt="" className="w-9/12"/>

      </div>
      <div className="box-content h-96 flex w-96 justify-center p-10 border-4">
      <img src={img_chair_six} alt="" className="w-9/12"/>

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
export default table;