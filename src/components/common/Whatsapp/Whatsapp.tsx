import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <motion.a
    href="https://wa.me/201556305800" // Updated with Egypt's country code (+20)
    target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[100000] bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg"
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <FaWhatsapp size={30} />
    </motion.a>
  );
};

export default WhatsAppButton;
