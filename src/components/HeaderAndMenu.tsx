import React from "react";
import { useGeneral } from "../contexts/MainContext";

const HeaderAndMenu: React.FC = () => {
  const { designDispatch, designState } = useGeneral();
  const { color, mode, font } = designState;

  return (
    <div className={`text-white `}>
      <h1 className="text-[2.4rem] font-bold leading-normal text-center text-[#d7e0ff] pt-[3.2rem]">
        pomodoro
      </h1>
      <div className="menu">
        <button
          className={`menu-button menu-text ${
            color === "orange" && mode === "pomodoro"
              ? "bg-[#f87070]"
              : color === "blue" && mode === "pomodoro"
              ? "bg-[#70f3f8]"
              : color === "purple" && mode === "pomodoro"
              ? "bg-[#d881f8]"
              : "bg-none"
          } ${mode === "pomodoro" ? "text-[#1e213f]" : "text-[#d7e0ff]"}`}
          onClick={() => designDispatch({ type: "setPomodoro" })}
        >
          pomodoro
        </button>
        <button
          className={`menu-button menu-text ${
            color === "orange" && mode === "short"
              ? "bg-[#f87070]"
              : color === "blue" && mode === "short"
              ? "bg-[#70f3f8]"
              : color === "purple" && mode === "short"
              ? "bg-[#d881f8]"
              : "bg-none"
          } ${mode === "short" ? "text-[#1e213f]" : "text-[#d7e0ff]"}`}
          onClick={() => designDispatch({ type: "setShort" })}
        >
          short break
        </button>
        <button
          className={`menu-button menu-text ${
            color === "orange" && mode === "long"
              ? "bg-[#f87070]"
              : color === "blue" && mode === "long"
              ? "bg-[#70f3f8]"
              : color === "purple" && mode === "long"
              ? "bg-[#d881f8]"
              : "bg-none"
          } ${mode === "long" ? "text-[#1e213f]" : "text-[#d7e0ff]"}`}
          onClick={() => designDispatch({ type: "setLong" })}
        >
          long break
        </button>
      </div>
    </div>
  );
};

export default HeaderAndMenu;
