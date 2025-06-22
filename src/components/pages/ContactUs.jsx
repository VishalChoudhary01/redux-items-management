import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen bg-white px-4 py-12 md:py-20 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
        Get in Touch
      </h2>
      <p className="text-gray-600 text-base md:text-lg max-w-2xl mb-10 font-Poppins">
        Whether you're looking to build a project, hire a team, or simply want to know more about our services, we'd love to hear from you.
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
        <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <FaEnvelope className="text-3xl text-black mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600">support@amrrtechsols.com</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <FaPhoneAlt className="text-3xl text-black mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <FaMapMarkerAlt className="text-3xl text-black mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-600">Bangalore, India</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-2xl bg-gray-100 p-8 rounded-2xl shadow-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
