import { useState, useEffect } from "react";
import { useGeneral } from "../contexts/MainContext";

const ShowTimer: React.FC = () => {
  const { timerState, timerDispatch, designState } = useGeneral();
  const {
    startTime,
    pause,
    shortStartTime,
    shortPause,
    longStartTime,
    longPause,
  } = timerState;
  const { color, mode, font } = designState;

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
    if (timeLeft > 0) {
      timerDispatch({
        type: "togglePause",
      });
    }

    if (pause === true && timeLeft > 0) {
      timerDispatch({
        type: "pauseShortTime",
      });
      timerDispatch({
        type: "pauseLongTime",
      });
    } else if (pause === false && timeLeft > 0 && shortTimeLeft > 0) {
      timerDispatch({
        type: "continueShortTime",
      });
    } else if (pause === false && timeLeft > 0 && longTimeLeft > 0) {
      timerDispatch({
        type: "continueLongTime",
      });
    }
  }

  function toggleShortPause() {
    if (shortTimeLeft > 0) {
      timerDispatch({
        type: "toggleShortPause",
      });
    }

    if (
      shortPause === true &&
      shortTimeLeft > 0 &&
      Number(shortStartTime) > 0
    ) {
      timerDispatch({
        type: "pausePomodoro",
      });
      timerDispatch({
        type: "pauseLongTime",
      });
    } else if (shortPause === false && Number(shortStartTime) > 0) {
      timerDispatch({
        type: "continuePomodoro",
      });
    }
  }

  function toggleLongPause() {
    if (longTimeLeft > 0) {
      timerDispatch({
        type: "toggleLongPause",
      });
    }

    if (longPause === true && longTimeLeft > 0 && Number(longStartTime) > 0) {
      timerDispatch({
        type: "pausePomodoro",
      });
      timerDispatch({
        type: "pauseShortTime",
      });
    } else if (longPause === false && Number(longStartTime) > 0) {
      timerDispatch({
        type: "continuePomodoro",
      });
    }
  }

  function startAgain() {
    if (timeLeft === 0) {
      setTimeLeft(Number(startTime) * 60);
    }
  }

  return (
    <div className="countdown-container">
      <div
        style={{
          color: "white",
          boxShadow: "50px 50px 100px 0 #121530, -50px -50px 100px 0 #272c5a",
          borderRadius: "50%",
        }}
        className={`${
          color === "orange"
            ? "hoveredOrange"
            : color === "blue"
            ? "hoveredBlue"
            : color === "purple"
            ? "hoveredPurple"
            : ""
        }`}
        onClick={
          mode === "pomodoro" && timeLeft > 0
            ? togglePause
            : mode === "pomodoro" && timeLeft === 0
            ? startAgain
            : mode === "short"
            ? toggleShortPause
            : mode === "long"
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
            className="first-circle"
            cx="134.5"
            cy="134.5"
            r="124.5"
            strokeWidth="20"
            fill="none"
            // stroke="#272c5a"
            stroke="url(#gradient)"
            strokeDasharray={782.68}
            transform="rotate(-90, 134.5, 134.5)"
          ></circle>
          <circle
            className="second-circle"
            // onClick={changeOffset}
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
        <div className="top-[8.6rem] absolute left-[50%] transform -translate-x-1/2 flex flex-col items-center md:top-[12rem]">
          <h4
            className={`h-[8rem] text-[8rem] fon-bold leading-normal text-[#d7e0ff] md:text-[10rem] ${
              font === 1
                ? "tracking-[-4px] md:tracking-[-5px]"
                : font === 2
                ? "tracking-normal"
                : font === 3
                ? "tracking-[-15px] md:tracking-[-10px]"
                : ""
            }`}
          >
            {mode === "pomodoro"
              ? toDate(timeLeft)
              : mode === "short"
              ? shortToDate(shortTimeLeft)
              : mode === "long"
              ? longToDate(longTimeLeft)
              : ""}
          </h4>
          <span
            className={`pause ${
              timeLeft < Number(startTime) && mode === "pomodoro"
                ? "w-full ml-[15%]"
                : ""
            }`}
          >
            {(timeLeft < Number(startTime) * 60 &&
              timeLeft > 0 &&
              mode === "pomodoro") ||
            (shortTimeLeft < Number(shortStartTime) * 60 &&
              shortTimeLeft > 0 &&
              mode === "short") ||
            (longTimeLeft < Number(longStartTime) * 60 &&
              longTimeLeft > 0 &&
              mode === "long")
              ? "PAUSE"
              : (timeLeft === Number(startTime) * 60 && mode === "pomodoro") ||
                (shortTimeLeft === Number(shortStartTime) * 60 &&
                  mode === "short") ||
                (longTimeLeft === Number(longStartTime) * 60 && mode === "long")
              ? "START"
              : timeLeft === 0 && mode === "pomodoro"
              ? "RESTART"
              : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShowTimer;
