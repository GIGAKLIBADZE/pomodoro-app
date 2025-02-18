import React from "react";
import HeaderAndMenu from "../components/HeaderAndMenu";
import ShowTimer from "../components/ShowTimer";
import SettingsImage from "../components/SeettingsImage";
import Settings from "../components/Settings";
import { useGeneral } from "../contexts/MainContext";

const Pomodoro: React.FC = () => {
  const { showSettings } = useGeneral();
  return (
    <div className="bg-[#1e213f] relative">
      <HeaderAndMenu />
      <ShowTimer />
      <SettingsImage />
      {showSettings ? <Settings /> : null}
    </div>
  );
};

export default Pomodoro;
