import React, { useEffect, useRef, useState } from "react";
import MenuBar from "../components/MenuBar/MenuBar";
import Terminal from "../components/Applications/Terminal";
import FileExplorer from "../components/Applications/FileExplorer";
import Dock from "../components/Dock";
import { Application_constants, applicationMapping } from "../utils/utils";
import DesktopApps from "../components/DesktopApps";

function Home() {
  const containerRef = useRef(null);
  const [loader, setLoader] = useState(true);
  const [applicationsOpened, setApplicationsOpened] = useState([
    Application_constants.RESUME,
  ]);
  const openApplicationHandler = (applicationName) => {
    if (applicationsOpened.includes(applicationName)) return;
    setApplicationsOpened((prevState) => [...prevState, applicationName]);
  };
  const closeApplicationHandler = (applicationName) => {
    if (!applicationsOpened.includes(applicationName)) return;
    setApplicationsOpened((prevState) =>
      prevState.filter((appItem) => appItem !== applicationName)
    );
  };
  useEffect(() => {
    setLoader(false);
  }, []);
  return (
    <div className="bg-wallpaper2 bg-no-repeat h-[100vh] w-[100vw] bg-cover bg-[black]">
      <MenuBar />
      <div
        className={`NotesTab containerz w-[100%] relative  overflow-hidden`}
        style={{ height: `calc(100vh - 22px)` }}
        ref={containerRef}
      >
        {!loader &&
          applicationsOpened.map((application) => {
            return (
              <div key={Application_constants[application]}>
                {applicationMapping[application] &&
                  applicationMapping[application](
                    containerRef,
                    closeApplicationHandler
                  )}
              </div>
            );
          })}
        <DesktopApps openApplicationHandler={openApplicationHandler} />
        <Dock
          openApplicationHandler={openApplicationHandler}
          applicationsOpened={applicationsOpened}
        />
      </div>
    </div>
  );
}

export default Home;
