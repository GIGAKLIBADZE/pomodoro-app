import React from "react";
import HeaderAndMenu from "../components/HeaderAndMenu";
import ShowTimer from "../components/ShowTimer";

const Pomodoro: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#1e213f]">
      <HeaderAndMenu />
      <ShowTimer />
    </div>
  );
};

export default Pomodoro;
