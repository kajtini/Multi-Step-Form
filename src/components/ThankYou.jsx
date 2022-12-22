import { motion } from "framer-motion";
import NextStepBtn from "./NextStepBtn";

function ThankYou() {
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
      className="flex flex-col items-center justify-center"
    >
      <img
        className="mb-7"
        src="../../public/images/icon-thank-you.svg"
        alt="checkmark png"
      />
      <h1 className="font-bold text-4xl text-primary-blue-marine mb-2">
        Thank you!
      </h1>
      <p className="text-neutral-gray-cool mb-8 text-center max-w-md">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </motion.div>
  );
}

export default ThankYou;
