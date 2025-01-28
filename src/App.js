import { useState } from "react";
import "./App.css";
import AppleLoader from "./Screens/AppleLogoScreen";
import PowerButton from "./components/PowerButton";
import {
  POWER_BUTTON_SCREEN,
  BOOTUP_SCREEN,
  LOGIN_SCREEN,
  HOME_SCREEN,
} from "./constants/appConstants";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";

function App() {
  const [screenType, setScreenType] = useState(POWER_BUTTON_SCREEN);

  const startApplication = () => {
    setScreenType(BOOTUP_SCREEN);
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  };

  return (
    <div className="App">
      {screenType === POWER_BUTTON_SCREEN && (
        <PowerButton startApplication={startApplication} />
      )}
      {screenType === BOOTUP_SCREEN && (
        <AppleLoader setScreenType={setScreenType} />
      )}
      {screenType === LOGIN_SCREEN && (
        <LoginScreen setScreenType={setScreenType} />
      )}
      {screenType === HOME_SCREEN && <Home />}
    </div>
  );
}

export default App;
