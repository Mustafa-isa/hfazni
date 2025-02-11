import React from "react";
import { motion } from "framer-motion";

import img1 from "../../../assets/images/Vector(8).png"; // Update the image paths as per your assets
import img2 from "../../../assets/images/Vector(9).png";
import img3 from "../../../assets/images/Vector(3).png";
import img4 from "../../../assets/images/Vector(4).png";
import img5 from "../../../assets/images/Vector(6).png";
import img6 from "../../../assets/images/Vector(7).png";

// Define the type for a single item
interface FocusItemProps {
  img: string;
  title: string;
  description: string;
}

// Define the type for the items array
const items: FocusItemProps[] = [
  {
    img: img1,
    title: "Luxury Villas",
    description:
      "Explore our collection of luxury villas, offering elegance and comfort for your dream home.",
  },
  {
    img: img2,
    title: "Modern Apartments",
    description:
      "Find stylish and spacious modern apartments that meet your lifestyle needs.",
  },
  {
    img: img3,
    title: "Beachfront Properties",
    description:
      "Own a piece of paradise with our beachfront properties that offer stunning ocean views.",
  },
  {
    img: img4,
    title: "Family Homes",
    description:
      "Discover family-friendly homes in safe and welcoming communities.",
  },
  {
    img: img5,
    title: "Eco-Friendly Houses",
    description:
      "Invest in sustainable homes with eco-friendly designs that reduce your carbon footprint.",
  },
  {
    img: img6,
    title: "Smart Homes",
    description:
      "Upgrade your living with smart homes equipped with the latest technology for convenience and security.",
  },
];

// Component for displaying a single focus item
const FocusItem: React.FC<FocusItemProps> = ({ img, title, description }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center border p-4 rounded-lg shadow-lg hover:border-b-4 hover:border-primary hover:bg-primary/10 transition-all bg-white duration-300 hover:scale-105 transform"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.img
        src={img}
        alt={title}
        className="w-40 h-40 object-cover rounded-lg transform transition duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <motion.button
        className="mt-4 text-lg font-medium py-2 px-4 rounded-full border border-transparent bg-transparent text-primary hover:text-white hover:bg-primary transition-colors duration-300 shadow-md hover:shadow-lg"
        whileHover={{ scale: 1.1, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        Explore More
      </motion.button>
    </motion.div>
  );
};

// Main component
const OurCoreServices: React.FC = () => {
  return (
    <div className="py-40 bg-primary/5">
      <div className="w-[95vw] lg:w-[90vw] mx-auto">
        <div className="w-full text-center flex flex-col items-center mb-6">
          <motion.button
            className="bg-primary/20 text-primary p-2 rounded-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Core Services
          </motion.button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <FocusItem
              key={index}
              img={item.img}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCoreServices;
