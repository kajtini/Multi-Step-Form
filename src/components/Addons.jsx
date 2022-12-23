import { useEffect } from "react";
import { motion } from "framer-motion";
import NextStepBtn from "./NextStepBtn";
import Addon from "./Addon";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useYearly } from "../context/YearlyContext";
import { useAddonsUpdate } from "../context/AddonsContext";
import { useStepUpdate } from "../context/StepContext";

function Addons() {
  const setCurrentStep = useStepUpdate();
  const setSelectedAddons = useAddonsUpdate();
  const isYearly = useYearly();
  const [addons, setAddons] = useState([
    {
      id: 1,
      type: "Online service",
      desc: "Access to multiplayer games",
      billing: !isYearly ? 1 : 10,
      selected: false,
    },
    {
      id: 2,
      type: "Larger Storage",
      desc: "Extra 1TB of cloud save",
      billing: !isYearly ? 2 : 20,
      selected: false,
    },
    {
      id: 3,
      type: "Customizable Profile",
      desc: "Custom theme on your profile",
      billing: !isYearly ? 2 : 20,
      selected: false,
    },
  ]);

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

  useEffect(() => {
    setCurrentStep(3);
  }, []);

  useEffect(() => {
    setSelectedAddons(addons.filter((addon) => addon.selected));
  }, [addons]);

  function handleAddonClick(id) {
    setAddons((prevAddons) =>
      prevAddons.map((addon) => {
        return addon.id === id
          ? { ...addon, selected: !addon.selected }
          : addon;
      })
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="2xl:w-[80%] mx-auto"
    >
      <h1 className="font-bold text-4xl text-primary-blue-marine">
        Pick Aadd-ons
      </h1>
      <p className="text-neutral-gray-cool mb-8">
        Add-ons help enhance your gaming experience.
      </p>
      <ul className="mb-14">
        {addons.map((addon, i) => (
          <li key={addon.id} className={`${i !== addons.length - 1 && "mb-4"}`}>
            <Addon
              {...addon}
              handleClick={handleAddonClick}
              isYearly={isYearly}
            />
          </li>
        ))}
      </ul>
      <div className="w-full flex items-center justify-between">
        <Link to="/plan" className="text-neutral-gray-cool font-bold text-lg">
          Go back
        </Link>
        <Link to="/summary">
          <NextStepBtn />
        </Link>
      </div>
    </motion.div>
  );
}

export default Addons;
