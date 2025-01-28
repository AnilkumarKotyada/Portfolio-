import React, { useEffect } from "react";
import linkdinIcon from "../assests/linkedIn.png";
import chatGPTIcon from "../assests/chatgpt-icon.webp";
import fileIcon from "../assests/file.png";
import fullscreenIcon from "../assests/fullscreen.svg";
import { Application_constants } from "../utils/utils";

function DesktopApps({ openApplicationHandler }) {
  useEffect(() => {}, []);
  return (
    <div className="flex flex-col flex-wrap-reverse absolute top-0 right-0 p-3 z-1">
      <div className="m-6 flex flex-col items-center gap-1">
        <img
          loading="lazy"
          src={linkdinIcon}
          className="w-14 h-14"
          onDoubleClick={() => {
            window.open(
              "https://www.linkedin.com/in/naga-ravi-kumar-reddy-6bb0501b2/",
              "_blank"
            );
          }}
        />
        <span className="text-[#fff] text-xs font-bold">My Linkdin</span>
      </div>
      <div className="m-6 flex flex-col items-center gap-1">
        <img
          loading="lazy"
          src={chatGPTIcon}
          className="w-14 h-14"
          onDoubleClick={() => {
            window.open("https://chatgptclonefrontend.onrender.com/", "_blank");
          }}
        />
        <span className="text-[#fff] text-xs font-bold">
          ChatGPT Clone
          <br />
          (fork feature)
        </span>
      </div>
      <div className="m-6 flex flex-col items-center gap-1">
        <img
          loading="lazy"
          src={fileIcon}
          className="w-14 h-14"
          onDoubleClick={() => {
            openApplicationHandler(Application_constants.RESUME);
          }}
        />
        <span className="text-[#fff] text-xs font-medium">Resume.pdf</span>
      </div>
      <div className="m-6 flex flex-col items-center gap-1">
        <img
          src={fullscreenIcon}
          className="w-14 h-14"
          onDoubleClick={() => {
            const element = document.documentElement;
            if (element.requestFullscreen) {
              element.requestFullscreen();
            }
          }}
        />
        <span className="text-[#fff] text-xs font-bold">Go Full Screen</span>
      </div>
    </div>
  );
}

export default DesktopApps;
