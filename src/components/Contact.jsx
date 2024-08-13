import React from 'react';

const Contact = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Name</label>
            <input type="text" className="w-full p-3 rounded-lg shadow-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Email</label>
            <input type="email" className="w-full p-3 rounded-lg shadow-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Phone</label>
            <input type="tel" className="w-full p-3 rounded-lg shadow-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Subject</label>
            <input type="text" className="w-full p-3 rounded-lg shadow-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Message</label>
            <textarea className="w-full p-3 rounded-lg shadow-md h-32"></textarea>
          </div>
          <button className="w-full bg-blue-500 text-white p-3 rounded-lg">Send Message</button>
        </form>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Visit Us</h3>
            <p className="text-gray-600">1234 Agency St, City, Country</p>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
            <p className="text-gray-600">Email: contact@agency.com</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?..."
            className="w-full h-64 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="text-center mt-8">
        <a href="#" className="text-blue-500 mx-2">Facebook</a>
        <a href="#" className="text-blue-500 mx-2">Twitter</a>
        <a href="#" className="text-blue-500 mx-2">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
