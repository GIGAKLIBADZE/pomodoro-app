import { useState, useEffect } from "react";
import { useGeneral } from "../contexts/MainContext";

const ShowTimer: React.FC<{ apply: boolean }> = ({ apply }) => {
  const { timerState, timerDispatch, designState } = useGeneral();
  const {
    startTime,
    pause,
    shortStartTime,
    shortPause,
    longStartTime,
    longPause,
  } = timerState;
  const { color, mode } = designState;

  const [timeLeft, setTimeLeft] = useState<number>(Number(startTime) * 60);
  const [shortTimeLeft, setShortTimeLeft] = useState<number>(
    Number(shortStartTime) * 60
  );
  const [longTimeLeft, setLongTimeLeft] = useState<number>(
    Number(longStartTime) * 60
  );

  useEffect(() => {
    setTimeLeft(Number(startTime) * 60);
  }, [startTime]);

  useEffect(() => {
    setShortTimeLeft(Number(shortStartTime) * 60);
  }, [shortStartTime]);

  useEffect(() => {
    setLongTimeLeft(Number(longStartTime) * 60);
  }, [longStartTime]);

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
      setShortTimeLeft((prev) => {
        // console.log(shortPause);
        if (prev === 0) {
          timerDispatch({
            type: "continuePomodoro",
          });
          clearInterval(interval);
        }
        return Math.max(prev - 1, 0);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [shortPause, shortStartTime]);

  useEffect(() => {
    if (longPause || longTimeLeft <= 0) return;

    const interval = setInterval(() => {
      setLongTimeLeft((prev) => {
        console.log(longTimeLeft);
        if (prev === 0) {
          timerDispatch({
            type: "continuePomodoro",
          });
          clearInterval(interval);
        }
        return Math.max(prev - 1, 0);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [longPause, longStartTime]);

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

  const longToDate = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  function togglePause() {
    timerDispatch({
      type: "togglePause",
    });

    if (pause === true) {
      timerDispatch({
        type: "pauseShortTime",
      });
      timerDispatch({
        type: "pauseLongTime",
      });
    } else {
      timerDispatch({
        type: "continueShortTime",
      });
      timerDispatch({
        type: "continueLongTime",
      });
    }
  }

  function toggleShortPause() {
    if (apply === true) {
      timerDispatch({
        type: "toggleShortPause",
      });
    }

    if (shortPause === true && shortTimeLeft > 0) {
      if (apply === true) {
        timerDispatch({
          type: "pausePomodoro",
        });
        timerDispatch({
          type: "pauseLongTime",
        });
      }
    } else {
      timerDispatch({
        type: "continuePomodoro",
      });
    }
  }

  function toggleLongPause() {
    if (apply === true) {
      timerDispatch({
        type: "toggleLongPause",
      });
    }

    if (longPause === true && longTimeLeft > 0) {
      if (apply === true) {
        timerDispatch({
          type: "pausePomodoro",
        });
        timerDispatch({
          type: "pauseShortTime",
        });
      }
    } else {
      timerDispatch({
        type: "continuePomodoro",
      });
    }
  }

  function changeOffset() {
    timerDispatch({
      type: "changeOffset",
    });
  }

  return (
    <div
      className={`w-[30rem] h-[30rem] rounded-[50%] bg-[#161932] m-auto mt-[4.8rem] relative`}
    >
      <div
        style={{
          color: "white",
          boxShadow: "50px 50px 100px 0 #121530, -50px -50px 100px 0 #272c5a",
          borderRadius: "50%",
        }}
        onClick={
          mode === "pomodoro" && apply === true
            ? togglePause
            : mode === "short" && apply === true
            ? toggleShortPause
            : mode === "long" && apply === true
            ? toggleLongPause
            : undefined
        }
      >
        <svg width="100%" height="100%" viewBox="0 0 269 269">
          <defs>
            <linearGradient id="gradient" gradientTransform={`rotate(315)`}>
              <stop offset="0%" stopColor="#2e325a" />
              <stop offset="100%" stopColor="#0e112a" />
            </linearGradient>
          </defs>
          <circle
            cx="134.5"
            cy="134.5"
            r="124.5"
            strokeWidth="20"
            fill="none"
            // stroke="#272c5a"
            stroke="url(#gradient)"
            strokeDasharray={782.68}
            // strokeDashoffset={
            //   781.68 * (1 - timeLeft / (Number(startTime) * 60))
            // }
            transform="rotate(-90, 134.5, 134.5)"
            filter="url(#
            shadow)"
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
            strokeDashoffset={
              mode === "pomodoro"
                ? 628.32 * (1 - timeLeft / (Number(startTime) * 60))
                : mode === "short"
                ? 628.32 * (1 - shortTimeLeft / (Number(shortStartTime) * 60))
                : mode === "long"
                ? 628.32 * (1 - longTimeLeft / (Number(longStartTime) * 60))
                : ""
            }
            strokeLinecap="round"
            transform="rotate(-90, 134.5, 134.5)"
          ></circle>
        </svg>
        <div className="top-[8.6rem] absolute left-[50%] transform -translate-x-1/2 flex flex-col items-center">
          <h4 className="h-[8rem] text-[8rem] fon-bold leading-normal tracking-[-4px] text-[#d7e0ff]">
            {mode === "pomodoro"
              ? toDate(timeLeft)
              : mode === "short"
              ? shortToDate(shortTimeLeft)
              : mode === "long"
              ? longToDate(longTimeLeft)
              : ""}
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
