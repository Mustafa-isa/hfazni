import React from "react";

type PortfolioHousesItemProps = {
  imgSrc: string;
  title: string;
  description: string;
  onClick: (imgSrc: string) => void; // Callback function to pass the clicked image source
};

const PortfolioHousesItem: React.FC<PortfolioHousesItemProps> = ({
  imgSrc,
  title,
  description,
  onClick,
}) => {
  return (
    <div
      className="p-4 rounded-lg cursor-pointer w-full md:w-[400px] lg:w-[450px] xl:w-[500px]"
      onClick={() => onClick(imgSrc)} // Trigger the modal on click
    >
      <img
        src={imgSrc}
        alt={title}
        className="!w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioHousesItem;
