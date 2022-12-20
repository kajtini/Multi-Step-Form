import { useState } from "react";
import { motion } from "framer-motion";
import InputInfo from "./InputInfo";
import NextStepBtn from "./NextStepBtn";

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
        delay: 1.3,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
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
          <li
            key={type}
            className={`${i === inputTypes.length - 1 ? "mb-20" : "mb-4 "}`}
          >
            <p className="text-primary-blue-marine mb-1">
              {type[0].toUpperCase().concat(type.slice(1))}
            </p>
            <InputInfo
              inputType={type}
              handleChange={handleChange}
              inputData={inputData[type]}
            />
          </li>
        ))}
      </ul>
      <NextStepBtn />
    </motion.div>
  );
}

export default PersonalInfo;
