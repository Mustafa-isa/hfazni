import React from "react";
import overlayImage from "../../../assets/images/done-plus/kidsBg.jpg";
import { FaHome } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
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
      className="flex relative  mt-[-100px] items-center py-12 text-white"
      style={{
        backgroundImage: `url(${overlayImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px", // تعديل الارتفاع حسب الحاجة
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    > 
    <div className="bg-black opacity-50 z-[-1] absolute top-0 left-0 right-0 bottom-0"></div>
      <motion.div
        className="w-[90%] lg:w-[60%] mx-auto text-center lg:text-right"
        variants={textVariants}
      >
        <div className="z-50">
          <h1 className="text-4xl lg:text-5xl text-white font-bold mb-4">
            {title}
          </h1>
          <motion.div
            className="flex items-center justify-center lg:justify-end space-x-2 text-sm lg:text-base"
            variants={textVariants}
          >
            <h2 className="text-white font-medium">الرئيسية</h2>
            <FaArrowLeft size={14} className="text-white" />
            <h2 className="text-white font-medium">{title}</h2>
            <FaHome size={20} className="text-primary" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OverLay;
