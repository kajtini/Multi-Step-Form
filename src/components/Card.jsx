import Sidebar from "./Sidebar";
import PersonalInfo from "./PersonalInfo";
import { Routes, Route, useLocation } from "react-router-dom";
import SelectPlan from "./SelectPlan";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Addons from "./Addons";
import Summary from "./Summary";
import { YearlyProvider } from "../context/YearlyContext";
import { PlanProvider } from "../context/PlanContext";
import { AddonsProvider } from "../context/AddonsContext";
import { StepProvider } from "../context/StepContext";
import ThankYou from "./ThankYou";

function Card() {
  const location = useLocation();

  return (
    <div className="2xl:w-[50%] bg-white rounded-xl lg:shadow-2xl 2xl:p-4 overflow-hidden">
      <div className="flex  flex-col 2xl:flex-row 2xl:items-center">
        <StepProvider>
          <Sidebar />
          <div className="2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center 2xl:w-full p-5">
            <YearlyProvider>
              <PlanProvider>
                <AddonsProvider>
                  <AnimatePresence mode="wait">
                    <Routes location={location} key={location.key}>
                      <Route path="/" element={<PersonalInfo />} />
                      <Route path="/plan" element={<SelectPlan />} />
                      <Route path="/addons" element={<Addons />} />
                      <Route path="/summary" element={<Summary />} />
                      <Route path="/thanks" element={<ThankYou />} />
                    </Routes>
                  </AnimatePresence>
                </AddonsProvider>
              </PlanProvider>
            </YearlyProvider>
          </div>
        </StepProvider>
      </div>
    </div>
  );
}

export default Card;
