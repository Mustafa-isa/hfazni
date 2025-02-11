import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/images/Link → 1.jpg.png";
import img2 from "../../../assets/images/Link → 1.jpg.png";
import img3 from "../../../assets/images/Link → 1.jpg.png";
import { FaClock, FaUser } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

// Type definition for a single focus item
interface FocusItemProps {
  img: string;
  title: string;
  description: string;
}

// Items array with data
const items: FocusItemProps[] = [
  {
    img: img1,
    title: "Luxury Villas",
    description: `10 Brilliant Ways To Decorate Your Home`,
  },
  {
    img: img2,
    title: "Modern Apartments",
    description: `10 Brilliant Ways To Decorate Your Home`,
  },
  {
    img: img3,
    title: "Beachfront Properties",
    description: `10 Brilliant Ways To Decorate Your Home`,
  },
];

// Component for displaying a single focus item
const FocusItem: React.FC<FocusItemProps> = ({ img, title, description }) => (
  <motion.div
    className="flex flex-col items-center text-center border rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 bg-white"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {/* Image */}
    <img
      src={img}
      alt={title}
      className="h-72 w-full object-cover rounded-t-md"
    />

    {/* Content */}
    <div className="px-4 py-4">
      {/* Info Section */}
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center space-x-2">
          <FaUser className="text-primary text-base" />
          <span className="text-mainText text-sm">By: User</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaUser className="text-primary text-base" />
          <span className="text-mainText text-sm">Interior</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaSackDollar className="text-primary text-base" />
          <span className="text-mainText text-sm">Decorate</span>
        </div>
      </div>

      {/* Description */}
      <h3 className="text-mainText text-lg font-semibold mb-3">
        {description}
      </h3>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-secondaryTextColor">
        <div className="flex items-center space-x-2">
          <FaClock className="text-primary" />
          <span>12:30 PM</span>
        </div>
        <button className="text-primary font-medium hover:underline">
          READ MORE
        </button>
      </div>
    </div>
  </motion.div>
);

// Main component
const ServiceCollection: React.FC = () => (
  <div className="py-20 bg-gray-50">
    <div className="w-[90%] max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <motion.button
          className="text-primary uppercase font-medium"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          New Collections
        </motion.button>
        <h2 className="mt-4 text-secondaryTextColor font-bold text-4xl">
          Latest Collections
        </h2>
      </div>

      {/* Grid of items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default ServiceCollection;
