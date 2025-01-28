import React from "react";
import DNDDemo from "../DNDDemo";
import ActionBar from "../ActionBar";
import { Application_constants } from "../../utils/utils";
import arrowDownIcon from "../../assests/arrow-down.svg";
import finderActionsIcon from "../../assests/finder-actions.png";
import airdropIcon from "../../assests/airdrop.png";
import applicationsIcon from "../../assests/applications.png";
import desktopIcon from "../../assests/desktop.png";
import documentsIcon from "../../assests/documents.png";
import downloadsIcon from "../../assests/downloads.png";

function FileExplorer({ containerRef, closeApplication }) {
  const getHeader = () => {
    return (
      <div className="flex items-center py-1 justify-between relative">
        <div className="pl-1 pr-2 bg-[#E0DEE4] absolute top-0 bottom-0 w-40 rounded-tl-md">
          <div className="mt-[15px] ml-[3px]">
            <ActionBar
              closeApplication={closeApplication}
              currentApplication={Application_constants.FINDER}
            />
          </div>
        </div>
        <div className="flex-grow pr-4 ml-40">
          <div className="flex items-center justify-between ml-4 w-full px-2 py-1 ">
            <div className="flex items-center justify-around">
              <img
                loading="lazy"
                src={arrowDownIcon}
                className="rotate-90 h-3 w-3 mr-3"
              />
              <img
                loading="lazy"
                src={arrowDownIcon}
                className="-rotate-90 h-3 w-3 mr-2"
              />
              <span className="text-sm">AirDrop</span>
            </div>
            <img
              loading="lazy"
              src={finderActionsIcon}
              className="w-2/4 pointer-events-none select-non"
            />
          </div>
        </div>
      </div>
    );
  };
  const getBody = () => {
    return (
      <div className="">
        <div className="FileNavBar bg-[#E0DEE4] pl-4 w-40 pb-36 rounded-b-lg pr-2">
          <span className="my-1 text-xs text-stone-400 font-bold">
            Favourites
          </span>
          <div className="mt-2 bg-[#ccc] rounded-lg p-1">
            <img
              loading="lazy"
              src={airdropIcon}
              className="inline-block h-5 w-5"
            />
            <span className="ml-2 text-sm">AirDrop</span>
          </div>
          <div className="mt-2">
            <img
              loading="lazy"
              src={applicationsIcon}
              className="inline-block h-5 w-5"
            />
            <span className="ml-2 text-sm">Applications</span>
          </div>
          <div className="mt-2">
            <img
              loading="lazy"
              src={desktopIcon}
              className="inline-block h-5 w-5"
            />
            <span className="ml-2 text-sm">Desktop</span>
          </div>
          <div className="mt-2">
            <img
              loading="lazy"
              src={documentsIcon}
              className="inline-block h-5 w-5"
            />
            <span className="ml-2 text-sm ">Documents</span>
          </div>
          <div className="mt-2">
            <img src={downloadsIcon} className="inline-block h-5 w-5" />
            <span className="ml-2 text-sm ">Downloads</span>
          </div>
          <span className="mt-5 text-xs text-stone-400 font-bold inline-block">
            Locations
          </span>
          <p className="mt-2 text-sm">iCloud Drive</p>
        </div>
        <div></div>
      </div>
    );
  };
  return (
    <DNDDemo
      headerPart={getHeader()}
      bodyPart={getBody()}
      containerProp={containerRef}
      initialTop={80}
      initialLeft={80}
    />
  );
}

export default FileExplorer;
