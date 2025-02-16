import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBook, FaChalkboardTeacher } from "react-icons/fa";
import bg from "../../../assets/images/done-plus/Frame 1.png";

type StatProps = {
  title: string;
  value: number;
  icon: JSX.Element;
};

const StatCounter: React.FC<StatProps> = ({ title, value, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(value / (duration / 50));
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(start);
    }, 50);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-lg text-center flex flex-col items-center space-y-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-blue-600 text-5xl">{icon}</div>
      <p className="text-4xl font-bold text-blue-600">{count}</p>
      <p className="text-gray-700 mt-2 text-lg">{title}</p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative bg-gradient-to-r my-20 py-16 px-8 text-white text-center"
    >
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-primary z-1 bg-opacity-40"></div>
      <div className="relative z-50">
        <h2 className="text-3xl font-bold mb-8">إحصائيات تطبيق حفظني</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <StatCounter
            title="عدد المستخدمين"
            value={15000}
            icon={<FaUsers />}
          />
          <StatCounter title="الدروس المتاحة" value={200} icon={<FaBook />} />
          <StatCounter
            title="المعلمون المتاحون"
            value={50}
            icon={<FaChalkboardTeacher />}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
