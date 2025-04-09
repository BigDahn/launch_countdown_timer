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
  //let diff = diffSec === seconds;

  useEffect(() => {
    const id = setInterval(() => {
      setTime((s) => s - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [time]);

  //console.log(time);
  return (
    <main className="flex gap-[30px] font-sans mt-10 ">
      {/* countdown */}
      <main className="text-[30px] text-center">
        {" "}
        {/* time section */}
        <section>
          {/* time group */}
          <div className="font-black text-[100px] w-[100px] block">
            {/* time segment */}
            <article className="relative h-[100%]">
              {/* segment display */}
              <div className="relative overflow-hidden text-center w-[100%] h-[50%] bg-black text-[#eee] leading-24">
                30
              </div>
              {/* segment display top */}
              <div className="relative overflow-hidden text-center w-[100%] h-[50%] bg-[#333] text-white leading-0">
                30
              </div>
              {/* segment display bottom */}
              <div className="absolute top-0 h-[100px] w-[100px] perspective-[400px]">
                {/* segment overlay */}
                <div className="absolute overflow-hidden text-center w-[100%] h-[50%] top-0 leading-24 text-[#eee] bg-black animate-flip-top origin-bottom">
                  30
                </div>
                {/* segment overlay top */}
                <div className="absolute overflow-hidden text-center w-[100%] h-[50%] bottom-0 leading-0 text-white bg-[#333] animate-flip-bottom border-t-black origin-top">
                  30
                </div>
                {/* segment overlay bottom  */}
              </div>
            </article>
          </div>
        </section>
        <p>seconds</p>
      </main>
    </main>
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
