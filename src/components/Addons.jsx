import { useEffect } from "react";
import { motion } from "framer-motion";
import NextStepBtn from "./NextStepBtn";
import Addon from "./Addon";
import { Link } from "react-router-dom";

function Addons({ setCurrentStep }) {
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

  const addons = [
    {
      id: 1,
      type: "Online service",
      descirption: "Access to multiplayer games",
      billing: 1,
    },
    {
      id: 2,
      type: "Larger Storage",
      descirption: "Extra 1TB of cloud save",
      billing: 2,
    },
    {
      id: 3,
      type: "Customizable Profile",
      descirption: "Custom theme on your profile",
      billing: 2,
    },
  ];

  useEffect(() => {
    setCurrentStep(3);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-[50%]"
    >
      <h1 className="font-bold text-4xl text-primary-blue-marine">
        Pick Aadd-ons
      </h1>
      <p className="text-neutral-gray-cool mb-8">
        Add-ons help enhance your gaming experience.
      </p>
      <ul className="mb-14">
        {addons.map((addon, i) => (
          <li className={`${i !== addons.length - 1 && "mb-4"}`}>
            <Addon
              key={addon.id}
              id={addon.id}
              type={addon.type}
              desc={addon.descirption}
              billing={addon.billing}
            />
          </li>
        ))}
      </ul>
      <div className="w-full flex items-center justify-between">
        <Link to="/plan" className="text-neutral-gray-cool font-bold text-lg">
          Go back
        </Link>
        <NextStepBtn />
      </div>
    </motion.div>
  );
}

export default Addons;
