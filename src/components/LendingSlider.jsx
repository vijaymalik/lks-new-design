import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

const LendingSlider = () => {
  return (
    <>
      <Swiper 
        className="heroslider"
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={2000} // slide transition duration in ms
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true} // infinite loop for continuous slides
        autoplay={{
          delay: 1000, // slide change interval in ms
          disableOnInteraction: false, // autoplay won't stop after interaction
        }}
        modules={[Autoplay, EffectFade]} // Add EffectFade module to Swiper
      >
        <SwiperSlide>
        <div className="h-[100%] w-[100%]">
        <img
            src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2440422.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1189207226/photo/female-patient-checking-vision-in-ophthalmological-clinic.jpg?s=612x612&w=0&k=20&c=jgoUMyIj09OnX6lc5FY3KDcheFDZ9zll6uZTHafmmgk="
            alt=""
            className="h-full w-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.ctfassets.net/ja9v5o5o08yv/1Qrj58paY9Tu6MzInNWTbh/981fdaa818063c11d41ca45300c6f28a/Eye_test_-_eye_health__1_.jpg?w=1200&h=800&fl=progressive&q=50&fm=jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default LendingSlider;
