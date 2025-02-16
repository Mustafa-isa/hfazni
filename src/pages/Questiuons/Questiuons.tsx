import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import OverLay from "../../components/common/OverLay/OverLay";

const questions = [
  {
    question: "كيف يمكنني التسجيل في التطبيق؟",
    answer:
      "يمكنك التسجيل عن طريق إدخال بياناتك الشخصية وإتباع الخطوات الموجودة في التطبيق.",
  },
  {
    question: "هل التطبيق مجاني؟",
    answer: "التطبيق يحتوي على ميزات مجانية وأخرى مدفوعة حسب الحاجة.",
  },
  {
    question: "كيف يمكنني التواصل مع المعلمين؟",
    answer: "يمكنك التواصل من داخل التطبيق",
  },
  // {
  //   question: "هل يمكنني تتبع تقدم طفلي؟",
  //   answer: "نعم، يمكنك تتبع تقدم طفلك من خلال لوحة التحكم الخاصة بالحساب.",
  // },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نقبل الدفع عبر البطاقات الائتمانية والمحافظ الإلكترونية المختلفة.",
  },
  {
    question: "هل تتوفر شهادات عند إكمال الدورات؟",
    answer: "نعم، يحصل كل طالب على شهادة عند إتمام   حفظ المقرر.",
  },
  {
    question: "كيف يمكنني إعادة تعيين كلمة المرور؟",
    answer:
      'يمكنك إعادة تعيينها من خلال خيار "نسيت كلمة المرور" في شاشة تسجيل الدخول.',
  },
  {
    question: "ما هي الأجهزة التي يدعمها التطبيق؟",
    answer: "يدعم التطبيق جميع الأجهزة الذكية سواءً الأندرويد  .",
  },
  {
    question: "كيف يمكنني الإبلاغ عن مشكلة؟",
    answer: "يمكنك الإبلاغ عن مشكلة عبر نموذج الدعم الفني داخل  التطبيق (من خلال صفحه تواصل معنا).",
  },
  {
    question: "هل هناك دعم فني متاح؟",
    answer: "نعم، يتوفر دعم فني على مدار الساعة لحل مشكلات المستخدمين.",
  },
];

const QuestionCard: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-300 py-4 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-primary">{question}</h3>
        {isOpen ? (
          <FaChevronUp className="text-primary" />
        ) : (
          <FaChevronDown className="text-primary" />
        )}
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 mt-2">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const Questions: React.FC = () => {
  return (
    <div>
      <OverLay title="الاستفسارات" />
      <div className="w-[90%] max-w-4xl mx-auto py-12">
        {questions.map((q, index) => (
          <QuestionCard key={index} question={q.question} answer={q.answer} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
