import { createContext } from "react";

type HiddenNavContextType = {
  isOpen: boolean;
  toggleNav: () => void;
};

export const HiddenNavCtx = createContext<HiddenNavContextType>({
  isOpen: false,
  toggleNav: () => {},
});
