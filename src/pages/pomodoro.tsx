import React from "react";
import HeaderAndMenu from "../components/HeaderAndMenu";
import ShowTimer from "../components/ShowTimer";
import SettingsImage from "../components/SeettingsImage";
import Settings from "../components/Settings";
import { useState } from "react";

const Pomodoro: React.FC = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  return (
    <div className="bg-[#1e213f] relative">
      <HeaderAndMenu />
      <ShowTimer />
      <SettingsImage setShowSettings={setShowSettings} />
      {showSettings ? <Settings setShowSettings={setShowSettings} /> : null}
    </div>
  );
};

export default Pomodoro;
