import { motion } from "framer-motion";
import React from "react";
import LendingSlider from "./LendingSlider";

function Lending() {
  return (
    <div data-scroll data-scroll-speed="-.3">
      <div className="md:flex md:py-20 py-10">
        <div className="textstructure flex items-start justify-center flex-col md:w-[60%] md:px-20 px-5 ">
          {["Your Eyes", "Happiness", "Our  Responsibility"].map(
            (item, index) => {
              return (
                <div key={index} className='masker font-["founders"]'>
                  <div className="w-fit rounded-xl flex overflow-hidden">
                    {index === 1 && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "120px" }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                        className="md:w-[120px] md:h-[100px]  h-[65px] w-[10px] relative overflow-hidden rounded-xl top-[1vw]"
                      >
                        <img
                          className="w-full h-full object-cover "
                          src="/assets/eyelogo.png"
                          alt=""
                        />
                      </motion.div>
                    )}
                    <h1 className="uppercase inline-block relative leading-[55px] md:leading-[95px] tracking-tight font-semibold md:text-9xl text-6xl">
                      {item}
                    </h1>
                  </div>
                </div>
              );
            }
          )}
        </div>

       <div className="md:w-[40%] w-[100%] mt-10 md:mt-0 ">
       <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="w-[100%]"
        >
          <div className=" w-[100%] h-[300px] md:h-[500px]  overflow-hidden  rounded-tl-3xl rounded-bl-3xl">
            <LendingSlider />
          </div>
        </motion.div>
       </div>
      </div>
    </div>
  );
}

export default Lending;
