import React, { useState } from "react";
import notesIcon from "../assests/notes.svg";
import termicalIcon from "../assests/terminal.png";
import binIcon from "../assests/bin.png";
import finderIcon from "../assests/finder.svg";
import { Application_constants } from "../utils/utils";

function Dock({ openApplicationHandler, applicationsOpened }) {
  return (
    <div className="absolute z-[100000] py-3 px-4 bottom-2  left-1/2 -translate-x-1/2 flex gap-x-3 rounded-2xl items-center backdrop-blur-[4px] bg-[rgba(224,222,228,.7)] border border-solid-[hsla(0,0%,100%,.2)] shadow-[0_8px_32px_0_hsla(0,0%,86%,.6)]">
      <div className="flex flex-col justify-center relative">
        <img
          loading="lazy"
          src={finderIcon}
          className="h-9 w-9 hover:scale-110"
          onClick={() => openApplicationHandler(Application_constants.FINDER)}
        />
        {applicationsOpened.includes(Application_constants.FINDER) && (
          <span className="inline-block h-1 w-1 bg-[black] rounded-full absolute -bottom-[9px] left-1/2 -translate-x-1/2"></span>
        )}
      </div>
      <div className="flex flex-col justify-center relative">
        <img
          loading="lazy"
          src={termicalIcon}
          className="h-10 w-10 hover:scale-110"
          onClick={() => openApplicationHandler(Application_constants.TERMINAL)}
        />
        {applicationsOpened.includes(Application_constants.TERMINAL) && (
          <span className="inline-block h-1 w-1 bg-[black] rounded-full absolute -bottom-[7px] left-1/2 -translate-x-1/2"></span>
        )}
      </div>
      <span className="w-px mx-1 py-4 h-3/4 bg-[#666]"></span>
      <div className="flex flex-col justify-center relative">
        <img
          loading="lazy"
          src={notesIcon}
          className="h-9 w-9 hover:scale-110"
          // onClick={() => openApplicationHandler(Application_constants.NOTES)}
        />
        {applicationsOpened.includes(Application_constants.NOTES) && (
          <span className="inline-block h-1 w-1 bg-[black] rounded-full absolute -bottom-2 left-1/2 -translate-x-1/2"></span>
        )}
      </div>
      <span className="w-px mx-1 py-4 h-3/4 bg-[#666]"></span>
      <div className="flex flex-col justify-center relative">
        <img
          loading="lazy"
          src={binIcon}
          className="h-10 w-10 hover:scale-110"
          // onClick={() => openApplicationHandler(Application_constants.BIN)}
        />
        {applicationsOpened.includes(Application_constants.BIN) && (
          <span className="inline-block h-1 w-1 bg-[black] rounded-full absolute -bottom-2 left-1/2 -translate-x-1/2"></span>
        )}
      </div>
    </div>
  );
}

export default Dock;
