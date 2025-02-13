import { motion } from "framer-motion";
import React from "react";
import LendingSlider from "./LendingSlider";

function Lending() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen border-t-2"
    >
      <div className="flex">
        <div className="textstructure w-[60%]  mt-56 px-20 ">
          {["Your Eyes", "Happiness", "Our  Responsibility"].map(
            (item, index) => {
              return (
                <div key={index} className='masker font-["founders"]'>
                  <div className="w-fit rounded-xl flex overflow-hidden">
                    {index === 1 && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "9vw" }}
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                        className="w-[9vw] h-[4.8vw] relative overflow-hidden rounded-xl top-[1vw]"
                      >
                        <img
                          className="w-full h-full object-cover"
                          src="/assets/eyelogo.png"
                          alt=""
                        />
                      </motion.div>
                    )}

                    <h1 className="uppercase inline-block relative leading-[6vw] tracking-tight font-semibold text-9xl">
                      {item}
                    </h1>
                  </div>
                </div>
              );
            }
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="w-[40%]"
        >
          <div className="mt-28 bg-red-300 w-[100%] h-full overflow-hidden  rounded-tl-3xl rounded-bl-3xl">
            <LendingSlider  />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Lending;
