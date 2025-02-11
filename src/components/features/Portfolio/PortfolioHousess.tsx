import React, { useState } from "react";
import { motion } from "framer-motion";
import PortfolioHousesItem from "./PortfolioHousesItem";
import house1 from "../../../assets/images/Container(1).png";
import house2 from "../../../assets/images/Container.png";
import house3 from "../../../assets/images/1.jpg.png";
import house4 from "../../../assets/images/Container(1).png"; // New images added
import house5 from "../../../assets/images/Container.png";
import house6 from "../../../assets/images/Container.png";
import house7 from "../../../assets/images/Container(1).png";
import house8 from "../../../assets/images/1.jpg.png";
import house9 from "../../../assets/images/Container(1).png";

const houses = [
  {
    imgSrc: house3,
    title: "Elegant Villa",
    description: "An elegant villa located in a serene environment.",
  },
  {
    imgSrc: house1,
    title: "Modern Luxury House",
    description: "A spacious and modern luxury house with premium amenities.",
  },
  {
    imgSrc: house2,
    title: "Cozy Family Home",
    description: "A comfortable and cozy family home with a beautiful garden.",
  },
  {
    imgSrc: house3,
    title: "Elegant Villa",
    description: "An elegant villa located in a serene environment.",
  },
  {
    imgSrc: house4,
    title: "Beachfront Property",
    description: "A stunning beachfront property with ocean views.",
  },
  {
    imgSrc: house5,
    title: "Urban Loft",
    description: "A stylish urban loft with an industrial design.",
  },
  {
    imgSrc: house7,
    title: "Mountain Retreat",
    description: "A secluded mountain retreat with breathtaking views.",
  },
  {
    imgSrc: house6,
    title: "Countryside Cottage",
    description: "A charming cottage in the peaceful countryside.",
  },
  {
    imgSrc: house7,
    title: "Mountain Retreat",
    description: "A secluded mountain retreat with breathtaking views.",
  },
  {
    imgSrc: house8,
    title: "Lake House",
    description: "A serene lakeside house with a private dock.",
  },
  {
    imgSrc: house7,
    title: "Mountain Retreat",
    description: "A secluded mountain retreat with breathtaking views.",
  },
  {
    imgSrc: house9,
    title: "Modern Apartment",
    description: "A sleek and modern apartment in the city center.",
  },
];

function PortfolioHousess() {
  const [modalImage, setModalImage] = useState<string | null>(null); // Modal image state

  const handleImageClick = (imgSrc: string) => {
    setModalImage(imgSrc); // Set the clicked image in the modal state
  };

  const handleCloseModal = () => {
    setModalImage(null); // Close the modal
  };

  return (
    <div>
      <div className="w-[95vw] lg:w-[90vw] xl:w-[80vw] mx-auto my-12 flex flex-wrap justify-between gap-6">
        {houses.map((house, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PortfolioHousesItem
              imgSrc={house.imgSrc}
              title={house.title}
              description={house.description}
              onClick={handleImageClick} // Pass the click handler
            />
          </motion.div>
        ))}
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleCloseModal} // Close the modal on background click
        >
          <div className="relative">
            <img
              src={modalImage}
              alt="Modal"
              className="w-[70vw] h-[60vh]  z-50 rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={handleCloseModal} // Close button
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioHousess;
