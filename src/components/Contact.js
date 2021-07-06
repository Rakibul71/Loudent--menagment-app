import React from "react";
import emailjs from "emailjs-com";
import "./Style.css";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2uc7i5l",
        "template_cxyatxa",
        e.target,
        "user_iDHHLs6cBnzE744ga9yiT"
      )

      .then(
        function (response) {
          alert("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }
  return (
    <>
      <div className="contact-bg ">
        <h1
          className="text-5xl pt-6 font-bold text-center btn-color mb-5"
          id="contact"
        >
          Contact
        </h1>
      </div>

      <div>
        <div
          className="contact-form"
          onSubmit={sendEmail}
          class="contact__container items-center mt-10 flex justify-center "
        >
          <form action="#">
            <input
              type="text"
              name="name"
              placeholder="Name"
              class="contact__input font-semibold p-4 rounded-lg mb-12 "
            />
            <br />
            <input
              type="mail"
              name="email"
              placeholder="Email"
              class="contact__input font-semibold  p-4 rounded-lg mb-12"
            />
            <br />
            <input
              type="mail"
              name="phoneNumber"
              placeholder="Phone Number"
              class="contact__input font-semibold x p-4 rounded-lg mb-12"
            />
            <br />
            <input
              type="mail"
              name="budget"
              placeholder="Event Budget"
              class="contact__input font-semibold x p-4 rounded-lg mb-12"
            />
            <br />
            <textarea
              name=""
              name="message"
              class="contact__input mb-10  h-36"
            ></textarea>
            <div className="rounded-md text-center mt-10">
              <input
                type="submit"
                value="Send"
                className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
