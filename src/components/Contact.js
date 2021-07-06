import React from 'react'
import './Style.css'


const Contact = () => {
  return (
    <>
      <div className="contact-bg ">
        <h1 className="text-5xl pt-6 font-bold text-center btn-color mb-5" id="contact">Contact</h1>
      </div>

      <div>
        <div class="contact__container items-center mt-10 flex justify-center ">
          <form action="#">
            <input type="text" placeholder="Name" class="contact__input font-semibold p-4 rounded-lg mb-12 " />
            <br />
            <input type="mail" placeholder="Email" class="contact__input font-semibold  p-4 rounded-lg mb-12" />
            <br />
            <input type="mail" placeholder="Phone Number" class="contact__input font-semibold x p-4 rounded-lg mb-12" />
            <br />
            <input type="mail" placeholder="Event Budget" class="contact__input font-semibold x p-4 rounded-lg mb-12" />
            <br />
            <textarea name="" class="contact__input mb-10  h-36"></textarea>
            <div className="rounded-md text-center mt-10">
                <a
                  href="www.google.com"
                  className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
                >
                  Submit
        </a>
              </div>
          </form>
        </div>
      </div>


    </>
  )
}



export default Contact;