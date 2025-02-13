import React from "react";
import HeaderAndMenu from "../components/HeaderAndMenu";
import ShowTimer from "../components/ShowTimer";
import SettingsImage from "../components/SeettingsImage";
import Settings from "../components/Settings";

const Pomodoro: React.FC = () => {
  return (
    <div className="bg-[#1e213f] relative">
      <HeaderAndMenu />
      <ShowTimer />
      <SettingsImage />
      <Settings />
    </div>
  );
};

export default Pomodoro;
