import React from "react";
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
        function (response) {
          alert("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }
  return (
    <div>
      <form onSubmit={sendEmail}>
        <input
          id="input-1"
          type="text"
          placeholder="John Doe"
          name="name"
          required
          autofocus
        />
        <label htmlFor="input-1">
          <span className="label-text">Full Name</span>
          <span className="nav-dot" />
          <div className="signup-button-trigger">Sign Uppp</div>
        </label>
        //Email part
        <input
          id="input-3"
          type="email"
          name="email"
          placeholder="email@address.com"
          required
        />
        <label htmlFor="input-3">
          <span className="label-text">Email</span>
          <span className="nav-dot" />
        </label>
        //phone number part
        <input
          id="input-2"
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          required
        />
        <label htmlFor="input-2">
          <span className="label-text">Phone Number</span>
          <span className="nav-dot" />
        </label>
        //Event budget
        <input
          id="input-4"
          name="budget"
          type="text"
          placeholder="Event budget"
          required
        />
        <label htmlFor="input-4">
          <span className="label-text">Event Budget</span>
          <span className="nav-dot" />
        </label>
        // text area
        <input
          id="input-5"
          name="message"
          type="textarea"
          placeholder="Write Your Message"
          required
        />
        <label htmlFor="input-5">
          <span className="label-text">Message</span>
          <span className="nav-dot" />
        </label>
        //this is contact part
        <button type="submit" value="Send">
          Submit
        </button>
        <p className="tip">Press Tab</p>
        <div className="signup-button">Contact</div>
      </form>
    </div>
  );
};

export default Contact;
