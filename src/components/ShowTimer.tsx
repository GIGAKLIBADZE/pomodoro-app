import { useState, useEffect } from "react";
import { useGeneral } from "../contexts/MainContext";

const ShowTimer: React.FC = () => {
  const { timerState, timerDispatch, designState } = useGeneral();
  const { startTime, pause, shortStartTime, shortPause } = timerState;
  const { color, font, mode } = designState;

  const [timeLeft, setTimeLeft] = useState<number>(startTime * 60);
  const [shortTimeLeft, setShortTimeLeft] = useState<number>(
    shortStartTime * 60
  );

  useEffect(() => {
    setTimeLeft(startTime * 60);
  }, [startTime]);

  useEffect(() => {
    setShortTimeLeft(shortStartTime * 60);
  }, [shortStartTime]);

  useEffect(() => {
    if (pause || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [pause, startTime]);

  useEffect(() => {
    if (shortPause || shortTimeLeft <= 0) return;

    const interval = setInterval(() => {
      setShortTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [shortPause, shortStartTime]);

  const toDate = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const shortToDate = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  function togglePause() {
    timerDispatch({
      type: "togglePause",
    });
  }

  function changeOffset() {
    timerDispatch({
      type: "changeOffset",
    });
  }

  return (
    <div
      className={`w-[30rem] h-[30rem] rounded-[50%] bg-[#161932] m-auto mt-[4.8rem] relative ${
        font === 1
          ? "font-[KumbhSans]"
          : font === 2
          ? "font-[RobotoSlab]"
          : font === 3
          ? "font-[SpaceMono]"
          : ""
      }`}
    >
      <div className="circle " style={{ color: "white" }} onClick={togglePause}>
        <svg width="100%" height="100%" viewBox="0 0 269 269">
          <circle
            cx="134.5"
            cy="134.5"
            r="124.5"
            strokeWidth="20"
            fill="none"
            stroke="#272c5a"
            filter="url(#shadow)"
          ></circle>
          <circle
            onClick={changeOffset}
            cx="134.5"
            cy="134.5"
            r="100"
            strokeWidth="10"
            fill="none"
            stroke={
              color === "orange"
                ? "#f87070"
                : color === "blue"
                ? "#70f3f8"
                : "#d881f8"
            }
            strokeDasharray={628.32}
            strokeDashoffset={628.32 * (1 - timeLeft / (startTime * 60))}
            transform="rotate(-90, 134.5, 134.5)"
          ></circle>
        </svg>
        <div className="top-[8.6rem] absolute left-[50%] transform -translate-x-1/2 flex flex-col items-center">
          <h4 className="h-[8rem] text-[8rem] fon-bold leading-normal tracking-[-4px] text-[#d7e0ff]">
            {mode === "pomodoro"
              ? toDate(timeLeft)
              : shortToDate(shortTimeLeft)}
          </h4>
          <span className="w-[9.5rem] text-[1.4rem] font-bold leading-normal tracking-[13.13px] text-[#d7e0ff] mt-[3.5rem]">
            PAUSE
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShowTimer;
