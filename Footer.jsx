import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {


  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 mt-10">
      <div className="container mx-auto px-4 py-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
          
          {/* --- Copyright Information --- */}
          <div className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Fred Musyoki. All rights reserved.
          </div>

        </div>
        
      </div>
    </footer>
  );
};

export default Footer;