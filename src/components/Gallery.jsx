import React from "react";
import Slider from "react-slick";
import Testimonials from "./Testimonials";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "10px",
          arrows: false, // Optional: disable arrows on smaller screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10px",
          arrows: false, // Optional: disable arrows on smaller screens
        },
      },
    ],
  };
  return (
    <div className="lg:px-20 px-5  bg-white  py-10 lg:flex gap-10">
      <div className="lg:w-[70%] w-full p-5">
        <h2 className="text-4xl mb-5 flex gap-5 w-full pb-5 border-b-[1px]  border-[#a1b562]">
          Our Gallery
        </h2>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="h-[300px] overflow-hidden px-1 ">
                <img
                  className="h-full w-full object-cover"
                  src="https://lokkalyansamiti.org/images/gallery/2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="h-[300px] overflow-hidden ">
                <img
                  className="h-full w-full object-cover"
                  src="https://lokkalyansamiti.org/images/gallery/3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="h-[300px] overflow-hidden px-1  ">
                <img
                  className="h-full w-full object-cover"
                  src="https://lokkalyansamiti.org/images/gallery/7.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="h-[300px] overflow-hidden pr-1  ">
                <img
                  className="h-full w-full object-cover"
                  src="https://lokkalyansamiti.org/images/gallery/8.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="h-[300px] overflow-hidden   ">
                <img
                  className="h-full w-full object-cover"
                  src="https://lokkalyansamiti.org/images/gallery/14.png"
                  alt=""
                />
              </div>
            </div>
          </Slider>
        </div>
        <div className=" flex items-center justify-center mt-10">
          <button className="px-7 z-[999999] flex uppercase items-center gap-5 py-3 bg-zinc-900 rounded-full text-white transition-colors duration-500 ease-in-out hover:bg-green-900  hover:scale-95 hover:transition-all">
            Checkout Our Gallery
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
      </div>
      <div className=" w-full lg:w-[30%] h-auto  p-5  shadow-xl bg-white rounded-md">
        <h2 className="text-4xl mb-4 flex gap-5 w-full pb-5 border-b-[1px]  border-[#000000]">
          Testimonials
        </h2>
        <Testimonials />
      </div>
    </div>
  );
};

export default Gallery;
