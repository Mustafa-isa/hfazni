import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import img1 from "../../../assets/images/done-plus/Frame 1.png";
import img2 from "../../../assets/images/home.png";

function HomeHero() {
  return (
    <div
      className="absolute top-0 h-[90vh] w-full overflow-hidden"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 bg-primary/70 w-full h-full flex flex-col md:flex-row-reverse items-center justify-center gap-12 text-center md:text-left text-white py-4 px-6">
        {/* Text and Content Layer */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          {/* Social Media Icons */}
          <motion.div
            className="flex items-center gap-3  "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-white p-2 rounded-full">
              <a
                href="https://wa.me/01556305800" 
                // target="_blank" // Replace with your WhatsApp number 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <FaWhatsapp size={25} className="text-teal-500 font-thin" />
              </a>
            </div>
            <div className="bg-white p-2 rounded-full">
              <FaFacebook size={25} className="text-teal-500 font-thin" />
            </div>
          </motion.div>

          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-white mb-2 font-bold text-sm lg:text-3xl xl:text-4xl">
              {/* <WavyText
                text="Hafzni"
                delay={0.1}
                duration={0.05}
                replay={true}
              /> */}
              <br />
              <span className="text-white">
                تعلم بسهولة في جلسات فردية
                <br />
                مع أمهر المعلمين والمعلمات
              </span>{" "}
              في تطبيق حفظني
            </h1>
          </motion.div>

          {/* Buttons and Pause Icon */}
          <motion.div
            className="flex items-center justify-center gap-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* <div className="p-5 rounded-full shadow">
              <FaPauseCircle
                size={25}
                className="text-secondaryTextColor font-thin"
              />
            </div> */}
          </motion.div>

          {/* App Download Buttons */}
          <motion.div
            className="flex gap-6 "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.rmoztec.hafazny.quran"
              className="flex items-center gap-2 p-2 lg:px-6 lg:py-3 bg-green-600 text-white rounded-full hover:bg-green-700"
            >
              <span>Google Play</span>
            </a>
            {/* <a
              href="https://play.google.com/store/apps/details?id=com.rmoztec.hafazny.quran"
              className="flex items-center gap-2 p-2 lg:px-6 lg:py-3 bg-black text-white rounded-full hover:bg-gray-700"
            >
              <FaApple size={20} />
              <span>App Store</span>
            </a> */}
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
            className=" w-72 h-72  md:w-96 md:h-96 lg:xl:w-[600px] lg:xl:h-[500px]"
            src={img2}
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
