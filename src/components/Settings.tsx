import Cancel from "/images/icon-close.svg";
import Up from "/images/icon-arrow-up.svg";
import Down from "/images/icon-arrow-down.svg";

const Settings: React.FC = () => {
  return (
    <div className="h-full absolute top-0 left-0 for-opacity pt-[4.6rem] px-[2.4rem] font-[KumbhSans]">
      <div className="w-[32.7rem] h-[54.9rem] rounded-[15px] pt-[2.4rem] bg-white m-auto">
        <div className="px-[2.4rem] flex justify-between items-center">
          <h2 className="text-[2rem] font-bold text-[#161932] leading-normal">
            Settings
          </h2>
          <img
            src={Cancel}
            alt="Cancel"
            className="w-[1.3rem] h-[1.3rem] opacity-[0.5] "
          />
        </div>
        <div className="line"></div>
        <h3 className="text-[1.1rem] font-bold tracking-[4.23px] text-center text-[#161932 mt-[2.4rem]">
          TIME (MINUTES)
        </h3>
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
            />
            <div className="arrows-container">
              <img src={Up} alt="Up" className="arrow-styles" />
              <img src={Down} alt="Down" className="arrow-styles" />
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div>
          <h3>FONT</h3>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <h3>COLOR</h3>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default Settings;
