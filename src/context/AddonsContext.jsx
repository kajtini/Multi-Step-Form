import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AddonsContext = createContext();
const AddonsUpdateContext = createContext();

export function useAddons() {
  return useContext(AddonsContext);
}

export function useAddonsUpdate() {
  return useContext(AddonsUpdateContext);
}

export function AddonsProvider({ children }) {
  const [selectedAddons, setSelectedAddons] = useState([]);

  return (
    <AddonsContext.Provider value={selectedAddons}>
      <AddonsUpdateContext.Provider value={setSelectedAddons}>
        {children}
      </AddonsUpdateContext.Provider>
    </AddonsContext.Provider>
  );
}
