'use client'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type Val = {
  stateDialog: boolean;
};
export interface ValContextInterface {
  val: Val;
  setVal: Dispatch<SetStateAction<Val>>;
}

const defaultState = {
  val: {
    stateDialog: false,
  },
  setVal: (val: Val) => {},
} as ValContextInterface;

export const BtnContext = createContext(defaultState);

type ValPropsProvider = {
  children: ReactNode;
};

function ProviderContext({ children }: ValPropsProvider) {
  const [val, setVal] = useState<Val>({ stateDialog: false });
  return (
    <BtnContext.Provider value={{ val, setVal }}>
      {children}
    </BtnContext.Provider>
  );
}
export default ProviderContext;
