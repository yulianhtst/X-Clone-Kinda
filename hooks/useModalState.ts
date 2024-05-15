import { useState } from "react";

export const useModalState = () => {
  const [state, setState] = useState(false);

  return [state, setState];
};
