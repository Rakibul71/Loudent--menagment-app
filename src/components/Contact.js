import React from "react";
import "./Style.css";
import emailjs from "emailjs-com";
import "../cssComponents/contact.css";

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
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="formDivContainer">
      <form className="formContainer" onSubmit={sendEmail}>
        <h1
          className="text-5xl mb-10 text-center font-bold btn-color "
          id="about"
        >
          Contact
        </h1>
        <input
          type="text"
          placeholder="Name"
          name="name"
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
          placeholder="Phone Number"
          name="phoneNumber"
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
        <textarea name="message" class="contact__input mb-10  h-36"></textarea>
        <div className="rounded-md text-center mt-10">
          <button
            type="submit"
            className="py-6 px-10 text-white bg-indigo-600 rounded-md text-2xl hover:bg-indigo-700 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
            value="Send"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
