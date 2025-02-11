import React from "react";
import ImageCard from "../../common/imgCard/ImgCard";

function News({ newsData }: any) {
  function shuffleArray(array: string[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Array of images (use the first image from the newsData)
  const images = newsData.length > 0 ? [newsData[0].image] : [];

  // Split newsData into two arrays
  const mid = Math.ceil(newsData.length / 2);
  const firstHalf = newsData.slice(0, mid);
  const secondHalf = newsData.slice(mid);

  return (
    <div>
      <h3 className="text-2xl font-bold m-7">الاخبار</h3>
      <div className="flex items-center flex-col lg:flex-row gap-5">
        {/* First column displaying cards */}
        <div className="flex-col flex gap-10">
          {firstHalf.map((card: any, index: number) => (
            <ImageCard
              key={card.id}
              imgSrc={card.images[0]}
              title={card.title}
              text={card.description}
              created_at={card.createdAt}
              width=" !w-full "
              height={index % 2 !== 0 ? "h-64" : "h-96"}
              id={card.id} // Ensure to pass the correct id here
            />
          ))}
        </div>

        {/* Second column displaying cards */}
        <div className="flex-col flex  gap-10">
          {secondHalf.map((card: any, index: number) => (
            <ImageCard
              key={card.id}
              imgSrc={card.images[0]}
              title={card.title}
              text={card.description}
              width=" !w-full "
              created_at={card.createdAt}
              height={index % 2 === 0 ? "h-64" : "h-96"}
              id={card.id} // Ensure to pass the correct id here
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
