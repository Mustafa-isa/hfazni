import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBook, FaMicrophone, FaQuran } from "react-icons/fa";
import { IconType } from "react-icons";

interface CardProps {
  icon: IconType;
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  buttonText,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white shadow-lg rounded-2xl p-6 text-center w-80 border border-gray-200"
    >
      <div className="flex justify-center">
        <Icon className="text-primary text-5xl" />
      </div>
      <h2 className="text-lg font-semibold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        {buttonText}
      </button>
    </motion.div>
  );
};

const CardList: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards: CardProps[] = [
    {
      icon: FaQuran,
      title: "تلاوة القرآن",
      description: "استمع إلى التلاوة بأصوات متعددة",
      buttonText: "استمع الآن",
    },
    {
      icon: FaBook,
      title: "دروس تجويد",
      description: "تعلم أحكام التجويد بسهولة",
      buttonText: "ابدأ التعلم",
    },
    {
      icon: FaMicrophone,
      title: "حفظ وتسميع",
      description: "احفظ وراجع السور بكل سهولة",
      buttonText: "ابدأ الحفظ",
    },
  ];

  return (
    <div ref={ref} className="flex flex-wrap gap-6 justify-center p-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <Card {...card} />
        </motion.div>
      ))}
    </div>
  );
};

export default CardList;
