import React from "react";

const Count = () => {
  const style = {
    clipPath:
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
  };
  return (
    <div className=" h-[250px]  md:h-auto w-full overflow-hidden relative">
      <img
        className="h-full w-full object-cover"
        src="https://hyieyecarehospital.com/images/slide-2.jpg"
        alt=""
      />
      <div className=" absolute top-0 h-full w-full bg-[#0000009c]"></div>
      <div className=" absolute top-0 h-full w-full flex">
        <div className="md:w-1/2 w-0 h-full "></div>
        <div className="md:w-1/2 w-full h-full p-5 md:p-20 grid grid-cols-2 place-items-center  gap-4">
          <div
            style={style}
            className="md:h-52 md:w-52 h-24 w-24  bg-[#cdea68] flex items-center justify-center flex-col "
          >
            <h2 className=" text-xl md:text-5xl font-medium"> 3,794k</h2>
            <p className="text-[9px] md:text-lg">Patients Served</p>
          </div>
          <div
            style={style}
            className="md:h-52 md:w-52 h-24 w-24  bg-[#cdea68] flex items-center justify-center flex-col"
          >
            <h2 className="md:text-5xl text-xl font-medium"> 62,459</h2>
            <p className="text-[9px] md:text-lg">Eye Surgeries</p>
          </div>
          <div
            style={style}
            className="md:h-52 md:w-52 h-24 w-24  bg-[#cdea68] flex items-center justify-center flex-col"
          >
            <h2 className="md:text-5xl text-xl font-medium"> 7,557</h2>
            <p className="text-[9px] md:text-lg">Children</p>
          </div>
          <div
            style={style}
            className="md:h-52 md:w-52 h-24 w-24  bg-[#cdea68] flex items-center justify-center flex-col"
          >
            <h2 className="md:text-5xl text-xl font-medium">400+</h2>
            <p className="text-[9px] md:text-lg">Patients Daily Adding</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
