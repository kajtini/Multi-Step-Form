import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InputInfo from "./InputInfo";
import NextStepBtn from "./NextStepBtn";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useStepUpdate } from "../context/StepContext";

function PersonalInfo() {
  const setCurrentStep = useStepUpdate();
  const [changeCount, setChangeCount] = useState(0);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setCurrentStep(1);
  }, []);

  useEffect(() => {
    inputData.name &&
      inputData.email &&
      inputData.phone &&
      setChangeCount((prevChangeCount) => prevChangeCount + 1);
  }, [inputData]);

  function determineRegex(type) {
    switch (type) {
      case "name":
        return /^[a-zA-Z ]+$/;
      case "email":
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      case "phone":
        return /^\d{3}\s?\d{3}\s?\d{3}$/;
    }
  }

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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col 2xl:w-[80%] mx-auto"
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
              regex={determineRegex(type)}
            />
            <AnimatePresence>
              {!determineRegex(type).test(inputData[type]) &&
                changeCount > 0 && (
                  <motion.p
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 25,
                    }}
                    exit={{
                      y: "100%",
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    className="text-red-400 mt-1 text-sm px-3"
                  >
                    Provide a valid format of {type}
                  </motion.p>
                )}
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>
      <AnimatePresence>
        {determineRegex("name").test(inputData.name) &&
          determineRegex("email").test(inputData.email) &&
          determineRegex("phone").test(inputData.phone) && (
            <Link className="w-full flex justify-end" to="/plan">
              <NextStepBtn />
            </Link>
          )}
      </AnimatePresence>
    </motion.div>
  );
}

export default PersonalInfo;
