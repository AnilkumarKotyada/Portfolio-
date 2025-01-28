import React from "react";
import DNDDemo from "../DNDDemo";
import terminalIcon from "../../assests/terminal.png";
import LinkdinIcon from "../../assests/Linkdin.svg";
import EmailIcon from "../../assests/Email.svg";
import whatsupIcon from "../../assests/Whatsup.svg";
import ActionBar from "../ActionBar";
import { Application_constants } from "../../utils/utils";

function Terminal({ containerRef, closeApplication }) {
  const getHeader = () => {
    return (
      <div className="flex items-center">
        <ActionBar
          closeApplication={closeApplication}
          currentApplication={Application_constants.TERMINAL}
        />
        <div className="mx-auto text-sm font-medium px-2 py-1">
          <img
            loading="lazy"
            className="h-5 w-5 inline-block mr-1 align-middle"
            src={terminalIcon}
          />
          <span className="inline-block align-middle">RaviKumar - - zsh</span>
        </div>
      </div>
    );
  };
  const getBody = () => {
    let formatter = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    let formattedDate = formatter.format(new Date()).replace(/,/g, "");
    return (
      <div className="p-2 h-[500px]">
        <span className="font-mono text-[14px] font-medium inline-block mb-3">
          Last login: {formattedDate} on ttys011
        </span>
        <p>
          <span className="mr-2 inline-block">&lt;=====</span>
          <span className="font-semibold text-xl font-mono underline">
            Contact me on
          </span>
          <span className="ml-2 inline-block">=====&gt;</span>
        </p>
        <div className="flex flex-col gap-2 mt-3">
          <div className="font-mono ml-3">
            <img
              loading="lazy"
              src={LinkdinIcon}
              className="inline-block mr-3"
            />
            <span>-&gt; </span>
            <a
              href="https://www.linkedin.com/in/naga-ravi-kumar-reddy-6bb0501b2/"
              className="text-xs"
            >
              www.linkedin.com/in/naga-ravi-kumar-reddy-6bb0501b2
            </a>
          </div>
          <div className="font-mono ml-3">
            <img loading="lazy" src={EmailIcon} className="inline-block mr-3" />
            <span>-&gt; </span>
            <a href="mailto:reddinagaravikumar09@gmail.com" className="text-xs">
              reddinagaravikumar09@gmail.com
            </a>
          </div>
          <div className="font-mono ml-3">
            <img
              loading="lazy"
              src={whatsupIcon}
              className="inline-block mr-3"
            />
            <span>-&gt; </span>
            <a href="#" className="text-xs">
              +91-6309***544
            </a>
          </div>
          <div className="">
            <div className="text-xs font-mono mt-7 flex items-center justify-between">
              <p className="w-[220px]">Ravi@Reddi-MacBook ~ %</p>
              <input
                type="text"
                placeholder="Enter help for commands..."
                className="w-full focus:border-none border-0 focus:border-0 outline-none focus:outline-none inline"
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <DNDDemo
      headerPart={getHeader()}
      bodyPart={getBody()}
      containerProp={containerRef}
      initialTop={20}
      initialLeft={20}
    />
  );
}

export default Terminal;
