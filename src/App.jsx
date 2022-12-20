import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Step from "./components/Step";
import Home from "./components/Home";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-primary bg-neutral-magnolia">
      {/* Card */}
      <Card />
      {/* Steps */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/step">
          <Route path="1" element={<Step stepNumber={1} />} />
          <Route path="2" element={<Step stepNumber={2} />} />
          <Route path="3" element={<Step stepNumber={3} />} />
          <Route path="4" element={<Step stepNumber={4} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
