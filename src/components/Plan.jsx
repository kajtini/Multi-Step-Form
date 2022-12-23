import { motion, AnimatePresence } from "framer-motion";
import { useYearly } from "../context/YearlyContext";

function Plan({ type, id, activeId, img, billing, handleClick }) {
  const isYearly = useYearly();

  const planVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
  };

  const freeVariants = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 25,
      },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: {
        opacity: {
          duration: 0.2,
        },
      },
    },
  };

  return (
    <motion.div
      variants={planVariants}
      whileHover="hover"
      className={`flex flex-row items-center gap-3 2xl:gap-0 2xl:flex-col 2xl:items-start
   px-4 py-5 border-[1px] border-solid mb-3 2xl:mb-0
    border-neutral-gray-cool rounded-xl  cursor-pointer ${
      id === activeId && "bg-neutral-magnolia border-primary-blue-purplish"
    }`}
      onClick={() => handleClick(id)}
    >
      <img src={`${img}`} alt="plan icon" className="2xl:mb-10" />
      <div className="mr-auto 2xl:mr-0">
        <p className="font-bold text-primary-blue-marine text-xl">{type}</p>
        <p className={`text-neutral-gray-cool ${isYearly && "lg:mb-2"}`}>
          {`$${billing}/${isYearly ? "yr" : "mo"}`}
        </p>
      </div>
      <AnimatePresence mode="wait">
        {isYearly && (
          <motion.p
            variants={freeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-sm text-primary-blue-marine font-medium "
          >
            2 months free
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Plan;
