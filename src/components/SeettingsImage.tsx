import SettingsIcon from "/images/icon-settings.svg";

const SettingsImage: React.FC<{
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowSettings }) => {
  return (
    <img
      src={SettingsIcon}
      alt="Settings"
      className="mt-[7.9rem] m-auto pb-[4.8rem]"
      onClick={() => setShowSettings(true)}
    />
  );
};

export default SettingsImage;
