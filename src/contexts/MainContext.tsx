import { useReducer } from "react";
import {
  designReducer,
  designInitialState,
  timerInitialState,
  timerReducer,
} from "../reducer";
import { useState, createContext, useContext, ReactNode } from "react";
import { tDesignState, tDispatch, tTimerState } from "../types/Types";

export const MainContext = createContext<{
  designState: tDesignState;
  timerState: tTimerState;
  designDispatch: tDispatch;
  timerDispatch: tDispatch;
  showSettings: boolean;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  designState: {
    color: "",
    mode: "",
    font: 0,
  },
  timerState: {
    startTime: 0,
    pause: false,
    shortStartTime: 0,
    shortPause: false,
    longStartTime: 0,
    longPause: false,
  },
  designDispatch: () => {},
  timerDispatch: () => {},
  showSettings: false,
  setShowSettings: () => {},
});

export default function MainProvider({ children }: { children: ReactNode }) {
  const [designState, designDispatch] = useReducer(
    designReducer,
    designInitialState
  );

  const [timerState, timerDispatch] = useReducer(
    timerReducer,
    timerInitialState
  );

  const [showSettings, setShowSettings] = useState<boolean>(false);
  return (
    <MainContext.Provider
      value={{
        designState,
        designDispatch,
        timerState,
        timerDispatch,
        showSettings,
        setShowSettings,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export const useGeneral = () => {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("Something went wrong.");
  }

  return context;
};
