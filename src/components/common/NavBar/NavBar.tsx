import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.jpeg";
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
          <div
            onClick={() => {
              window.location.href = "/";
            }}
            className=""
          >
            <motion.img
              src={logo}
              alt="Logo"
              className="lg:w-20 rounded-full p-[10px] h-12 w-12  lg:h-20  object-cover cursor-pointer"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden flex-row-reverse md:flex space-x-6">
            {[
              { name: "الرئسيه", href: "/" },
              { name: "المعلمين والمعلمات", href: "/teachers" },

              { name: "الاطفال", href: "/kids" },
              { name: "من نحن", href: "/about" },
              { name: "الاسئله الشائعه", href: "/faq" },
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
                  className={`transition-colors mx-4 font-bold cursor-pointer text-xl ${
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
                  { name: "المعلمين والمعلمات", href: "/teachers" },

                  { name: "الاطفال", href: "/kids" },
                  { name: "من نحن", href: "/about" },

                  { name: "الاسئله الشائعه", href: "/faq" },
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
