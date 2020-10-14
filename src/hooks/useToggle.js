import { useState, useCallback } from "react";

const useToggle = currentState => {
  const [visble, setVisible] = useState(currentState);
  return [visble, useCallback(() => setVisible(isShowing => !isShowing), [])];
};

export default useToggle;

  // useage:
  // applies a toggle
  //
  // const [isVisble, toggle] = useToggle(false);
  // 
  // <button onClick={toggle}>{isVisble ? "Close" : "Open"}</button>
  // { isVisble && <div>Element</div> }