import { useState, useEffect } from "react";

const ShowTimer: React.FC<{
  state: {
    startTime: number;
    pause: boolean;
  };
  dispatch: React.ActionDispatch<
    [
      action: {
        type: string;
        payload?: number;
      }
    ]
  >;
}> = ({ state, dispatch }) => {
  const { startTime, pause } = state;

  const [timeLeft, setTimeLeft] = useState<number>(startTime * 60);

  useEffect(() => {
    setTimeLeft(startTime * 60);
  }, [startTime]);

  useEffect(() => {
    if (pause || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [pause, timeLeft]);

  const toDate = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  function togglePause() {
    dispatch({ type: "togglePause" });
  }

  return (
    <div className="w-[30rem] h-[30rem] rounded-[50%] bg-[#161932] m-auto mt-[4.8rem]">
      <div className="circle" style={{ color: "white" }} onClick={togglePause}>
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
            cx="134.5"
            cy="134.5"
            r="100"
            strokeWidth="10"
            fill="none"
            stroke="#f87070"
          ></circle>
        </svg>
      </div>
      <div>
        <h4 className="text-[3rem] text-white">{toDate(timeLeft)}</h4>
        {/* <button
          className="mt-4 px-4 py-2 bg-gray-600 text-white rounded"
          onClick={() => dispatch({ type: "togglePause" })}
        >
          {pause ? "Start" : "Pause"}
        </button> */}
      </div>
    </div>
  );
};

export default ShowTimer;
