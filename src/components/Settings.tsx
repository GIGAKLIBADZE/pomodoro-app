import Cancel from "/images/icon-close.svg";
import Up from "/images/icon-arrow-up.svg";
import Down from "/images/icon-arrow-down.svg";
import { ChangeEvent, useState } from "react";
import { useGeneral } from "../contexts/MainContext";

interface SettingsProps {
  setApply: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings: React.FC<SettingsProps> = ({ setApply }) => {
  const {
    timerState,
    designState,
    timerDispatch,
    designDispatch,
    setShowSettings,
  } = useGeneral();
  const { startTime, shortStartTime, longStartTime } = timerState;
  const { font, color } = designState;

  const [temptime, setTempTime] = useState<string>(startTime);
  const [tempShortTime, setTempShortTime] = useState<string>(shortStartTime);
  const [tempLongTime, setTempLongTime] = useState<string>(longStartTime);
  const [tempFont, setTempFont] = useState<number>(font);
  const [tempColor, setTempColor] = useState<string>(color);

  function defineTime(event: ChangeEvent<HTMLInputElement>) {
    setTempTime(event.target.value);
  }

  function defineShortTime(event: ChangeEvent<HTMLInputElement>) {
    setTempShortTime(event.target.value);
  }

  function defineLongTime(event: ChangeEvent<HTMLInputElement>) {
    setTempLongTime(event.target.value);
  }

  function kumbhSans() {
    setTempFont(1);
  }

  function robotoSlab() {
    setTempFont(2);
  }

  function spaceMono() {
    setTempFont(3);
  }

  function toOrange() {
    setTempColor("orange");
  }

  function toBlue() {
    setTempColor("blue");
  }

  function toPurple() {
    setTempColor("purple");
  }

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
      className="h-full absolute top-0 left-0 for-opacity pt-[4.6rem] px-[2.4rem] font-[KumbhSans]"
    >
      <div className="w-[32.7rem] rounded-[15px] pt-[2.4rem] pb-[5.9rem] bg-white m-auto">
        <div className="px-[2.4rem] flex justify-between items-center">
          <h2 className="text-[2rem] font-bold text-[#161932] leading-normal">
            Settings
          </h2>
          <img
            src={Cancel}
            alt="Cancel"
            className="w-[1.3rem] h-[1.3rem] opacity-[0.5]"
            onClick={() => setShowSettings(false)}
          />
        </div>
        <div className="line"></div>
        <h3 className="sub-title">TIME (MINUTES)</h3>
        <div className="px-[2.4rem] mt-[1.8rem] flex flex-col gap-[0.8rem]">
          <div className="parent-of-input">
            <label htmlFor="pomodoro" className="label-styles">
              pomodoro
            </label>
            <input
              id="pomodoro"
              name="pomodoro"
              min="1"
              max="60"
              className="input-styles"
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, "");
                if (value.length > 2) value = value.slice(0, 2);
                defineTime({
                  target: { value },
                } as ChangeEvent<HTMLInputElement>);
              }}
              value={temptime}
            />
            <div className="arrows-container">
              <img src={Up} alt="Up" className="arrow-styles" />
              <img src={Down} alt="Down" className="arrow-styles" />
            </div>
          </div>
          <div className="parent-of-input">
            <label htmlFor="short" className="label-styles">
              short break
            </label>
            <input
              id="short"
              name="short"
              min="1"
              max="5"
              className="input-styles"
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, "");
                if (value.length > 2) value = value.slice(0, 2);
                defineShortTime({
                  target: { value },
                } as ChangeEvent<HTMLInputElement>);
              }}
              value={tempShortTime}
            />
            <div className="arrows-container">
              <img src={Up} alt="Up" className="arrow-styles" />
              <img src={Down} alt="Down" className="arrow-styles" />
            </div>
          </div>
          <div className="parent-of-input">
            <label htmlFor="long" className="label-styles">
              long break
            </label>
            <input
              id="long"
              name="long"
              min="10"
              max="25"
              className="input-styles"
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, "");
                if (value.length > 2) value = value.slice(0, 2);
                defineLongTime({
                  target: { value },
                } as ChangeEvent<HTMLInputElement>);
              }}
              value={tempLongTime}
            />
            <div className="arrows-container">
              <img src={Up} alt="Up" className="arrow-styles" />
              <img src={Down} alt="Down" className="arrow-styles" />
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div>
          <h3 className="sub-title">FONT</h3>
          <div className="fonts-and-colors-container">
            <div
              style={{ fontFamily: "Kumbh Sans" }}
              className="font-container font-normal"
              onClick={kumbhSans}
            >
              Aa
            </div>
            <div
              style={{ fontFamily: "Roboto Slab" }}
              className="font-container font-normal"
              onClick={robotoSlab}
            >
              Aa
            </div>
            <div
              style={{ fontFamily: "Space Mono" }}
              className="font-container font-bold"
              onClick={spaceMono}
            >
              Aa
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div>
          <h3 className="sub-title mt-[1.6rem]">COLOR</h3>
          <div className="fonts-and-colors-container">
            <div
              className="color-container bg-[#f87070]"
              onClick={toOrange}
            ></div>
            <div
              className="color-container bg-[#70f3f8]"
              onClick={toBlue}
            ></div>
            <div
              className="color-container bg-[#d881f8]"
              onClick={toPurple}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative">
        <button
          className="button-styles absolute top-[-2.65rem]"
          onClick={() => {
            setShowSettings(false);
            setApply(true);
            timerDispatch({ type: "setTime", payload: temptime });
            timerDispatch({ type: "setShortTime", payload: tempShortTime });
            timerDispatch({ type: "setLongTime", payload: tempLongTime });
            designDispatch({
              type:
                tempFont === 1
                  ? "setKumbhSans"
                  : tempFont === 2
                  ? "setRobotoSlab"
                  : tempFont === 3
                  ? "setSpaceMono"
                  : "",
            });
            designDispatch({
              type:
                tempColor === "orange"
                  ? "toOrange"
                  : tempColor === "blue"
                  ? "toBlue"
                  : tempColor === "purple"
                  ? "toPurple"
                  : "",
            });
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Settings;
