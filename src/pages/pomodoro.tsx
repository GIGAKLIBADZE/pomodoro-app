import React from "react";
import HeaderAndMenu from "../components/HeaderAndMenu";
import ShowTimer from "../components/ShowTimer";
import SettingsImage from "../components/SeettingsImage";

const Pomodoro: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#1e213f]">
      <HeaderAndMenu />
      <ShowTimer />
      <SettingsImage />
    </div>
  );
};

export default Pomodoro;
