import React from "react";

function Navbar() {
  return (
    <div className=" absolute  z[9999999999] bg-[#cdea68] w-full px-20 py-4 font-['neue'] flex justify-between items-center">
      <div className="logo ">
        <img
          className=" h-12 w-34 "
          src="/assets/LOK-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="links navlinks flex justify-center  cursor-pointer gap-10">
        {["About us", "Our Work", "Services", "Blogs"].map((item, index) => (
          <a
            key={index}
            className={`text-lg capitalize cursor-pointer  font-medium  ${
              index === 4 && "ml-32"
            }`}
          >
            {item}
          </a>
        ))}
      </div>
      <button className="px-7 z-[999999] flex uppercase items-center gap-5 py-3 bg-zinc-900 rounded-full text-white transition-colors duration-500 ease-in-out hover:bg-green-900  hover:scale-95 hover:transition-all ">
        donate now
        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
      </button>
    </div>
  );
}

export default Navbar;
