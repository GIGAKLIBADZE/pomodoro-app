import Cancel from "/images/icon-close.svg";
import Up from "/images/icon-arrow-up.svg";
import Down from "/images/icon-arrow-down.svg";
import { ChangeEvent } from "react";
import { useGeneral } from "../contexts/MainContext";

const Settings: React.FC = () => {
  const {
    timerState,
    designState,
    timerDispatch,
    designDispatch,
    setShowSettings,
  } = useGeneral();
  const { startTime, shortStartTime } = timerState;
  const { font } = designState;

  function defineTime(event: ChangeEvent<HTMLInputElement>) {
    timerDispatch({
      type: "setTime",
      payload: event.target.value,
    });
  }

  function defineShortTime(event: ChangeEvent<HTMLInputElement>) {
    timerDispatch({
      type: "setShortTime",
      payload: event.target.value,
    });
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
              // type="number"
              id="pomodoro"
              name="pomodoro"
              min="1"
              max="60"
              className="input-styles"
              onChange={defineTime}
              value={startTime}
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
              // type="number"
              id="short"
              name="short"
              min="1"
              max="5"
              className="input-styles"
              onChange={defineShortTime}
              value={shortStartTime}
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
              // type="number"
              id="long"
              name="long"
              min="10"
              max="25"
              className="input-styles"
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
              className="font-container font-[KumbhSans] font-normal"
              onClick={() => designDispatch({ type: "setKumbhSans" })}
            >
              Aa
            </div>
            <div
              className="font-container font-[RobotoSlab] font-normal"
              onClick={() => designDispatch({ type: "setRobotoSlab" })}
            >
              Aa
            </div>
            <div
              className="font-container font-[SpaceMono] font-bold"
              onClick={() => designDispatch({ type: "setSpaceMono" })}
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
              onClick={() => {
                designDispatch({
                  type: "toOrange",
                });
              }}
            ></div>
            <div
              className="color-container bg-[#70f3f8]"
              onClick={() => {
                designDispatch({
                  type: "toBlue",
                });
              }}
            ></div>
            <div
              className="color-container bg-[#d881f8]"
              onClick={() => {
                designDispatch({
                  type: "toPurple",
                });
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative">
        <button
          className="button-styles absolute top-[-2.65rem]"
          onClick={() => setShowSettings(false)}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Settings;
