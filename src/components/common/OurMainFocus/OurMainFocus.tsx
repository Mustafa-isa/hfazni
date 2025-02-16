import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import img from "../../../assets/images/done-plus/kidsmen.svg";
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function OurMainFocus() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-[90vw] my-32 flex-row-reverse mx-auto items-center flex flex-wrap justify-center gap-12"
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className=" w-96 h-96 lg:xl:w-[600px] lg:xl:h-[600px]"
        src={img}
      />

      <motion.div variants={containerVariants}>
        <motion.h3
          variants={itemVariants}
          className="text-center md:text-right my-4 text-mainText font-semibold text-xl"
        >
          أفضل المعلمين والمعلمات
        </motion.h3>
        <motion.ul
          variants={containerVariants}
          className="flex items-end justify-start flex-col gap-5"
        >
          {[
            "جميع المعلمين حاصلين على إجازة في قراءة حفص عن عاصم، وأكثر",
            "معلمون ومعلمات مُجازون بالقراءات العشر",
            "أكثر من  معلم ومعلمة، اخترناهم بعناية من بين آلاف المتقدمين",
            "مؤهلون ومُدربون  مع جميع الفئات العمريه",
          ].map((text, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex flex-row-reverse gap-3 items-center"
            >
              <div className="bg-white shadow-md rounded-full p-2">
                <FaCheck className="text-primary" />
              </div>
              <h4 className="text-mainText text-sm md:text-md lg:text-lg">
                {text}
              </h4>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}

export default OurMainFocus;
