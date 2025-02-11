import { motion } from "framer-motion";
import aboutImage from "../../../assets/images/Frame 4.png";

// import vector1 from "../../../../assets/images/Vector(7).png";
// import vector2 from "../../../../assets/images/Icon(7).png";
// import vector3 from "../../../../assets/images/Vector(8).png";

export default function ServicesAboutSection() {
  return (
    <div className="my-12 w-[95vw] lg:w-[90vw] mx-auto flex justify-center gap-32 flex-wrap">
      {/* Image Section */}
      <motion.div
        className="w-full lg:w-[45%]"
        initial={{ opacity: 0, x: -200, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.6, -0.05, 0.01, 0.99], // Ease effect for a smooth, more dynamic transition
        }}
      >
        <img src={aboutImage} alt="about" className="w-full h-[60vh]" />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full lg:w-[45%]"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <span className="bg-primary/10  text-primary py-2 px-4 rounded-2xl">
          About Us
        </span>
        <h1 className="text-5xl my-6 text-mainText font-bold">
          The Leading houses
          <br />
          Rental Marketplace
        </h1>
        <p className="text-secondaryTextColor my-12">
          It is a long established fact that a reader will be distracted by the
          <br />
          readable content of a page when looking at its layout. The point of
          <br />
          using Lorem Ipsum is, using 'Content here, content here', making it
          <br />
          look like readable English. 
        </p>
        <button className=" py-3 px-6 bg-primary text-white">
          About Us
        </button>

        <motion.div
          className="mt-8 flex flex-wrap gap-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
}
