import { useState } from "react";
import React from "react";
const style = {
  clipPath:
    "polygon(50% 0%, 100% 30%, 100% 71%, 51% 100%, 50% 100%, 0 71%, 0 30%)",
};
const News = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='bg-white z-20 relative py-10 bg  bg-cover bg-center bg-[url("https://cdn.givind.org/static/images/program/w1080/support-clothes-and-footwear-for-a-poor-orphan-child.jpg")] '>
      <div className="h-full w-full bg-[#0000006e] absolute top-0"></div>
      <div className=" flex w-full justify-center items-center gap-2">
        <div
          className="bg-[#cdea68]  h-52 flex  justify-center items-center w-48"
          style={style}
        >
          <p className="text-lg font-medium">Donation Card</p>
        </div>
        <div
          className="bg-green-900 text-white h-52 flex  justify-center items-center   w-48"
          style={style}
        >
          <p className="text-base  font-medium">Newsletter</p>
        </div>
        <div
          className="bg-[#cdea68] h-52 flex  justify-center items-center   w-48"
          style={style}
        >
          <p className="text-base font-medium">Sponsor a Child</p>
        </div>
      </div>
      <div className=" flex w-full justify-center items-center gap-2 mt-[-52px]">
        <div
          className="bg-[#cdea68] h-52 text-center flex justify-center items-center w-48"
          style={style}
        >
          <p className="text-base font-medium">
            Our Upcoming Eye Operation Camps
          </p>
        </div>
        <div
          className="bg-[#cdea68] h-52 flex text-center  justify-center items-center   w-48"
          style={style}
        >
          <p className="text-base font-medium">
            Receipt of Foreign Donations in Quarter Ending
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
