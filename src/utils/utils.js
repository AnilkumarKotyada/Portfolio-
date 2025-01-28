import FileExplorer from "../components/Applications/FileExplorer";
import Resume from "../components/Applications/Resume";
import Terminal from "../components/Applications/Terminal";
export const zIndices = { universalzIndex: 10 };
export const Application_constants = {
  TERMINAL: "TERMINAL",
  FINDER: "FINDER",
  BIN: "BIN",
  NOTES: "NOTES",
  RESUME: "RESUME",
};
export const applicationMapping = {
  [Application_constants.TERMINAL]: (containerRef, closeFn) => (
    <Terminal containerRef={containerRef} closeApplication={closeFn} />
  ),
  [Application_constants.FINDER]: (containerRef, closeFn) => (
    <FileExplorer containerRef={containerRef} closeApplication={closeFn} />
  ),
  [Application_constants.RESUME]: (containerRef, closeFn) => (
    <Resume containerRef={containerRef} closeApplication={closeFn} />
  ),
};

// console.log(applicationMapping["terminal"]())
