import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/images/done-plus/kidsWomen.svg";
import img2 from "../../../assets/images/done-plus/kidsmen.svg";
import img3 from "../../../assets/images/done-plus/home1p.svg";
import { FaClock, FaUser } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

// تعريف نوع بيانات العنصر
interface FocusItemProps {
  img: string;
  title: string;
  description: string;
}

// بيانات العناصر
const items: FocusItemProps[] = [
  {
    img: img1,
    title: "تعليم القرآن الكريم",
    description: "نوفر بيئة تعليمية حديثة وممتعة لحفظ وتلاوة القرآن الكريم."
  },
  {
    img: img2,
    title: "تحفيظ متدرج",
    description: "أساليب مبتكرة لمساعدة الأطفال على الحفظ والمراجعة بسهولة."
  },
  {
    img: img3,
    title: "إشراف متخصص",
    description: "مدرسون مؤهلون للإشراف على تقدم الأطفال في الحفظ والتجويد."
  },
];

// مكون لعرض العنصر الواحد
const FocusItem: React.FC<FocusItemProps> = ({ img, title, description }) => (
  <motion.div
    className="flex flex-col items-center text-center border rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 bg-white"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {/* الصورة */}
    <img
      src={img}
      alt={title}
      className="h-72 w-full object-cover rounded-t-md"
    />

    {/* المحتوى */}
    <div className="px-4 py-4">
      <h3 className="text-mainText text-lg font-semibold mb-3">{title}</h3>
      <p className="text-secondaryTextColor text-sm mb-4">{description}</p>
      
      {/* وقت الجلسة وزر التفاصيل */}
      <div className="flex items-center justify-between text-sm text-secondaryTextColor">
        <div className="flex items-center space-x-2">
          <FaClock className="text-primary" />
          <span>من 10:00 صباحًا إلى 4:00 مساءً</span>
        </div>
        <button className="text-primary font-medium hover:underline">
          التفاصيل
        </button>
      </div>
    </div>
  </motion.div>
);

// المكون الرئيسي
const ServiceCollection: React.FC = () => (
  <div className="py-20 bg-gray-50">
    <div className="w-[90%] max-w-7xl mx-auto">
      {/* العنوان */}
      <div className="text-center mb-10">
        <motion.button
          className="text-primary uppercase font-medium"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          خدماتنا
        </motion.button>
        <h2 className="mt-4 text-secondaryTextColor font-bold text-4xl">
          أحدث الدورات التعليمية
        </h2>
      </div>

      {/* شبكة العناصر */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <FocusItem
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  </div>
);

export default ServiceCollection;
