import React, { useState, useEffect } from "react";
import moment from "moment";
import {ReactComponent as Lock} from "../../../assets/media/Svgs/lock.svg";
const myStyle = {
  background:
    "linear-gradient(180deg, #030971 -18.73%, rgba(0, 5, 90, 0) 109.76%)",
};

function PresaleCountdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const time = Number(process.env.REACT_APP_DEADLINE);
  const deadline = time;

  const getTime = (deadline: any) => {
    const now = moment();
    if (!moment(deadline).isValid()) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      console.error(`Invalid deadline value: ${deadline}`);
      return;
    }

    const diff = moment(deadline).diff(now);
    const duration = moment.duration(diff);
    setDays(duration.days());
    setHours(duration.hours());
    setMinutes(duration.minutes());
    setSeconds(duration.seconds());
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, [deadline]);
  return (
    <div className="text-center">
      <div
        style={myStyle}
        className="p-2 pb-6 mt-10 lg:mt-0 m-auto max-w-[500px] border-t border-l border-[#6E71AD] backdrop-blur-[100px] rounded-lg text-white"
      >
        <h1 className="text-center font-semibold text-[25px]">
          Our Presale Ends in:
        </h1>
        <div className="flex justify-between lg:justify-evenly items-center mt-5  text-white text-2xl font-bold">
          <div
            style={{ background: "rgba(82, 89, 131, 0.2)" }}
            className="rounded-lg px-4 py-2 mx-0 sm:mx-1 md:mx-3"
          >
            <div className="text-3xl lg:text-5xl text-center font-semibold">
              {days}
            </div>
            <div className="text-sm lg:text-[18px] font-normal">Days</div>
          </div>
          :
          <div
            style={{ background: "rgba(82, 89, 131, 0.2)" }}
            className="rounded-lg px-4 py-2 mx-0 sm:mx-1 md:mx-3"
          >
            <div className="text-3xl lg:text-5xl text-center font-semibold">
              {hours}
            </div>
            <div className="text-sm lg:text-[18px] font-normal">Hours</div>
          </div>
          :
          <div
            style={{ background: "rgba(82, 89, 131, 0.2)" }}
            className="rounded-lg px-4 py-2 mx-0 sm:mx-1 md:mx-3"
          >
            <div className="text-3xl lg:text-5xl text-center font-semibold">
              {minutes}
            </div>
            <div className="text-sm lg:text-[18px] font-normal">Mins</div>
          </div>
          :
          <div
            style={{ background: "rgba(82, 89, 131, 0.2)" }}
            className="rounded-lg px-4 py-2 mx-0 sm:mx-1 md:mx-3"
          >
            <div className="text-3xl lg:text-5xl text-center font-semibold">
              {seconds}
            </div>
            <div className="text-sm lg:text-[18px] font-normal">Secs</div>
          </div>
        </div>
      </div>

      <button
        style={{
          background: "linear-gradient(65deg, #32F7AA -18.2%, #1D47FF 96.38%)",
        }}
        className="backdrop-blur-[129px] font-bold flex gap-3 items-center justify-center font-plus-jakarta text-white w-[70%] m-auto max-w-[350px] py-5 mt-10 lg:mt-12  rounded-[4rem]"
      >
       <Lock/>
       Enter Presale
      </button>
    </div>
  );
}

export default PresaleCountdown;
