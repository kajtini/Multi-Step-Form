import Sidebar from "./Sidebar";
import PersonalInfo from "./PersonalInfo";
import { Routes, Route, useLocation } from "react-router-dom";
import SelectPlan from "./SelectPlan";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function Card() {
  const location = useLocation();

  return (
    <div className="w-[50%] bg-white rounded-xl shadow-2xl p-4">
      <div className="flex items-center gap-28">
        <Sidebar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/plan" element={<SelectPlan />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Card;
