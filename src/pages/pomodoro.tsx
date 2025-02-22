import React, { useState } from "react";
import HeaderAndMenu from "../components/HeaderAndMenu";
import ShowTimer from "../components/ShowTimer";
import SettingsImage from "../components/SeettingsImage";
import Settings from "../components/Settings";
import { useGeneral } from "../contexts/MainContext";

const Pomodoro: React.FC = () => {
  const { showSettings, designState } = useGeneral();
  const { font } = designState;
  const [apply, setApply] = useState<boolean>(false);

  return (
    <div
      style={{
        fontFamily:
          font === 1
            ? "Kumbh Sans"
            : font === 2
            ? "Roboto Slab"
            : font === 3
            ? "Space Mono"
            : "",
      }}
      className="bg-[#1e213f] relative min-h-screen"
    >
      <HeaderAndMenu />
      <ShowTimer apply={apply} />
      <SettingsImage />
      {showSettings ? <Settings setApply={setApply} /> : null}
    </div>
  );
};

export default Pomodoro;
