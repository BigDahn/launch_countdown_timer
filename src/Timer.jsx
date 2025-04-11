import React, { useEffect, useState } from "react";

const number = 777290;
const Timer = () => {
  const [time, setTime] = useState(number);
  const [diffSec, setDiffSet] = useState(time % 60);
  const [diffMins, setDiffMins] = useState(Math.floor(time / 60) % 60);
  const [diffHours, setDiffHours] = useState(Math.floor(time / 3600) % 24);
  const [diffDays, setDiffDays] = useState(Math.floor(time / 86400));
  const days = Math.floor(time / 86400);
  const hours = Math.floor(time / 3600) % 24;
  const minutes = Math.floor(time / 60) % 60;
  let seconds = time % 60;

  useEffect(() => {
    setDiffSet(seconds);
  }, [seconds]);

  useEffect(() => {
    setDiffMins(minutes);
  }, [minutes]);

  useEffect(() => {
    setDiffHours(hours);
  }, [hours]);

  useEffect(() => {
    setDiffDays(days);
  }, [days]);

  let day = diffDays === days;
  let min = diffMins === minutes;
  let diff = diffSec === seconds;
  let hrs = diffHours === hours;

  useEffect(() => {
    const id = setInterval(() => {
      setTime((s) => s - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [time]);

  //console.log(time);
  return (
    <main className="flex gap-[30px] font-DM-SANS mt-10 ">
      {/* countdown */}
      <main className="text-[15px] uppercase font-bold text-center text-[#80809a] flex flex-col gap-3">
        {" "}
        {/* time section */}
        <section>
          {/* time group */}
          <div class="w-[120px] h-[110px] text-center  text-[70px] text-white font-black">
            <div class="relative h-[100%] text-center overflow-hidden">
              <div class="bg-[#2c2c44] h-[50%] w-[100%] text-[#d64e71] leading-[1.57]  rounded-t-[10px] relative overflow-hidden">
                {days < 10 ? `0${days}` : days}
              </div>
              <div class="bg-[#34364f] h-[50%] w-[100%] text-[#fc5d85] leading-[0] rounded-b-[10px] relative overflow-hidden">
                {days < 10 ? `0${days}` : days}
              </div>
              <section class="absolute h-[100%] top-0 text-center w-[120px] overflow-hidden">
                <div
                  className={`${
                    day
                      ? "bg-[#2c2c44] w-[100%] absolute top-0 h-[50%] text-[#d64e71] leading-[1.57]  rounded-t-[10px] overflow-hidden animate-flip-top origin-bottom"
                      : "bg-[#2c2c44] w-[100%] absolute top-0 h-[50%] text-[#d64e71] leading-[1.57]  rounded-t-[10px] overflow-hidden "
                  }`}
                >
                  {days < 10 ? `0${days}` : days}
                </div>
                <div
                  className={`${
                    day
                      ? "bg-[#34364f] absolute h-[50%] w-[100%]  bottom-0 leading-[0] text-[#fc5d85]  rounded-b-[10px]  overflow-hidden animate-flip-bottom origin-top"
                      : "bg-[#34364f] absolute h-[50%] w-[100%]  bottom-0 leading-[0] text-[#fc5d85] overflow-hidden  rounded-b-[10px]"
                  }`}
                >
                  {days < 10 ? `0${days}` : days}
                </div>
                <div class="absolute bg-[#111] rounded-r-md rounded-br-md h-[7px] w-[6px] top-[3.25rem] "></div>
                <div class="absolute bg-[#111] h-[7px] w-[6px] top-[3.25rem] left-[7.2rem]  rounded-bl-md rounded-l-md"></div>
              </section>
            </div>
          </div>
        </section>
        <p>Days</p>
      </main>
      <main className="text-[15px] uppercase font-bold text-center text-[#80809a] flex flex-col gap-3">
        {" "}
        {/* time section */}
        <section>
          {/* time group */}
          <div class="w-[120px] h-[110px] text-center  text-[70px] text-white font-black">
            <div class="relative h-[100%] text-center overflow-hidden">
              <div class="bg-[#2c2c44] h-[50%] w-[100%] text-[#d64e71] leading-[1.57]  rounded-t-[10px] relative overflow-hidden">
                {hours < 10 ? `0${hours}` : hours}
              </div>
              <div class="bg-[#34364f] h-[50%] w-[100%] text-[#fc5d85] leading-[0] rounded-b-[10px] relative overflow-hidden">
                {hours < 10 ? `0${hours}` : hours}
              </div>
              <section class="absolute h-[100%] top-0 text-center w-[120px] overflow-hidden">
                <div
                  className={`${
                    hrs
                      ? "bg-[#2c2c44] w-[100%] absolute top-0 h-[50%] text-[#d64e71] leading-[1.57]  rounded-t-[10px] overflow-hidden animate-flip-top origin-bottom"
                      : "bg-[#2c2c44] w-[100%] absolute top-0 h-[50%] text-[#d64e71] leading-[1.57]  rounded-t-[10px] overflow-hidden "
                  }`}
                >
                  {hours < 10 ? `0${hours}` : hours}
                </div>
                <div
                  className={`${
                    hrs
                      ? "bg-[#34364f] absolute h-[50%] w-[100%]  bottom-0 leading-[0] text-[#fc5d85]  rounded-b-[10px]  overflow-hidden animate-flip-bottom origin-top"
                      : "bg-[#34364f] absolute h-[50%] w-[100%]  bottom-0 leading-[0] text-[#fc5d85] overflow-hidden  rounded-b-[10px]"
                  }`}
                >
                  {hours < 10 ? `0${hours}` : hours}
                </div>
                <div class="absolute bg-[#111] rounded-r-md rounded-br-md h-[7px] w-[6px] top-[3.25rem] "></div>
                <div class="absolute bg-[#111] h-[7px] w-[6px] top-[3.25rem] left-[7.2rem]  rounded-bl-md rounded-l-md"></div>
              </section>
            </div>
          </div>
        </section>
        <p>Hours</p>
      </main>
      <main className="text-[15px] uppercase font-bold text-center text-[#80809a] flex flex-col gap-3">
        {" "}
        {/* time section */}
        <section>
          {/* time group */}
          <div class="w-[120px] h-[110px] text-center  text-[70px] text-white font-black">
            <div class="relative h-[100%] text-center overflow-hidden">
              <div class="bg-[#2c2c44] h-[50%] w-[100%] text-[#d64e71] leading-[1.57]  rounded-t-[10px] relative overflow-hidden">
                {minutes < 10 ? `0${minutes}` : minutes}
              </div>
              <div class="bg-[#34364f] h-[50%] w-[100%] text-[#fc5d85] leading-[0] rounded-b-[10px] relative overflow-hidden">
                {minutes < 10 ? `0${minutes}` : minutes}
              </div>
              <section class="absolute h-[100%] top-0 text-center w-[120px] overflow-hidden">
                <div
                  className={`${
                    min
                      ? "bg-[#2c2c44] w-[100%] absolute top-0 h-[50%] text-[#d64e71] leading-[1.57]  rounded-t-[10px] overflow-hidden animate-flip-top origin-bottom"
                      : "bg-[#2c2c44] w-[100%] absolute top-0 h-[50%] text-[#d64e71] leading-[1.57]  rounded-t-[10px] overflow-hidden "
                  }`}
                >
                  {minutes < 10 ? `0${minutes}` : minutes}
                </div>
                <div
                  className={`${
                    min
                      ? "bg-[#34364f] absolute h-[50%] w-[100%]  bottom-0 leading-[0] text-[#fc5d85]  rounded-b-[10px]  overflow-hidden animate-flip-bottom origin-top"
                      : "bg-[#34364f] absolute h-[50%] w-[100%]  bottom-0 leading-[0] text-[#fc5d85] overflow-hidden  rounded-b-[10px]"
                  }`}
                >
                  {minutes < 10 ? `0${minutes}` : minutes}
                </div>
                <div class="absolute bg-[#111] rounded-r-md rounded-br-md h-[7px] w-[6px] top-[3.25rem] "></div>
                <div class="absolute bg-[#111] h-[7px] w-[6px] top-[3.25rem] left-[7.15rem]  rounded-bl-md rounded-l-md"></div>
              </section>
            </div>
          </div>
        </section>
        <p>Minutes</p>
      </main>
      <main className="text-[15px] uppercase font-bold text-center text-[#80809a] flex flex-col gap-3">
        {" "}
        {/* time section */}
        <section>
          <div class="w-[120px] h-[110px] text-center  text-[70px] text-white font-black">
            <div class="relative h-[100%] text-center overflow-hidden">
              <div class="bg-[#2c2c44] h-[50%] w-[100%] text-[#d64e71] leading-[1.57]  rounded-t-[10px] relative overflow-hidden">
                {seconds < 10 ? `0${seconds}` : seconds}
              </div>
              <div class="bg-[#34364f] h-[50%] w-[100%] text-[#fc5d85] leading-[0] rounded-b-[10px] relative overflow-hidden">
                {seconds < 10 ? `0${seconds}` : seconds}
              </div>
              <section class="absolute h-[100%] top-0 text-center w-[120px] overflow-hidden">
                <div
                  className={`${
                    diff
                      ? "bg-[#2c2c44] w-[100%] absolute top-0 h-[50%] text-[#d64e71] leading-[1.57]  rounded-t-[10px] overflow-hidden animate-flip-top origin-bottom"
                      : "bg-[#2c2c44] w-[100%] absolute top-0 h-[50%] text-[#d64e71] leading-[1.57]  rounded-t-[10px] overflow-hidden "
                  }`}
                >
                  {seconds < 10 ? `0${seconds}` : seconds}
                </div>
                <div
                  className={`${
                    diff
                      ? "bg-[#34364f] absolute h-[50%] w-[100%]  bottom-0 leading-[0] text-[#fc5d85]  rounded-b-[10px]  overflow-hidden animate-flip-bottom origin-top"
                      : "bg-[#34364f] absolute h-[50%] w-[100%]  bottom-0 leading-[0] text-[#fc5d85] overflow-hidden  rounded-b-[10px]"
                  }`}
                >
                  {seconds < 10 ? `0${seconds}` : seconds}
                </div>
                <div class="absolute bg-[#111] rounded-r-md rounded-br-md h-[7px] w-[6px] top-[3.25rem] "></div>
                <div class="absolute bg-[#111] h-[7px] w-[6px] top-[3.25rem] left-[7.2rem]  rounded-bl-md rounded-l-md"></div>
              </section>
            </div>
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

  {
    /* <section>
     */
  }
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
