import { motion } from "framer-motion";

function Switch({ handleClick, isYearly }) {
  return (
    <div className="w-full bg-neutral-magnolia flex items-center py-3 justify-center gap-5 rounded-lg mb-10 2xl:mb-28">
      <p
        className={`font-bold ${
          isYearly ? "text-neutral-gray-cool" : "text-primary-blue-marine"
        }`}
      >
        Monthly
      </p>
      <div
        className={` bg-primary-blue-marine flex ${
          isYearly ? "justify-end" : "justify-start"
        } items-center rounded-2xl w-[40px] h-[20px] p-1 cursor-pointer`}
        onClick={handleClick}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="bg-white rounded-[50%] w-[12px] h-[12px]"
        ></motion.div>
      </div>
      <p
        className={`font-bold ${
          isYearly ? "text-primary-blue-marine" : "text-neutral-gray-cool"
        } `}
      >
        Yearly
      </p>
    </div>
  );
}

export default Switch;
