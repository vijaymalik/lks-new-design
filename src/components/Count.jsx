import React, { useEffect, useState } from "react";

const Count = () => {
  const style = {
    clipPath:
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
  };

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  // Function to animate numbers
  const animateCount = (start, end, setter, duration = 2000) => {
    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const currentCount = Math.min(Math.floor(progress / duration * (end - start) + start), end);
      setter(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCount(0, 3794, setCount1);
          animateCount(0, 62459, setCount2);
          animateCount(0, 7557, setCount3);
          animateCount(0, 400, setCount4);
        }
      },
      { threshold: 0.5 }
    );

    const countSection = document.querySelector(".count-section");
    if (countSection) observer.observe(countSection);

    return () => {
      if (countSection) observer.unobserve(countSection);
    };
  }, []);

  return (
    <div className="h-[250px] lg:h-[600px] w-full overflow-hidden relative">
      <img
        className="h-full w-full object-cover"
        src="https://hyieyecarehospital.com/images/slide-2.jpg"
        alt=""
      />
      <div className="absolute top-0 h-full w-full bg-[#0000009c]"></div>
      <div className="absolute top-0 h-full w-full flex count-section">
        <div className="lg:w-1/2 w-0 h-full count-left "></div>
        <div className="lg:w-1/2 count-right w-full h-full p-5 lg:p-20 grid grid-cols-2 place-items-center gap-4">
          <div
            style={style}
            className="lg:h-52 lg:w-52 h-24 w-24 bg-[#cdea68] flex items-center justify-center flex-col"
          >
            <h2 className="text-xl lg:text-5xl font-medium">{count1.toLocaleString()}k</h2>
            <p className="text-[9px] lg:text-lg">Patients Served</p>
          </div>
          <div
            style={style}
            className="lg:h-52 lg:w-52 h-24 w-24 bg-[#cdea68] flex items-center justify-center flex-col"
          >
            <h2 className="lg:text-5xl text-xl font-medium">{count2.toLocaleString()}</h2>
            <p className="text-[9px] lg:text-lg">Eye Surgeries</p>
          </div>
          <div
            style={style}
            className="lg:h-52 lg:w-52 h-24 w-24 bg-[#cdea68] flex items-center justify-center flex-col"
          >
            <h2 className="lg:text-5xl text-xl font-medium">{count3.toLocaleString()}</h2>
            <p className="text-[9px] lg:text-lg">Children</p>
          </div>
          <div
            style={style}
            className="lg:h-52 lg:w-52 h-24 w-24 bg-[#cdea68] flex items-center justify-center flex-col"
          >
            <h2 className="lg:text-5xl text-xl font-medium">{count4.toLocaleString()}+</h2>
            <p className="text-[9px] lg:text-lg">Patients Daily Adding</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
