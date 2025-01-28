import React from "react";
import ActionBar from "../ActionBar";
import { Application_constants } from "../../utils/utils";
import ResumeIcon from "../../assests/Resume.svg";
import DNDDemo from "../DNDDemo";

function Resume({ containerRef, closeApplication }) {
  const getHeader = () => {
    return (
      <div className="flex items-center">
        <ActionBar
          closeApplication={closeApplication}
          currentApplication={Application_constants.RESUME}
        />
        <div className="mx-auto text-sm font-medium px-2 py-1">
          <img
            loading="lazy"
            className="h-5 w-5 inline-block mr-1 align-middle"
            src={ResumeIcon}
          />
          <span className="inline-block align-middle">RaviKumar - - zsh</span>
        </div>
      </div>
    );
  };
  const getBody = () => {
    return (
      <object
        data="https://white-chrissie-34.tiiny.site/"
        width="800"
        height="500"
      ></object>
    );
  };
  return (
    <DNDDemo
      headerPart={getHeader()}
      bodyPart={getBody()}
      containerProp={containerRef}
      initialTop={30}
      initialLeft={60}
    />
  );
}

export default Resume;
