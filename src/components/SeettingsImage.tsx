import SettingsIcon from "/images/icon-settings.svg";
import { useGeneral } from "../contexts/MainContext";

const SettingsImage: React.FC = () => {
  const { setShowSettings } = useGeneral();

  return (
    <img
      src={SettingsIcon}
      alt="Settings"
      className="mt-[7.9rem] m-auto pb-[4.8rem] md:mt-[14.4rem] md:pb-[10.3rem]"
      onClick={() => setShowSettings(true)}
    />
  );
};

export default SettingsImage;
