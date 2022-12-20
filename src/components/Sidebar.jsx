import { motion } from "framer-motion";

function Sidebar() {
  const steps = [
    { stepNumber: 1, stepPlan: "Your info", selected: false },
    { stepNumber: 2, stepPlan: "Select Plan", selected: false },
    { stepNumber: 3, stepPlan: "Add-Ons", selected: false },
    { stepNumber: 4, stepPlan: "Summary", selected: false },
  ];

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
    <div className="">
      <div
        className="bg-sidebar-pattern bg-no-repeat px-9 py-10 text-white 
   h-[568px] w-[274px]"
      >
        <ul>
          {steps.map((step) => (
            <motion.li
              key={step.stepNumber}
              className="flex items-center gap-4 mb-6"
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
              <div
                className={`border-solid border-white border-[1px] flex justify-center items-center rounded-[50%] w-10 h-10 font-medium 
            ${
              step.selected &&
              "bg-primary-blue-light border-primary-blue-light text-primary-blue-marine"
            }`}
              >
                {step.stepNumber}
              </div>
              <div>
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
