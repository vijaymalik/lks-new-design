import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <Swiper
     
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true} // infinite loop
        autoplay={{
          delay: 2000, // slide change interval in ms
          disableOnInteraction: false, // autoplay won't stop after interaction
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="text-center">
            <h2 className="text-lg font-semibold">Mrs Madhurma</h2>
            <h6 className="text-green-900 ">Delhi - 93</h6>
            <p className="text-gray-600 mt-5 font-normal">
              My name is Mrs. Madhurma. I am 53 years old. I have been living in
              Saboli for last many years with my family members. I was feeling
              pain in my left eye for last six months. In this regard I visited
              more than two government hospitals but found that there was great
              rush. Then I come to know from someone that I can be treated in
              Lok Kalyan Samiti, Hospital Nand Nagri.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-center">
            <h2 className="text-lg font-semibold">Mr Bhodev Prasad</h2>
            <h6 className="text-green-900">Shiv Vihar, Delhi</h6>
           
            <p className="text-gray-600 mt-5 font-normal">
            My name is Bhodev Prashad. I am 69 years old. I have been living in Shiv Vihar for last so many years with my family members. I was feeling pain in my left eye for last six months. In this regard, I visited more than two government hospitals but found that there was great rush. During my visit to the govt hospital, someone suggested me to go to Lok Kalyan Samiti, Nand Nagri. I went there with my child.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonials;
