"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type LoaderStateContextValue = {
  isLoaderDone: boolean;
  setIsLoaderDone: Dispatch<SetStateAction<boolean>>;
};

const LoaderStateContext = createContext<LoaderStateContextValue | undefined>(
  undefined
);

export function LoaderStateProvider({ children }: { children: ReactNode }) {
  const [isLoaderDone, setIsLoaderDone] = useState(false);

  const value = useMemo(
    () => ({ isLoaderDone, setIsLoaderDone }),
    [isLoaderDone]
  );

  return (
    <LoaderStateContext.Provider value={value}>
      {children}
    </LoaderStateContext.Provider>
  );
}

export function useLoaderState() {
  const context = useContext(LoaderStateContext);

  if (!context) {
    throw new Error("useLoaderState must be used within LoaderStateProvider");
  }

  return context;
}
