import { createContext } from "react";
import { useState } from "react";
import React from "react";
import { useContext } from "react";

const YearlyContext = createContext();
const YearlyUpdateContext = createContext();

export function useYearly() {
  return useContext(YearlyContext);
}

export function useYearlyUpdate() {
  return useContext(YearlyUpdateContext);
}

export function YearlyProvider({ children }) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <YearlyContext.Provider value={isYearly}>
      <YearlyUpdateContext.Provider value={setIsYearly}>
        {children}
      </YearlyUpdateContext.Provider>
    </YearlyContext.Provider>
  );
}
