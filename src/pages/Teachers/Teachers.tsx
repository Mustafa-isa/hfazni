import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import OverLay from "../../components/common/OverLay/OverLay";
import img1 from "../../assets/images/done-plus/kidsWomen.jpg";
import img2 from "../../assets/images/done-plus/kidsmen.jpg";
import img3 from "../../assets/images/done-plus/home1p.jpg";
import img4 from "../../assets/images/done-plus/kidsmen.jpg";
import img5 from "../../assets/images/done-plus/kidsWomen.jpg";
import img6 from "../../assets/images/done-plus/kidsmen.jpg";
import img7 from "../../assets/images/done-plus/home1p.svg";
import StatsSection from "../../components/common/Staicts/Statics";
import CardList from "../../components/features/Home/HfzniForAllCards";

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
            {" "}
            {buttonText}
          </a>
        </motion.button>
      )}
    </motion.div>
  );
};

function Teachers() {
  return (
    <div>
      <OverLay title="المعلمين والمعلمات" />
      <div className=" mx-auto py-12">
        <Section
          img={img1}
          title="معلمات متخصصات في تعليم الأطفال"
          description="يتم اختيار معلماتنا بعناية لضمان تقديم أفضل تجربة تعليمية للأطفال في حفظ وتجويد القرآن الكريم."
          details={[
            "أساليب تحفيزية تناسب الأطفال من جميع الأعمار.",
            "استخدام التقنيات الحديثة في التعليم التفاعلي.",
            "متابعة فردية لكل طالب لضمان تحقيق أفضل النتائج.",
          ]}
          buttonText="تعرف على المزيد"
        />
        <Section
          img={img2}
          title="معلمين ذوي خبرة في تدريس التجويد"
          description="يتمتع معلمونا بخبرة واسعة في تعليم التجويد والتلاوة الصحيحة باستخدام منهجيات متطورة."
          details={[
            "تدريس قواعد التجويد بأسلوب سهل وبسيط.",
            "تحفيظ القرآن الكريم بأساليب تفاعلية.",
            "متابعة مستمرة وتحليل أداء الطلاب.",
          ]}
          variant="imageOverlay"
        />
        <Section
          img={img3}
          title="بيئة تعليمية إلكترونية متطورة"
          description="يقدم التطبيق تجربة تعليمية مثالية للطلاب والمعلمين عبر منصة رقمية متكاملة."
          details={[
            "غرف دراسية تفاعلية عبر الإنترنت.",
            "تقارير دورية لمتابعة مستوى التقدم في الحفظ.",
            "إمكانية التفاعل الصوتي والمرئي بين الطلاب والمعلمين.",
          ]}
          variant="fullWidth"
        />
        <Section
          img={img4}
          title="التعليم التفاعلي والمتابعة المستمرة"
          description="نعتمد أساليب تفاعلية حديثة تجعل عملية التعلم أكثر متعة وسهولة."
          details={[
            "استخدام الفيديوهات التعليمية والتطبيقات الذكية.",
            "نظام تفاعلي يتيح للطلاب التفاعل مع المدرسين بسهولة.",
            "مراجعة دورية مع تقارير تحليلية لكل طالب.",
          ]}
        />
        <Section
          img={img5}
          title="التقييم المستمر وتحسين الأداء"
          description="نقدم آليات تقييم دورية لمتابعة مستوى تقدم الطلاب وتحسين مستواهم."
          details={[
            "اختبارات قصيرة لتقييم مستوى الطالب.",
            "توجيه ملاحظات شخصية لكل طالب.",
            "خطط تعليمية متكيفة بناءً على التقييمات.",
          ]}
          variant="imageOverlay"
        />
        <Section
          img={img6}
          title="نظام تتبع التقدم والتحفيز"
          description="يمكن للطلاب وأولياء الأمور متابعة تقدم الحفظ من خلال نظام التتبع الذكي."
          details={[
            "لوحة تحكم تعرض أداء الطالب بالتفصيل.",
            "جوائز تحفيزية عند تحقيق الإنجازات.",
            "متابعة دقيقة لتحقيق الأهداف التعليمية.",
          ]}
        />
        <Section
          img={img7}
          title="شهادات إتمام الدورات"
          description="نقدم شهادات إتمام لكل طالب يجتاز الدورة التدريبية بنجاح."
          details={[
            "شهادات معتمدة لجميع المستويات.",
            "إمكانية مشاركة الشهادات عبر الإنترنت.",
            "توثيق إنجازات الطلاب على المدى الطويل.",
          ]}
          buttonText="احصل على شهادتك"
          variant="fullWidth"
        />
        <CardList />
        <StatsSection />
      </div>
    </div>
  );
}

export default Teachers;
