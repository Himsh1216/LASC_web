import React from 'react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">LASC</h4>
            <p className="text-gray-400">Laboratory of Advanced Synthesis and Characterization</p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setCurrentPage('home')} 
                  className="text-gray-400 hover:text-white"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('services')} 
                  className="text-gray-400 hover:text-white"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('contact')} 
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Contact Info</h5>
            <p className="text-gray-400">IIC PDEU, Near UG Boys Hostel</p>
            <p className="text-gray-400">Raisan-382007, Gandhinagar</p>
            <p className="text-gray-400">Gujarat, India</p>
            <p className="text-gray-400 mt-2">info.lasc123@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LASC. All rights reserved. | Made in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;