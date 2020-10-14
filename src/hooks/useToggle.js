import { useState, useCallback } from "react";

const useToggle = currentState => {
  const [visble, setVisible] = useState(currentState);
  return [visble, useCallback(() => setVisible(isShowing => !isShowing), [])];
};

export default useToggle;

