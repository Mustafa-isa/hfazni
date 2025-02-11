import React from "react";
import Carousel from "../../common/Slides/Slides";

interface SlideData {
  id: number;
  image: string;
  text: string;
  date: string;
}

interface NewsBannerProps {
  UrgentData: {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    images: string[];
  }[];
}

const CarsoulGlobal: React.FC<NewsBannerProps> = ({ UrgentData }) => {
  if (!UrgentData || UrgentData.length === 0) {
    return (
      <div className="my-12 flex justify-center items-center">
        <p className="text-lg text-gray-500">لا توجد أخبار عاجلة حالياً</p>
      </div>
    );
  }

  const slidesData: SlideData[] = UrgentData.map((newsItem) => ({
    id: newsItem.id,
    image: newsItem.images[0] || "", 
    text: newsItem.description.substring(0, 100) + "...",
    date: new Date(newsItem.createdAt).toLocaleDateString(), 
  }));

  const handleCardClick = (cardId: number) => {
    console.log(`Card with ID ${cardId} clicked`);
  };

  return (
    <div className="my-12">
      <div className="flex justify-center gap-10 flex-wrap">
        <Carousel slidesData={slidesData} width="w-full" height="h-[650px]" />
      </div>
    </div>
  );
};

export default CarsoulGlobal;
