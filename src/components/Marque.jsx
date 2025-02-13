import { motion } from "framer-motion";
import React from "react";

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="py-10 md:py-20 rounded-tl-3xl rounded-tr-3xl w-full bg-green-900">
      <div className="text border-t-2 border-b-2 boder-zinc-300 text-white flex pb-5 md:pb-10 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className='text-[20vw] leading-none font-["founders"] font-semibold  pr-24'
        >
        Your Eye Health, Our Top Priority
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className='text-[20vw] leading-none font-["founders"] font-semibold  pr-24'
        >
        Your Eye Health, Our Top Priority
        </motion.h1>
      </div>
    </div>
  );
}

export default Marque;
