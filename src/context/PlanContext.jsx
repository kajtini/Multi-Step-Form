import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const PlanContext = createContext();
const PlanSelectUpdateContext = createContext();

export function usePlan() {
  return useContext(PlanContext);
}

export function usePlanUpdate() {
  return useContext(PlanSelectUpdateContext);
}

export function PlanProvider({ children }) {
  const [selectedPlan, setSelectedPlan] = useState([]);

  return (
    <PlanContext.Provider value={selectedPlan}>
      <PlanSelectUpdateContext.Provider value={setSelectedPlan}>
        {children}
      </PlanSelectUpdateContext.Provider>
    </PlanContext.Provider>
  );
}
