import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import img4 from "../../../../assets/images/done-plus/home1p.svg";
import { FaPrayingHands, FaRegLightbulb } from "react-icons/fa";
import { FaBookQuran } from "react-icons/fa6";

export default function HomeAboutSection() {
  return (
    <div className=" w-[90vw] text-right md:text-center lg:w-[90vw] mx-auto flex justify-center gap-12 flex-wrap">
      {/* Image Section */}
      <motion.div
        className="w-full lg:w-[45%]"
        initial={{ opacity: 0, x: -200, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <img
          className=" w-96 h-96 lg:xl:w-[700px] lg:xl:h-[700px]"
          src={img4}
          alt="Hero"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full lg:w-[45%]"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.6, -0.05, 0.01, 0.99], // More dramatic easing for text animation
        }}
      >
        <h1 className="text-5xl my-6 text-mainText font-bold">
          ما يميز تطبيق حفظني
        </h1>

        {/* About Cards */}
        <motion.div
          className="mt-8 flex flex-wrap gap-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.6, -0.05, 0.01, 0.99], // Easing effect for the cards animation
          }}
        >
          <AboutCard
            icon={<FaBookQuran />}
            title="تعليم القرآن الكريم"
            description="استمتع بتجربة تعليمية مميزة لتعلم تلاوة القرآن الكريم بأحكام التجويد الصحيحة مع قراء معتمدين."
          />

          <AboutCard
            icon={<FaRegLightbulb />}
            title="تفسير بعض الكلمات الصعبه"
            description="تفسير بعض الكلمات الصعبه لتسهيل الحفظ ."
          />

          <AboutCard
            icon={<FaPrayingHands />}
            title="يعمل علي مدار الساعه"
            description="يدعم مختلف الاعمار والمستويات "
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
