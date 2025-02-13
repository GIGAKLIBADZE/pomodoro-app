import Cancel from "/images/icon-close.svg";

const Settings: React.FC = () => {
  return (
    <div className="h-full absolute top-0 left-0 for-opacity pt-[4.6rem] px-[2.4rem]">
      <div className="w-[32.7rem] h-[54.9rem] rounded-[15px] pt-[2.4rem] px-[2.4rem] bg-white m-auto">
        <div>
          <h2>Settings</h2>
          <img src={Cancel} alt="Cancel" />
        </div>
        <div></div>
        <h3>TIME (MINUTES)</h3>
        <div>
          <div>
            <label htmlFor="pomodoro">pomodoro</label>
            <input id="pomodoro" name="pomodoro" min="1" max="60" />
          </div>
          <div>
            <label htmlFor="short">short break</label>
            <input id="short" name="short" min="1" max="5" />
          </div>
          <div>
            <label htmlFor="long">long break</label>
            <input id="long" name="long" min="10" max="25" />
          </div>
        </div>
        <div></div>
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
      </div>
    </div>
  );
};

export default Settings;
