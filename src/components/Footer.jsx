import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* E-CART Section */}
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <span className="mr-2">🛒</span> E-CART
          </h2>
          <p className="text-sm mt-3 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipiscing elit. Impedit velit 
            placet quasi animi maxime natus vero aspernat blanditiis magni.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold">Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Wishlist</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
          </ul>
        </div>

        {/* Guides Section */}
        <div>
          <h3 className="text-xl font-semibold">Guides</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:underline">React</a></li>
            <li><a href="#" className="hover:underline">React Bootstrap</a></li>
            <li><a href="#" className="hover:underline">Bootswatch</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Email Id"
              className="p-2 w-full text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r-md text-white hover:bg-orange-600">
              Subscribe
            </button>
          </div>
         
          <div className="mt-4 flex space-x-4 text-2xl">
            <a href="#" className="hover:text-gray-300">🐦</a> 
            <a href="#" className="hover:text-gray-300">🔗</a> 
            <a href="#" className="hover:text-gray-300">📘</a> 
            <a href="#" className="hover:text-gray-300">📷</a> 
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer
