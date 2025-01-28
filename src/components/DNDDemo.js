import React, { useRef, useEffect } from "react";
import { zIndices } from "../utils/utils";

function DNDDemo({
  headerPart,
  bodyPart,
  containerProp,
  initialTop,
  initialLeft,
}) {
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  const headerPartRef = useRef(null);
  const isClicked = useRef(false);

  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: initialLeft,
    lastY: initialTop,
  });

  useEffect(() => {
    if (!boxRef.current || !containerProp.current || !headerPartRef.current)
      return;

    const box = boxRef.current;
    const container = containerProp.current;

    const onMouseDown = (e) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = (e) => {
      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      console.log(e.clientY, coords.current.startY, coords.current.lastY);
      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;
      console.log("nextY", nextY);
      const updatedY = Math.max(nextY, 0);
      box.style.top = `${updatedY}px`;
      console.log(updatedY, `${updatedY}px`);
      box.style.left = `${nextX}px`;
      console.log(`${Math.max(nextY, 0)}px`, box.style.top);
    };

    headerPartRef.current?.addEventListener("mousedown", onMouseDown);
    headerPartRef.current?.addEventListener("mouseup", onMouseUp);
    container?.addEventListener("mousemove", onMouseMove);
    container?.addEventListener("mouseleave", onMouseUp);

    const cleanup = () => {
      headerPartRef.current?.removeEventListener("mousedown", onMouseDown);
      headerPartRef.current?.removeEventListener("mouseup", onMouseUp);
      container?.removeEventListener("mousemove", onMouseMove);
      container?.removeEventListener("mouseleave", onMouseUp);
    };

    return cleanup;
  }, []);

  const increasezIndex = (e) => {
    e.stopPropagation();
    console.log("clicked2");
    zIndices.universalzIndex++;
    boxRef.current.style.zIndex = zIndices.universalzIndex;
  };

  return (
    <div
      className="boxz absolute shadow-2xl shadow-black"
      ref={boxRef}
      style={{
        top: `${initialTop}px`,
        left: `${initialLeft}px`,
        zIndex: `${zIndices.universalzIndex}`,
      }}
      onClick={increasezIndex}
      onMouseDown={increasezIndex}
    >
      <div
        className="w-[800px] bg-[#f0f0f0] rounded-t-xl headerPart"
        ref={headerPartRef}
        onClick={() => {
          console.log("cliked");
        }}
      >
        {headerPart}
      </div>
      <div
        className="bodyPart w-[800px] rounded-b-xl bg-[#FFFF]"
        onClick={() => {}}
      >
        {bodyPart}
      </div>
    </div>
  );
}

export default DNDDemo;
