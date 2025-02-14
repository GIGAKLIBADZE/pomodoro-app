import React from "react";
import HeaderAndMenu from "../components/HeaderAndMenu";
import ShowTimer from "../components/ShowTimer";
import SettingsImage from "../components/SeettingsImage";
import Settings from "../components/Settings";
import { useState } from "react";
import { useReducer } from "react";
import { reducer, initialState } from "../reducer";

const Pomodoro: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  return (
    <div className="bg-[#1e213f] relative">
      <HeaderAndMenu />
      <ShowTimer />
      <SettingsImage setShowSettings={setShowSettings} />
      {showSettings ? (
        <Settings
          setShowSettings={setShowSettings}
          state={state}
          dispatch={dispatch}
        />
      ) : null}
    </div>
  );
};

export default Pomodoro;
