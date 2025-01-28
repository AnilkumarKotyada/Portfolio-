import React from "react";
import powerIcon from "../assests/powerIcon copy.svg";

function PowerButton({ startApplication }) {
  return (
    <div className="bg-[black] w-[100vw] h-[100vh] flex items-center justify-center">
      <div
        className="cursor-pointer text-center hover:scale-x-110 hover:scale-y-110 transition ease-in-out"
        onClick={startApplication}
      >
        <img loading="lazy" className="w-32 h-32 mb-4" src={powerIcon} />
        <p className="text-[white] font-medium">Click to load</p>
      </div>
    </div>
  );
}

export default PowerButton;
