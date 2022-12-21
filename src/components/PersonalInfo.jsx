import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InputInfo from "./InputInfo";
import NextStepBtn from "./NextStepBtn";
import { Link } from "react-router-dom";

function PersonalInfo() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const inputTypes = Object.keys(inputData);

  function handleChange(event, type) {
    const { value } = event.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      [type]: value,
    }));
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
      layout
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col"
    >
      <h1 className="font-bold text-4xl text-primary-blue-marine">
        Personal Info
      </h1>
      <p className="text-neutral-gray-cool mb-8">
        Please provide your name, email address, and phone number
      </p>
      <ul>
        {inputTypes.map((type, i) => (
          <motion.li
            layout
            transition={{ duration: 1 }}
            key={type}
            className={`${i === inputTypes.length - 1 ? "mb-16" : "mb-4 "}`}
          >
            <p className="text-primary-blue-marine mb-1">
              {type[0].toUpperCase().concat(type.slice(1))}
            </p>
            <InputInfo
              inputType={type}
              handleChange={handleChange}
              inputData={inputData[type]}
            />
          </motion.li>
        ))}
      </ul>
      <AnimatePresence>
        {inputData.name && inputData.email && inputData.phone && (
          <Link className="w-full flex justify-end" to="/plan">
            <NextStepBtn />
          </Link>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default PersonalInfo;
