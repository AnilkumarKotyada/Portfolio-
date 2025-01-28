import React from "react";
import crossIcon from "../assests/cross.png";
import minimizeIcon from "../assests/minimize.png";
import expandIcon from "../assests/expand.png";
import { Application_constants } from "../utils/utils";

function ActionBar({ closeApplication, currentApplication }) {
  return (
    <div className="group flex space-x-2 ml-2">
      <button
        className="h-3 w-3 bg-[#ff3b2f] rounded-full cursor-default"
        onClick={() => closeApplication(currentApplication)}
      >
        <img
          loading="lazy"
          src={crossIcon}
          className="p-[2px] max-w-full invisible group-hover:visible"
        />
      </button>
      <button className="h-3 w-3 bg-[#ffcc01] rounded-full cursor-default">
        <img
          loading="lazy"
          src={minimizeIcon}
          className="p-[2px] max-w-full invisible group-hover:visible"
        />
      </button>
      <button className="h-3 w-3 bg-[#34c759] rounded-full cursor-default">
        <img
          loading="lazy"
          src={expandIcon}
          className="p-[3px] max-w-full invisible group-hover:visible"
        />
      </button>
    </div>
  );
}

export default ActionBar;
