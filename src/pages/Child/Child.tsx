import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import OverLay from "../../components/common/OverLay/OverLay";
import img1 from "../../assets/images/done-plus/home1p.svg";
import img2 from "../../assets/images/done-plus/kidsBg.jpg";
import img3 from "../../assets/images/done-plus/kidsmen.svg";
import img4 from "../../assets/images/done-plus/kidsWomen.svg";
import StatsSection from "../../components/common/Staicts/Statics";
import CardList from "../../components/features/Home/HfzniForAllCards";
import OurMainFocus from "../../components/common/OurMainFocus/OurMainFocus";
import HomeAboutSection from "../../components/features/Home/AboutHomeSction/HomeAboutSectiion";

const Section = ({ img, title, description, details, buttonText, variant }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const layoutVariants = {
    default:
      "flex flex-wrap items-center justify-center my-12 p-6 bg-gray-100 rounded-lg shadow-md",
    fullWidth: "relative my-12 p-6 bg-primary text-white text-center py-16",
    imageOverlay: "relative my-12 p-6 rounded-lg overflow-hidden text-white",
  };

  return (
    <motion.div
      ref={ref}
      className={layoutVariants[variant] || layoutVariants.default}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {variant === "fullWidth" ? (
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-6">{description}</p>
        </div>
      ) : variant === "imageOverlay" ? (
        <div className="relative">
          <img
            src={img}
            alt={title}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg mb-4">{description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap items-center">
          <img src={img} alt={title} className="w-full md:w-1/2 rounded-lg" />
          <div className="w-full md:w-1/2 p-6 text-right">
            <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
            <p className="text-lg text-secondaryTextColor">{description}</p>
            <ul className="mt-4 text-mainText text-lg list-disc pr-6">
              {details.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {buttonText && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-2 bg-white text-primary rounded-lg shadow-md transition-all duration-300 hover:bg-gray-200"
        >
          <a href="https://play.google.com/store/apps/details?id=com.rmoztec.hafazny.quran">
            {buttonText}
          </a>
        </motion.button>
      )}
    </motion.div>
  );
};

function Child() {
  return (
    <div>
      <OverLay title="تحفيظ الأطفال" />
      <div className="mx-auto py-12">
        <Section
          img={img1}
          title="طرق مبتكرة لحفظ القرآن"
          description="نوفر للأطفال أساليب شيقة لحفظ وتجويد القرآن الكريم بأسلوب ممتع وتفاعلي."
          details={[
            "استخدام الوسائط المتعددة في التعليم.",
            "تحفيظ ممتع  وبسيط  .",
            "متابعة فردية لكل طفل لتحسين الأداء.",
          ]}
          buttonText="اكتشف المزيد"
        />
        <OurMainFocus />
        <Section
          img={img2}
          title="تعليم ممتع مع مدرسين متخصصين"
          description="مدرسونا المتخصصون يضمنون تعليمًا فعالًا للأطفال بأساليب متطورة."
          details={[
            "ورش تعليمية مباشرة عبر الإنترنت.",
            "دروس جماعية وفردية لتحفيظ القرآن.",
            "متابعة تقدم الطفل باستمرار.",
          ]}
          variant="imageOverlay"
        />
        <HomeAboutSection />
        <Section
          img={img3}
          title="رحلة النجاح تبدأ هنا"
          description="نوفر للأطفال بيئة محفزة تساعدهم على تحقيق أهدافهم التعليمية بسهولة."
          details={[
            "شهادات إتمام لكل مرحلة.",
            "تحفيز الأطفال بمكافآت وجوائز.",
            "استخدام تقنيات تفاعلية حديثة.",
          ]}
          variant="fullWidth"
        />

        {/* <Section
          img={img4}
          title="متابعة الوالدين لتقدم الطفل"
          description="يستطيع أولياء الأمور متابعة مستوى تقدم أطفالهم من خلال تقارير دورية."
          details={[
            "تقارير أداء مفصلة.",
            "نصائح لتحسين مستوى الحفظ.",
            "إمكانية التواصل مع المدرسين مباشرة.",
          ]}
        /> */}
        <CardList />
        <StatsSection />
      </div>
    </div>
  );
}

export default Child;
