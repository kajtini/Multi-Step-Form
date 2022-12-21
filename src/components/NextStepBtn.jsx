import { motion } from "framer-motion";

function NextStepBtn() {
  return (
    <motion.button
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { type: "spring" } }}
      whileHover={{ scale: 1.05, boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
      exit={{
        opacity: 0,
        y: "100%",
        transition: { opacity: { duration: 0.2 } },
      }}
      className="bg-primary-blue-marine text-white 
      font-medium p-3 w-[30%] rounded-lg cursor-pointer self-end"
    >
      Next Step
    </motion.button>
  );
}

export default NextStepBtn;
