import React, { useEffect, useRef, useState } from "react";
import emoji from "../assests/userAnime.gif";
import PasswordLoader from "../components/PasswordLoader";
import { HOME_SCREEN } from "../constants/appConstants";

function LoginScreen({ setScreenType }) {
  const [loader, setLoader] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        setLoader(true);
        setTimeout(() => {
          setLoader(false);
          setScreenType(HOME_SCREEN);
        }, 2000);
      }
      e.preventDefault();
    };
    inputRef.current && inputRef.current.focus();
    inputRef.current &&
      inputRef.current.addEventListener("keydown", handleKeyDown);

    return () =>
      inputRef.current &&
      inputRef.current.removeEventListener("keydown", handleKeyDown);
  }, [loader]);

  return (
    <div className="bg-wallpaper2 bg-no-repeat h-[100vh] w-[100vw] bg-cover flex flex-col items-center justify-center">
      <div className="rounded-[50%] h-[115px] w-[115px] overflow-hidden bg-[white]">
        <img
          loading="lazy"
          src={emoji}
          className="scale-[1.7] translate-y-[24px] w-[100%] pointer-events-none"
        />
      </div>
      <h1 className="text-[white] text-2xl font-medium my-4">
        Naga Ravi Kumar
      </h1>
      {loader ? (
        <PasswordLoader />
      ) : (
        <div className="bg-[hsla(0,0%,100%,.3)] rounded-2xl ml-4">
          <input
            ref={inputRef}
            autoComplete="false"
            className="px-4 py-2 text-sm bg-transparent text-[#eee] placeholder:text-[#eee] font-bold focus:border-none border-0 focus:border-0 outline-none focus:outline-none"
            type="password"
            placeholder="Enter Password"
            defaultValue="password"
          />
        </div>
      )}
    </div>
  );
}

export default LoginScreen;
