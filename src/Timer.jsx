import React, { useEffect, useState } from "react";

const number = 777290;
const Timer = () => {
  const [time, setTime] = useState(number);
  const [diffSec, setDiffSet] = useState(time % 60);
  const days = Math.floor(time / 86400);
  const hours = Math.floor(time / 3600) % 24;
  const minutes = Math.floor(time / 60) % 60;
  let seconds = time % 60;

  useEffect(() => {
    setDiffSet(seconds);
  }, [seconds]);
  let diff = diffSec === seconds;

  useEffect(() => {
    const id = setInterval(() => {
      setTime((s) => s - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [time]);

  //console.log(time);
  return (
    <section className="flex gap-8">
      <div className="bg-red-500 w-32 h-26">
        <div>3</div>
      </div>
    </section>
  );
};

export default Timer;

{
  /*   <div className="text-white text-2xl">
        {`${days}
    ${hours}
    ${minutes}
    ${seconds}
    
    total:${time}`}
      </div> */
}

{
  /* <section className="grid border grid-cols-4 gap-10 text-9xl text-white">
      <div className=" relative bg-purple-600 shadow-2xl rounded-[5px] p-4">
        <div className="absolute inset-0 bg-red-400 grid grid-rows-2">
          <div className="bg-black rounded-b-xl"></div>
          <div className="bg-blue-400 rounded-t-xl"></div>
        </div>
        <span className="relative">{days}</span>
        <div className="absolute inset-0 flex items-center ">
          <div className="h-px w-full bg-black"></div>
        </div>
      </div>
      <div className="relative bg-purple-600 shadow-2xl rounded-[5px] p-4">
        <div className="absolute inset-0 bg-red-400 grid grid-rows-2">
          <div className="bg-black"></div>
          <div className="bg-blue-400"></div>
        </div>
        <span className="relative">{hours}</span>
        <div className="absolute inset-0 flex items-center">
          <div className="h-px w-full bg-black"></div>
        </div>
      </div>
      <div className="relative bg-purple-600 shadow-2xl rounded-[5px] p-4">
        <div className="absolute inset-0 bg-red-400 grid grid-rows-2">
          <div className="bg-black"></div>
          <div className="bg-blue-400"></div>
        </div>
        <span className="relative">{minutes}</span>
        <div className="absolute inset-0 flex items-center">
          <div className="h-px w-full bg-black"></div>
        </div>
      </div>
      <div className="relative  shadow-2xl   rounded-[5px] p-4">
        <div className="absolute inset-0 grid grid-rows-2 ">
          <div className={`${diff && "bg-black animate-flip-top"}`}></div>
          <div className={`${diff && "bg-black "}`}></div>
        </div>

        <span className="relative">{seconds}</span>
        <div className="absolute inset-0 flex items-center">
          <div className="h-px w-full bg-black"></div>
        </div>
      </div>
    </section> */
}
