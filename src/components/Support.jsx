import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Support() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
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
    <div className="w-full p-5 lg:p-20 text-black text-center">
      <h6 className="font-medium text-xl text-green-900">Help Those in Need</h6>
      <h1 className="lg:text-4xl text-2xl mt-2 mb-10 lg:mb-20 font-medium">
        Changing Lives with your Support
      </h1>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="px-2">
          <div className=" h-[250px]   p-5 bg-[#cdea68] rounded-3xl text-black">
            <div className="flex flex-col items-center justify-center">
              <img
                className="h-24 w-24"
                src="https://cdn-icons-png.flaticon.com/512/4922/4922395.png"
              />
              <h6 className="font-semibold text-lg mt-4">
                Full sponsorship of one Cataract Eye Operation Camp @ Rs 4 lakh*
              </h6>
            </div>
          </div>
          </div>
         
         <div cxlassName="px-2">
         <div className=" h-[250px]   p-5 bg-[#cdea68] rounded-3xl text-black">
            <div className="flex flex-col items-center justify-center">
              <img
                className="h-24 w-24"
                src="https://cdn-icons-png.flaticon.com/512/4922/4922395.png"
              />
              <h6 className="font-semibold text-lg mt-4">
                Partial sponsorship of one Cataract Eye Operation Camp @ Rs 2
                lakh*
              </h6>
            </div>
          </div>
         </div>
        
        <div className="px-2">
        <div className="h-[250px]   p-5 bg-[#cdea68] rounded-3xl text-black">
            <div className="flex flex-col items-center justify-center">
              <img
                className="h-24 w-24"
                src="https://cdn-icons-png.flaticon.com/512/4922/4922395.png"
              />
              <h6 className="font-semibold text-lg mt-4">
                Contribution towards One patient Cataract Operation @ Rs 20,000*
              </h6>
            </div>
          </div>
        </div>
         
          <div  className="pr-2" >
          <div className="h-[250px]   p-5 bg-[#cdea68] rounded-3xl text-black">
            <div className="flex flex-col items-center justify-center">
              <img
                className="h-24 w-24"
                src="https://cdn-icons-png.flaticon.com/512/4922/4922395.png"
              />
              <h6 className="font-semibold text-lg mt-4">
                Contribution towards One patient Cataract Operation @ Rs 20,000*
              </h6>
            </div>
          </div>
          </div>

          <div className="h-[250px]   p-5 bg-[#cdea68] rounded-3xl text-black">
            <div className="flex flex-col items-center justify-center">
              <img
                className="h-24 w-24"
                src="https://cdn-icons-png.flaticon.com/512/4922/4922395.png"
              />
              <h6 className="font-semibold text-lg mt-4">
                Contribution towards One patient Cataract Operation @ Rs 20,000*
              </h6>
            </div>
          </div>
        </Slider>
      </div>

      <h6 className="text-lg mt-10 text-gray-500">
        Contact us for help and{" "}
        <a className="text-green-900 font-semibold" href="">
          Donation
        </a>
      </h6>
    </div>
  );
}

export default Support;
