import React from "react";

const HeaderAndMenu: React.FC = () => {
  const { color, mode, font } = state;

  return (
    <div
      className={`text-white ${
        font === 1
          ? "font-[KumbhSans]"
          : font === 2
          ? "font-[RobotoSlab]"
          : font === 3
          ? "font-[SpaceMono]"
          : ""
      }`}
    >
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
          onClick={() => dispatch({ type: "setPomodoro" })}
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
          onClick={() => dispatch({ type: "setShort" })}
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
          onClick={() => dispatch({ type: "setLong" })}
        >
          long break
        </button>
      </div>
    </div>
  );
};

export default HeaderAndMenu;
