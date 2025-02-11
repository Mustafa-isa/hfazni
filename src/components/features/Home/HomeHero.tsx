import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPauseCircle,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { motion } from "framer-motion";
import WavyText from "../../common/CurvyText/CurveText";

function HomeHero() {
  return (
    <div
      className="absolute top-0 h-[90vh] w-full overflow-hidden"
      style={{
        backgroundImage: `url(${"https://moddakir.com/wp-content/uploads/2023/04/32515-copy-2-scaled.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 bg-primary/70 w-full h-full flex flex-col md:flex-row-reverse items-center justify-center gap-12 text-center md:text-left text-white py-12 px-6">
        {/* Text and Content Layer */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          {/* Social Media Icons */}
          <motion.div
            className="flex items-center gap-3 flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-white p-2 rounded-full">
              <FaFacebook size={25} className="text-teal-500 font-thin" />
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaLinkedin size={25} className="text-teal-500 font-thin" />
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaInstagram size={25} className="text-teal-500 font-thin" />
            </div>
          </motion.div>

          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex gap-1 mb-12 items-center justify-center md:justify-start">
              <FaHome className="text-primary" />
            </div>

            <h1 className="text-white mb-2 font-bold text-5xl">
              <WavyText
                text="Hafzni"
                delay={0.1}
                duration={0.05}
                replay={true}
              />
              <br />
              <span className="text-white">
                تعلم بسهولة في جلسات فردية
                <br />
                مع أمهر المعلمين والمعلمات
              </span>{" "}
              حفظني
            </h1>
          </motion.div>

          {/* Buttons and Pause Icon */}
          <motion.div
            className="flex items-center justify-center gap-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="p-5 rounded-full shadow">
              <FaPauseCircle
                size={25}
                className="text-secondaryTextColor font-thin"
              />
            </div>
          </motion.div>

          {/* App Download Buttons */}
          <motion.div
            className="flex gap-6 mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700">
              <FaGooglePlay size={20} />
              <span>Google Play</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-700">
              <FaApple size={20} />
              <span>App Store</span>
            </button>
          </motion.div>
        </div>

        {/* Hero Image with Vertical Translation Animation */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: [0, 20, 0] }} // Vertical movement without disappearing
          transition={{
            duration: 3, // Duration of each loop
            repeat: Infinity, // Infinite loop for continuous animation
            repeatType: "loop", // Loops back to the beginning
            ease: "easeInOut", // Smooth easing
          }}
          className="flex-shrink-0"
        >
          <img
            className=""
            src="https://moddakir.com/wp-content/uploads/2023/04/single-welcome1-copy.webp"
            alt="Hero"
          />
        </motion.div>
      </div>

      {/* Curvy Bottom Section */}
      <motion.div
        className="absolute bottom-0  left-0 right-0"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className=" h-[120px]  z"
        >
          <motion.path
            fill="#fff"
            d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,144C672,128,768,96,864,85.3C960,75,1056,85,1152,106.7C1248,128,1344,160,1392,176L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
            animate={{
              d: [
                "M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,144C672,128,768,96,864,85.3C960,75,1056,85,1152,106.7C1248,128,1344,160,1392,176L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z",
                "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,96C672,96,768,128,864,144C960,160,1056,160,1152,144C1248,128,1344,96,1392,80L1440,64V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z",
                "M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,144C672,128,768,96,864,85.3C960,75,1056,85,1152,106.7C1248,128,1344,160,1392,176L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z",
              ],
            }}
            transition={{
              duration: 6, // Slower duration for smoother animation
              repeat: Infinity, // Infinite loop
              repeatType: "mirror", // Mirrors the animation for a more natural flow
              ease: "easeInOut", // Smooth easing
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

export default HomeHero;
