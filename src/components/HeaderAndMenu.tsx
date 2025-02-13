import React from "react";

const HeaderAndMenu: React.FC = () => {
  return (
    <div className="font-[KumbhSans] text-white">
      <h1 className="text-[2.4rem] font-bold leading-normal text-center text-[#d7e0ff] pt-[3.2rem]">
        pomodoro
      </h1>
      <div className="menu">
        <button className="menu-button menu-text">pomodoro</button>
        <button className="menu-button menu-text">short break</button>
        <button className="menu-button menu-text">long break</button>
      </div>
    </div>
  );
};

export default HeaderAndMenu;
