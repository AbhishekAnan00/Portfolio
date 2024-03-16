import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="contact w-[100vw] p-5 mt-16">
      <div className="contact_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497700.1140763729!2d77.30057183475009!3d12.953789324575405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1707847773905!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact_form  flex flex-col justify-center items-center mt-5 ">
        <form
          action="https://formspree.io/f/xvoebodl"
          method="post"
          className="flex flex-col justify-center items-center"
        >
          <input
            type="text"
            name="Name"
            placeholder="Name"
            className="mb-5 p-2 outline-none border-none width-all:w-[20vw] phone-sm:w-[60vw] "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-5 p-2 outline-none border-none width-all:w-[20vw] phone-sm:w-[60vw]"
          />
          <textarea
            name="Messege"
            placeholder="Enter Your Messege"
            cols="60"
            rows="8"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-5 p-2 outline-none border-none width-all:w-[20vw] phone-sm:w-[60vw]"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-600 w-20 p-2 rounded-xl text-white font-bold hover:bg-teal-500 mb-10"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
