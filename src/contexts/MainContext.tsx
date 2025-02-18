import { useReducer } from "react";
import { reducer, initialState } from "../reducer";
import { useState, createContext, useContext, ReactNode } from "react";
import { TState, TDispatch } from "../reducer";

export const MainContext = createContext<{
  state: TState;
  dispatch: TDispatch;
  showSettings: boolean;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  state: {
    startTime: 0,
    pause: false,
    color: "",
    mode: "",
    font: 0,
  },
  dispatch: () => {},
  showSettings: false,
  setShowSettings: () => {},
});

export default function MainProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [showSettings, setShowSettings] = useState<boolean>(false);
  return (
    <MainContext.Provider
      value={{ state, dispatch, showSettings, setShowSettings }}
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
