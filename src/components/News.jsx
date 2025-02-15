import { useState } from "react";
import React from "react";

const style = {
  clipPath:
    "polygon(50% 0%, 100% 30%, 100% 71%, 51% 100%, 50% 100%, 0 71%, 0 30%)",
};

const Modal = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">This is a Modal</h2>
        <p>Modal content goes here...</p>
        <button
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const News = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="bg-white z-20 relative py-10 bg bg-cover bg-center bg-[url('https://cdn.givind.org/static/images/program/w1080/support-clothes-and-footwear-for-a-poor-orphan-child.jpg')]">
      <div className="h-full w-full bg-[#0000006e] absolute top-0"></div>
      <div className="flex w-full justify-center items-center gap-2">
        <div
          className="bg-[#cdea68] box  h-32 w-28 sm:h-52 sm:w-48 flex justify-center items-center cursor-pointer "
          style={style}
          onClick={handleShow} // Show modal on click
        >
          <p className=" text-[12px] sm:text-base font-medium">Donation Card</p>
        </div>
        <div
          className="bg-green-900 cursor-pointer box text-white  flex justify-center items-center h-32 w-28 sm:h-52 sm:w-48"
          style={style}
          onClick={handleShow} // Show modal on click
        >
          <p className=" text-[12px] sm:text-base font-medium">Newsletter</p>
        </div>
        <div
          className="bg-[#cdea68] cursor-pointer box flex justify-center items-center h-32 w-28 sm:h-52 sm:w-48"
          style={style}
          onClick={handleShow} // Show modal on click
        >
          <p className=" text-[12px] sm:text-base font-medium">Sponsor a Child</p>
        </div>
      </div>
      <div className="flex w-full justify-center items-center gap-2 mt-[-30px] sm:mt-[-52px]">
        <div
          className="bg-[#cdea68] cursor-pointer box  text-center flex justify-center items-center h-32 w-28 sm:h-52 sm:w-48"
          style={style}
          onClick={handleShow} // Show modal on click
        >
          <p className=" text-[12px] sm:text-base font-medium">Our Upcoming Eye Operation Camps</p>
        </div>
        <div
          className="bg-[#cdea68] cursor-pointer box  flex text-center justify-center items-center h-32 w-28 sm:h-52 sm:w-48"
          style={style}
          onClick={handleShow} // Show modal on click
        >
          <p className=" text-[12px] sm:text-base font-medium">Receipt of Foreign Donations in Quarter Ending</p>
        </div>
      </div>

      {show && <Modal handleClose={handleClose} />}
    </div>
  );
};

export default News;
