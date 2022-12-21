import Sidebar from "./Sidebar";
import PersonalInfo from "./PersonalInfo";
import { Routes, Route, useLocation } from "react-router-dom";
import SelectPlan from "./SelectPlan";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Addons from "./Addons";

function Card() {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(null);

  return (
    <div className="w-[50%] bg-white rounded-xl shadow-2xl p-4">
      <div className="flex items-center gap-28">
        <Sidebar currentStep={currentStep} />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route
              path="/"
              element={<PersonalInfo setCurrentStep={setCurrentStep} />}
            />
            <Route
              path="/plan"
              element={<SelectPlan setCurrentStep={setCurrentStep} />}
            />
            <Route
              path="/addons"
              element={<Addons setCurrentStep={setCurrentStep} />}
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Card;
