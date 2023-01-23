import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="py-8 px-4  gradient-bg-welcome">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Contact Us</h2>
      <div className="flex justify-center">
        <div className="w-full max-w-sm mt-8 ">
          <div className="p-6 rounded-lg">
            <h3 className="text-lg font-bold text-orange-400 mb-4">Our Address</h3>
            <p className="text-white">
              <FaMapMarkerAlt className="text-indigo-500 mr-2 mb-1" />
              123 Main St, Suite 200, Anytown Abuja, Nigeria
            </p> 
            <br />
            <p className="text-white">
              <FaPhone className="text-indigo-500 mr-2 mb-1" />
              (+234) 081-0234-4203
            </p>
            <br />
            <p className="text-white-700">
              <FaEnvelope className="text-indigo-500 mr-2 mb-1" />
              info@example.com
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm">
          <form 
            action="https://formspree.io/f/mayznayn"
            method="POST"
            className="blue-glassmorphism p-6 rounded-lg">
            <div className="mb-4">
              <label className="block text-white-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border border-gray-400 p-2 rounded-lg w-full text-black"
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-900 p-2 rounded-lg w-full text-black"
                type="email"
                id="email"
                name="email"
                placeholder="info@example.com"
                
              />
            </div>
            <div className="mb-4">
              <label className="block text-white-700 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="border border-gray-400 p-2 rounded-lg w-full h-32 text-black"
                id="message"
                name="message"
              ></textarea>
            </div>
            <div className="text-center">
              <button className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

