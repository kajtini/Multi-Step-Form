import { useState } from "react";
import Plan from "./Plan";
import { motion } from "framer-motion";
import NextStepBtn from "./NextStepBtn";
import { Link } from "react-router-dom";
import Switch from "./Switch";

function SelectPlan() {
  const [activeId, setActiveId] = useState(null);
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      type: "Arcade",
      img: "../../../public/images/icon-arcade.svg",
      billing: !isYearly ? "$9/mo" : "$90/yr",
    },
    {
      type: "Advanced",
      img: "../../../public/images/icon-advanced.svg",
      billing: !isYearly ? "$12/mo" : "$120/yr",
    },
    {
      type: "Pro",
      img: "../../../public/images/icon-pro.svg",
      billing: !isYearly ? "$15/mo" : "$150/yr",
    },
  ];

  function handlePlanClick(id) {
    setActiveId(id);
  }

  function handleSwitchClick() {
    setIsYearly((prevIsYearly) => !prevIsYearly);
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "200px",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-[50%]"
    >
      <h1 className="font-bold text-4xl text-primary-blue-marine">
        Select your plan
      </h1>
      <p className="text-neutral-gray-cool mb-8">
        You have the option of monthly or early billing
      </p>

      <div
        className="grid grid-cols-3 gap-x-4 mb-7
      "
      >
        {plans.map((plan) => (
          <Plan
            key={plan.type}
            id={plan.type}
            type={plan.type}
            img={plan.img}
            billing={plan.billing}
            handleClick={handlePlanClick}
            activeId={activeId}
            isYearly={isYearly}
          />
        ))}
      </div>
      <Switch handleClick={handleSwitchClick} isYearly={isYearly} />
      <div className="flex items-center justify-between">
        <Link to="/" className="text-neutral-gray-cool font-bold text-lg">
          Go back
        </Link>
        {activeId && <NextStepBtn />}
      </div>
    </motion.div>
  );
}

export default SelectPlan;
