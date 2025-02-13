import React from "react";
import { useState } from "react";

function About() {
  const [selectedSection, setSelectedSection] = useState("eye-care");

  const images = {
    "eye-care":
      "https://lirp.cdn-website.com/757d0029/dms3rep/multi/opt/GettyImages-1394673202-432w.jpg",
    "general-medical":
      "https://lokkalyansamiti.org/images/causes/c03.png",
    "sponsor-child": "https://lokkalyansamiti.org/images/causes/c04.png",
  };

  const sectionStyle = (section) => {
    return selectedSection === section ? "bg-[#abd64a]" : " bg-[#c0e92c]";
  };
  return (
    <div className="w-full relative z-10 p-5 md:p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['neue'] text-2xl tracking-tight">
        Cataracts are a common eye condition where the natural lens of the eye
        becomes cloudy, leading to blurred vision and, if left untreated, can
        even cause blindness. Fortunately, cataract surgery is a highly
        effective procedure to restore vision and improve quality of life.
      </h1>
      <div className="md:flex gap-5 w-full border-t-[1px] pt-10 mt-10 md:mt-20 border-[#a1b562]">
        <div className="md:w-1/2  w-full">
          <h1 className="text-3xl md:text-5xl">Our Programs:</h1>
          <div
            className={`p-5  rounded-3xl mt-10 eye-care cursor-pointer ${sectionStyle(
              "eye-care"
            )}`}
            onClick={() => setSelectedSection("eye-care")} // Update state when clicked
          >
            <h6 className="mb-3 text-3xl">Eye Care</h6>
            <p>
              Started way back in 1975, the Eye Care Program at Lok Kalyan
              Samiti is an enduring success.
            </p>
          </div>

          {/* General Medical Services Section */}
          <div
            className={`p-5  rounded-3xl mt-6 general-medical cursor-pointer ${sectionStyle('general-medical')}`}
            onClick={() => setSelectedSection("general-medical")} // Update state when clicked
          >
            <h6 className="mb-3 text-3xl">General Medical Services</h6>
            <p>
              Providing medical care to the poor and needy has been historically
              the mainstay of LKS.
            </p>
          </div>

          <div
            className={`p-5  rounded-3xl mt-6 ${sectionStyle('sponsor-child')} cursor-pointer`}
            onClick={() => setSelectedSection("sponsor-child")}
          >
            <h6 className="mb-3 text-3xl"> Sponsor A Child</h6>
            <p>
              In this article, you will find all the information about Lok
              Kalyan Samiti's Sponsor a child in India program.
            </p>
          </div>

          <button className="px-7 mt-10 z-[999999] flex uppercase items-center gap-5 py-3 bg-zinc-900 rounded-full text-white transition-colors duration-500 ease-in-out hover:bg-green-900  hover:scale-95 hover:transition-all">
            View all Programs
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 w-full mt-10 md:mt-0 h-[40vh] md:h-[70vh] overflow-hidden rounded-3xl bg-[#a8c63b] about-right">
          <img
            className="h-full w-full object-cover"
            src={images[selectedSection]} // Dynamically set the image based on the selected section
            alt={selectedSection}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
