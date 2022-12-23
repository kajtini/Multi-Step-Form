import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const StepContext = createContext();
const StepUpdateContext = createContext();

export function useStep() {
  return useContext(StepContext);
}

export function useStepUpdate() {
  return useContext(StepUpdateContext);
}

export function StepProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(null);

  return (
    <StepContext.Provider value={currentStep}>
      <StepUpdateContext.Provider value={setCurrentStep}>
        {children}
      </StepUpdateContext.Provider>
    </StepContext.Provider>
  );
}
