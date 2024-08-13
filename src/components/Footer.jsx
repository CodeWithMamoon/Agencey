import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="/assets/logo.png" alt="Agency Logo" className="h-10 mb-4" />
          <p>We provide top-notch website development services to help you succeed online.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Subscribe</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg shadow-md mb-4"
            />
            <button className="w-full bg-blue-500 text-white p-3 rounded-lg">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8">
        <a href="#" className="text-blue-500 mx-2">Facebook</a>
        <a href="#" className="text-blue-500 mx-2">Twitter</a>
        <a href="#" className="text-blue-500 mx-2">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
