import Cancel from "/images/icon-close.svg";
import Up from "/images/icon-arrow-up.svg";
import Down from "/images/icon-arrow-down.svg";
import { ChangeEvent, useState } from "react";
import { useGeneral } from "../contexts/MainContext";

const Settings: React.FC = () => {
  const {
    timerState,
    designState,
    timerDispatch,
    designDispatch,
    setShowSettings,
  } = useGeneral();
  const { startTime, shortStartTime, longStartTime } = timerState;
  const { font, color } = designState;

  const [tempTime, setTempTime] = useState<string | number>(startTime);
  const [tempShortTime, setTempShortTime] = useState<string | number>(
    shortStartTime
  );
  const [tempLongTime, setTempLongTime] = useState<string | number>(
    longStartTime
  );
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
      className="w-full h-full absolute top-0 left-0 for-opacity pt-[4.6rem] px-[2.4rem] md:pt-[26.7rem] md:px-[11.4rem] xl:pt-[11.5rem]"
    >
      <div className="settings-container">
        <div className="px-[2.4rem] flex justify-between items-center md:px-[4rem]">
          <h2 className="text-[2rem] font-bold text-[#161932] leading-normal md:text-[2.8rem]">
            Settings
          </h2>
          <img
            src={Cancel}
            alt="Cancel"
            className="w-[1.3rem] h-[1.3rem] opacity-[0.5] cursor-pointer"
            onClick={() => setShowSettings(false)}
          />
        </div>
        <div className="line"></div>
        <h3 className="sub-title">TIME (MINUTES)</h3>
        <div className="px-[2.4rem] mt-[1.8rem] flex flex-col gap-[0.8rem] md:px-[4rem] md:mt-[2.6rem] md:flex-row md:gap-[2rem]">
          <div className="parent-of-input">
            <label htmlFor="pomodoro" className="label-styles">
              pomodoro
            </label>
            <input
              id="pomodoro"
              name="pomodoro"
              className="input-styles"
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, "");
                if (value.length > 2) value = value.slice(0, 2);
                defineTime({
                  target: { value },
                } as ChangeEvent<HTMLInputElement>);
              }}
              value={tempTime}
            />
            <div className="arrows-container">
              <img
                src={Up}
                alt="Up"
                className="arrow-styles"
                onClick={() => setTempTime(Number(tempTime) + 1)}
              />
              <img
                src={Down}
                alt="Down"
                className="arrow-styles"
                onClick={() =>
                  Number(tempTime) > 0
                    ? setTempTime(Number(tempTime) - 1)
                    : null
                }
              />
            </div>
          </div>
          <div className="parent-of-input">
            <label htmlFor="short" className="label-styles">
              short break
            </label>
            <input
              id="short"
              name="short"
              className="input-styles"
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, "");
                if (value.length > 2) value = value.slice(0, 2);
                if (Number(value) > 15) value = "15";
                defineShortTime({
                  target: { value },
                } as ChangeEvent<HTMLInputElement>);
              }}
              value={tempShortTime}
            />
            <div className="arrows-container">
              <img
                src={Up}
                alt="Up"
                className="arrow-styles"
                onClick={() =>
                  Number(tempShortTime) < 15
                    ? setTempShortTime(Number(tempShortTime) + 1)
                    : null
                }
              />
              <img
                src={Down}
                alt="Down"
                className="arrow-styles"
                onClick={() =>
                  Number(tempShortTime) > 0
                    ? setTempShortTime(Number(tempShortTime) - 1)
                    : null
                }
              />
            </div>
          </div>
          <div className="parent-of-input">
            <label htmlFor="long" className="label-styles">
              long break
            </label>
            <input
              id="long"
              name="long"
              className="input-styles"
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, "");
                if (value.length > 2) value = value.slice(0, 2);
                if (Number(value) > 30) value = "30";
                defineLongTime({
                  target: { value },
                } as ChangeEvent<HTMLInputElement>);
              }}
              value={tempLongTime}
            />
            <div className="arrows-container">
              <img
                src={Up}
                alt="Up"
                className="arrow-styles"
                onClick={() =>
                  Number(tempLongTime) < 30
                    ? setTempLongTime(Number(tempLongTime) + 1)
                    : null
                }
              />
              <img
                src={Down}
                alt="Down"
                className="arrow-styles"
                onClick={() =>
                  Number(tempLongTime) > 0
                    ? setTempLongTime(Number(tempLongTime) - 1)
                    : null
                }
              />
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="md:flex md:items-baseline md:pr-[4rem] md:justify-between md:mt-[0.8rem]">
          <h3 className="sub-title md:mt-0">FONT</h3>
          <div className="fonts-and-colors-container">
            <div
              style={{ fontFamily: "Kumbh Sans" }}
              className={`font-container font-normal ${
                font === 1
                  ? "bg-[#161932] text-white"
                  : tempFont === 1
                  ? "arch"
                  : ""
              }`}
              onClick={kumbhSans}
            >
              Aa
            </div>
            <div
              style={{ fontFamily: "Roboto Slab" }}
              className={`font-container font-normal ${
                font === 2
                  ? "bg-[#161932] text-white"
                  : tempFont === 2
                  ? "arch"
                  : ""
              }`}
              onClick={robotoSlab}
            >
              Aa
            </div>
            <div
              style={{ fontFamily: "Space Mono" }}
              className={`font-container font-bold ${
                font === 3
                  ? "bg-[#161932] text-white"
                  : tempFont === 3
                  ? "arch"
                  : ""
              }`}
              onClick={spaceMono}
            >
              Aa
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="md:flex md:pr-[4rem] md:justify-between md:mt-[0.8rem]">
          <h3 className="sub-title mt-[1.6rem] md:mt-[2.8rem]">COLOR</h3>
          <div className="fonts-and-colors-container">
            <div
              className={`color-container bg-[#f87070] ${
                tempColor === "orange" ? "arch" : ""
              }`}
              onClick={toOrange}
            >
              <small
                className={`check-unicode  ${
                  color === "orange" ? "block" : "hidden"
                }`}
              >
                &#10004;
              </small>
            </div>
            <div
              className={`color-container bg-[#70f3f8] ${
                tempColor === "blue" ? "arch" : ""
              }`}
              onClick={toBlue}
            >
              <small
                className={`check-unicode  ${
                  color === "blue" ? "block" : "hidden"
                }`}
              >
                &#10004;
              </small>
            </div>
            <div
              className={`color-container bg-[#d881f8] ${
                tempColor === "purple" ? "arch" : ""
              }`}
              onClick={toPurple}
            >
              <small
                className={`check-unicode ${
                  color === "purple" ? "block" : "hidden"
                }`}
              >
                &#10004;
              </small>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center relative for-added-button"
        onClick={() => {
          setShowSettings(false);
          timerDispatch({ type: "setTime", payload: tempTime.toString() });
          timerDispatch({
            type: "setShortTime",
            payload: tempShortTime.toString(),
          });
          timerDispatch({
            type: "setLongTime",
            payload: tempLongTime.toString(),
          });
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
          timerDispatch({
            type: "handlingPause",
          });
        }}
      >
        <button className="button-styles">Apply</button>
        <div className="second-apply added-button">Apply</div>
      </div>
    </div>
  );
};

export default Settings;
