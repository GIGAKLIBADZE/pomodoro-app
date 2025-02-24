import SettingsIcon from "/images/icon-settings.svg";
import { useGeneral } from "../contexts/MainContext";

const SettingsImage: React.FC = () => {
  const { setShowSettings } = useGeneral();

  return (
    <img
      src={SettingsIcon}
      alt="Settings"
      className="settings-img"
      onClick={() => setShowSettings(true)}
    />
  );
};

export default SettingsImage;
