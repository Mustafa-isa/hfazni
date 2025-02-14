import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.2 } },
  };

  return (
    <div className="rtl">
      <nav
        className={`fixed rtl w-full p-3 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="w-[80vw]   flex-row-reverse flex items-center justify-between mx-auto ">
          {/* Logo */}
          <div className="bg-white  rounded-md p-2">
            <motion.img
              src="data:image/png;base64,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"
              alt="Logo"
              className="w-20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {[
              { name: "الرئسيه", href: "/" },
              { name: "الاطفال", href: "/kids" },
              { name: "من نحن", href: "/about" },
              { name: "الاسئله الشائعه", href: "/faq" },
              { name: "المعلمين والمعلمات", href: "/teachers" },
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={item.href}
                  style={{
                    fontFamily: " 'Almarai', sans-serif",
                  }}
                  className={`transition-colors font-bold cursor-pointer text-xl ${
                    scrolled ? "text-mainText" : "text-white"
                  } hover:underline`}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-teal-900 p-2 rounded"
            onClick={() => setToggle(!toggle)}
          >
            <motion.div
              initial={{ rotate: 0, scale: 1 }}
              animate={{ rotate: toggle ? 180 : 0, scale: toggle ? 1.2 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {toggle ? (
                <AiOutlineClose className="text-white w-6 h-6" />
              ) : (
                <AiOutlineMenu className="text-white w-6 h-6" />
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {toggle && (
            <motion.div
              className="absolute border border-primary top-20 right-0 w-64 bg-white shadow-md rounded-lg p-4 md:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <ul className="space-y-4  text-right">
                {[
                  { name: "الرئسيه", href: "/" },
                  { name: "الاطفال", href: "/kids" },
                  { name: "الاعمال", href: "/business" },
                  { name: "الاسئله الشائعه", href: "/faq" },
                  { name: "المدونه", href: "/blog" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a href={item.href} className="text-mainText font-bold">
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Header;
