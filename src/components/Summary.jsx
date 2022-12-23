import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useYearly } from "../context/YearlyContext";
import { usePlan } from "../context/PlanContext";
import { useAddons } from "../context/AddonsContext";
import NextStepBtn from "./NextStepBtn";
import { useStepUpdate } from "../context/StepContext";

function Summary() {
  const setCurrentStep = useStepUpdate();
  const selectedAddons = useAddons();
  const isYearly = useYearly();
  const [selectedPlan] = usePlan();

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
    setCurrentStep(4);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="2xl:w-[80%] mx-auto"
    >
      <h1 className="font-bold text-4xl text-primary-blue-marine">
        Finishing up
      </h1>
      <p className="text-neutral-gray-cool mb-8">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-neutral-magnolia py-4 px-5 rounded-md mb-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-primary-blue-marine text-lg ">{`${
              selectedPlan?.type || (!selectedPlan && "No plan selected")
            }  (${
              (!selectedPlan && "*") || (isYearly ? "Yearly" : "Monthly")
            })`}</p>
            <Link className="text-neutral-gray-cool underline" to="/plan">
              Change
            </Link>
          </div>
          <p className="font-bold text-primary-blue-marine">{`+$${
            selectedPlan ? selectedPlan?.billing : "0.00"
          }/${isYearly ? "yr" : "mo"}`}</p>
        </div>

        {selectedAddons.length > 0 && <hr className="my-4" />}
        <ul>
          {selectedAddons.map((addon, i) => (
            <li
              key={addon.id}
              className={`flex items-center justify-between ${
                i !== selectedAddons.length - 1 && "mb-3"
              }`}
            >
              <p className="text-neutral-gray-cool">{addon?.type}</p>
              <p className="font-medium text-primary-blue-marine">{`+${
                addon?.billing
              }/${isYearly ? "yr" : "mo"}`}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between px-5 mb-32">
        <p className="text-neutral-gray-cool">{`Total (per ${
          isYearly ? "year" : "month"
        })`}</p>
        <p className="font-bold text-2xl text-primary-blue-purplish">{`+$${
          selectedAddons?.reduce((acc, curr) => acc + curr?.billing, 0) +
            selectedPlan?.billing ||
          (selectedAddons.length === 0 && !selectedPlan && "0.00")
        }/${isYearly ? "yr" : "mo"}`}</p>
      </div>
      <div className="flex items-center justify-between">
        <Link to="/addons" className="text-neutral-gray-cool font-bold text-lg">
          Go back
        </Link>
        <Link to="/thanks">
          <NextStepBtn complete="Complete" />
        </Link>
      </div>
    </motion.div>
  );
}

export default Summary;
