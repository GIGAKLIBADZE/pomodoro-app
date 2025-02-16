import React from "react";

const HeaderAndMenu: React.FC<{
  state: {
    startTime: number;
    pause: boolean;
    color: string;
  };
  dispatch: React.ActionDispatch<
    [
      action: {
        type: string;
        payload?: number;
        theme: string;
      }
    ]
  >;
}> = ({ state, dispatch }) => {
  const { color } = state;

  return (
    <div className="font-[KumbhSans] text-white">
      <h1 className="text-[2.4rem] font-bold leading-normal text-center text-[#d7e0ff] pt-[3.2rem]">
        pomodoro
      </h1>
      <div className="menu">
        <button
          className={`menu-button menu-text ${
            color === "orange"
              ? "bg-[#f87070]"
              : color === "blue"
              ? "bg-[#70f3f8]"
              : "bg-[#d881f8]"
          }`}
        >
          pomodoro
        </button>
        <button
          className={`menu-button menu-text ${
            color === "orange"
              ? "bg-[#f87070]"
              : color === "blue"
              ? "bg-[#70f3f8]"
              : "bg-[#d881f8]"
          }`}
        >
          short break
        </button>
        <button
          className={`menu-button menu-text ${
            color === "orange"
              ? "bg-[#f87070]"
              : color === "blue"
              ? "bg-[#70f3f8]"
              : "bg-[#d881f8]"
          }`}
        >
          long break
        </button>
      </div>
    </div>
  );
};

export default HeaderAndMenu;
