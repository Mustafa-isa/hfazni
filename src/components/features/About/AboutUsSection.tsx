import { motion } from "framer-motion";
import aboutImage from "../../../assets/images/done-plus/home1p.svg";

export default function AboutUsSection() {
  return (
    <div className="my-12 w-[95vw] lg:w-[90vw] mx-auto flex justify-center gap-12 flex-wrap">
      {/* قسم الصورة */}
      <motion.div
        className="w-full lg:w-[45%]"
        initial={{ opacity: 0, x: -200, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <img src={aboutImage} alt="عن التطبيق" className="w-full" />
      </motion.div>

      {/* قسم النص */}
      <motion.div
        className="w-full lg:w-[45%] text-right"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <span className="text-primary">عن التطبيق</span>
        <h1 className="text-5xl my-6 text-mainText font-bold">
          تطبيق حفظني لتعليم القرآن الكريم
        </h1>
        <p className="text-secondaryTextColor mt-6">
          يوفر تطبيق حفظني طريقة سهلة ومبتكرة لحفظ وتلاوة القرآن الكريم.
          <br />
          يتضمن ميزات مثل التكرار الذكي، الاستماع إلى قرّاء مختلفين، وتقييم الأداء.
          <br />
          استمتع بتجربة تعليمية مميزة تساعدك على تحسين مستواك في التلاوة والحفظ.
        </p>

        {/* قسم إضافي */}
        <motion.div
          className="mt-8 flex flex-wrap gap-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        >
          <div className="bg-primary p-6 rounded-lg text-white text-center w-full lg:w-[45%]">
            <h2 className="text-xl font-bold">تعلم التلاوة</h2>
            <p className="mt-2">استمع للقرّاء وأتقن التجويد بسهولة.</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg text-white text-center w-full lg:w-[45%]">
            <h2 className="text-xl font-bold">نظام التكرار الذكي</h2>
            <p className="mt-2">طريقة حديثة تساعدك على تثبيت الحفظ بسرعة.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
