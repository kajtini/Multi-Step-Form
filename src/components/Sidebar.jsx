import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { useStep } from "../context/StepContext";

function Sidebar() {
  const currentStep = useStep();
  const [steps, setSteps] = useState([
    { stepNumber: 1, stepPlan: "Your info", selected: false },
    { stepNumber: 2, stepPlan: "Select Plan", selected: false },
    { stepNumber: 3, stepPlan: "Add-Ons", selected: false },
    { stepNumber: 4, stepPlan: "Summary", selected: false },
  ]);

  useEffect(() => {
    setSteps((prevSteps) =>
      prevSteps.map((step) => {
        return currentStep === step.stepNumber
          ? { ...step, selected: true }
          : { ...step, selected: false };
      })
    );
  }, [currentStep]);

  const stepsVariants = {
    hidden: {
      opacity: 0,
      y: "20px",
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div>
      <div
        className="2xl:bg-sidebar-pattern bg-[url('../../public/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat px-9 py-10 text-white 
   2xl:h-[568px] 2xl:w-[274px]"
      >
        <ul className="flex 2xl:block justify-around ">
          {steps?.map((step) => (
            <motion.li
              key={step.stepNumber}
              className="flex items-center gap-4 2xl:mb-6"
              variants={stepsVariants}
              initial="hidden"
              animate="visible"
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 13,
                delay: 0.2 * step.stepNumber,
              }}
            >
              <motion.div
                className={`border-solid border-white border-[1px] flex justify-center items-center rounded-[50%] w-12 h-12 2xl:w-10 2xl:h-10 font-medium 
            ${
              step.selected &&
              "bg-primary-blue-light border-primary-blue-light text-primary-blue-marine"
            }`}
              >
                {step.stepNumber}
              </motion.div>
              <div className="hidden 2xl:block">
                <p className="uppercase text-xs font-light text-neutral-gray-cool">
                  Step {step.stepNumber}
                </p>
                <p className="font-bold uppercase text-sm">{step.stepPlan}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
