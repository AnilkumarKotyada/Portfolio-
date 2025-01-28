import { useEffect, useState } from "react";
import appleIcon from "./assests/apple-logo.svg";
import audioFile from "./assests/boot-audio.mp3";

function AppleLoader() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const timerID = setTimeout(() => {
      setLoader(true);
    }, 1000);
    return () => clearTimeout(timerID);
  }, []);

  if (loader) {
    const audio = new Audio(audioFile);
    audio.volume = 0.2;
    audio.play();
  }
  return (
    <div className="bg-[black] h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="w-[320px] h-[228px] text-center">
        <img
          className="w-36 h-36 mb-20 inline"
          src={appleIcon}
          alt="appleIcon"
          loading="lazy"
        />
        {loader && (
          <>
            <div className="w-80 h-1 rounded-lg bg-[gray]">
              <div className="w-[0px] h-[90%] rounded-lg bg-[white] animate-widthIncrement"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AppleLoader;
