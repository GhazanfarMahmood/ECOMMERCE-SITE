import React, { useState } from "react";

//Contact Form Css
import "./ContactForm.scss";

const ContactForm = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevValue) =>({...prevValue, [name]:value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`${inputValue.name}, ${inputValue.email}, ${inputValue.password}, ${inputValue.phoneNumber}, ${inputValue.message}`)
    setInputValue({name: "", email: "", password: "", phoneNumber: "", message: ""})
  };
  return (
    <div className="contact-form">
      <h1>
        Contact <span>Us</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            onChange={handleChange}
            value={inputValue.name}
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            onChange={handleChange}
            value={inputValue.email}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            onChange={handleChange}
            value={inputValue.password}
          />
          <input
            type="text"
            placeholder="Enter your phone Number"
            name="phoneNumber"
            onChange={handleChange}
            value={inputValue.phoneNumber}
          />
        </div>
        <textarea
          name="message"
          id="message"
          cols="10"
          rows="10"
          placeholder="Message"
          onChange={handleChange}
          value={inputValue.message}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
