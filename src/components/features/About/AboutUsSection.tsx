import { motion } from "framer-motion";
import aboutImage from "../../../assets/images/13.png.png";

// import vector1 from "../../../../assets/images/Vector(7).png";
// import vector2 from "../../../../assets/images/Icon(7).png";
// import vector3 from "../../../../assets/images/Vector(8).png";

export default function AboutUsSection() {
  return (
    <div className="my-12 w-[95vw] lg:w-[90vw] mx-auto flex justify-center gap-12 flex-wrap">
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
        <img src={aboutImage} alt="about" className="w-full" />
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
        <span className="text-primary">About Us</span>
        <h1 className="text-5xl my-6 text-mainText font-bold">
          Dream Living Spaces
          <br />
          Setting New Build
        </h1>
        <p className="text-secondaryTextColor mt-6">
          Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor
          <br />
          incididunt ut labore etLorem ipsum dolor sit amet, consectetur
          <br />
          adipisic do eiusmod tempor incididunt ut labore et
        </p>

      
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
