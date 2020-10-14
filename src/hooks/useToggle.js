import { useState, useCallback } from "react";

const useToggle = currentState => {
  const [show, setOpen] = useState(currentState);
  return [show, useCallback(() => setOpen(isShowing => !isShowing), [])];
};

export default useToggle;

