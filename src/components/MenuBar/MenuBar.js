import React from "react";
import AppleLogo from "../../assests/apple-logo.svg";
import Date from "./MenuBarDate";

function MenuBar() {
  return (
    <div className="flex items-center justify-between px-4 text-[#fff] font-medium text-sm bg-[hsla(0,0%,47%,.4)] shadow-[0 8px 32px 0 hsla(0,0%,39%,.1)]">
      <div className="flex space-x-5">
        <img loading="lazy" className="w-6 h-6 mt-[-2px]" src={AppleLogo} />
        <span>Terminal</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>
      <div>
        <Date />
      </div>
    </div>
  );
}

export default MenuBar;
