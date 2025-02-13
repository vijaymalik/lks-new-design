import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the mobile menu visibility
  };

  return (
    <div className="z-[9999999999] bg-[#cdea68] w-full px-5 md:px-20 py-4 font-['neue'] flex justify-between items-center">
      {/* Logo Section */}
      <div className="logo">
        <img
          className="h-12 w-34 ml-[-20px] md:ml-0"
          src="/assets/LOK-removebg-preview.png"
          alt="Logo"
        />
      </div>

      {/* Desktop Navbar Links (visible on medium screens and up) */}
      <div className="links navlinks hidden lg:flex justify-center items-center cursor-pointer gap-10">
        {["About us", "Our Work", "Services", "Blogs"].map((item, index) => (
          <a
            key={index}
            className={`text-lg capitalize cursor-pointer font-medium`}
          >
            {item}
          </a>
        ))}
         <button className="px-7 z-[999999] flex uppercase items-center gap-5 py-3 bg-zinc-900 rounded-full text-white transition-colors duration-500 ease-in-out hover:bg-green-900 hover:scale-95 hover:transition-all mt-4 lg:mt-0 ">
            donate now
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
      </div>

      {/* Mobile Hamburger Menu Button (visible only on small screens) */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl text-zinc-900">
          <i className={`fas fa-bars ${menuOpen ? "text-white" : ""}`}></i>
        </button>
      </div>

      {/* Mobile Navbar Links (shown when menu is open) */}
      {menuOpen && (
        <div className="lg:hidden z-[99] absolute top-16 left-0 w-full bg-[#cdea68] flex flex-col items-center py-4 gap-4">
          {["About us", "Our Work", "Services", "Blogs"].map((item, index) => (
            <a
              key={index}
              className="text-lg capitalize cursor-pointer font-medium"
              onClick={() => setMenuOpen(false)} // Close menu when a link is clicked
            >
              {item}
            </a>
          ))}

          {/* Donate Button in the mobile menu */}
          <button className="px-7 z-[999999] flex uppercase items-center gap-5 py-3 bg-zinc-900 rounded-full text-white transition-colors duration-500 ease-in-out hover:bg-green-900 hover:scale-95 hover:transition-all mt-4">
            donate now
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
