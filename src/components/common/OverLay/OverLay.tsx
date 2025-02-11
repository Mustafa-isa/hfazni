import React from "react";
import overlayImage from "../../../assets/images/bga.jpg";
import { FaHome } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

type OverLayProps = {
  title: string;
};

const OverLay: React.FC<OverLayProps> = ({ title }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.div
      className="flex items-center py-12 text-white"
      style={{
        backgroundImage: `url(${overlayImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px", // Adjust height as needed
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-[90%] lg:w-[60%] mx-auto text-center lg:text-left"
        variants={textVariants}
      >
        <div className="z-50">
          <h1 className="text-4xl lg:text-5xl text-mainText font-bold mb-4">
            {title}
          </h1>
          <motion.div
            className="flex items-center justify-center lg:justify-start space-x-2 text-sm lg:text-base"
            variants={textVariants}
          >
            <FaHome size={20} className="text-primary" />
            <h2 className="text-mainText font-medium">Home</h2>
            <FaArrowRight size={14} className="text-mainText" />
            <h2 className="text-mainText font-medium">{title}</h2>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OverLay;
