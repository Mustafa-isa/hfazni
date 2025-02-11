import Carousel from "../../common/Slides/Slides";
import ImageCard from "../../common/imgCard/ImgCard";
import { useNavigate } from "react-router-dom";

function BreakingNews({ UrgentData }) {
  const navigate = useNavigate();

  // Prepare slides data for the Carousel
  const slidesData = UrgentData.map((newsItem) => ({
    id: newsItem.id,
    image: newsItem.images[0], 
    text: newsItem.title,
    date: new Date(newsItem.createdAt).toLocaleDateString(),
  }));

  const handleCardClick = (cardId) => navigate(`/news/${cardId}`);

  return (
    <div>
      <h3 className="mr-12 my-8 text-mainText text-2xl font-bold">الاخبار العاجله</h3>

      <div className="flex justify-center gap-10 items-center flex-col md:flex-row">
        <Carousel
          slidesData={slidesData}
          width="w-[100%] lg:w-[50%] xl:!w-[70%] 2xl:!w-[80%]"
          height="h-[650px]"
        />

        {/* Show maximum 3 ImageCards */}
        <div className="flex flex-col gap-10">
          {UrgentData.slice(0, 3).map((newsItem) => (
            <ImageCard
              key={newsItem.id}
              imgSrc={newsItem.images[0]}
              title={newsItem.title}
              text={newsItem.description.substring(0, 100) + "..."} 
              width="w-[310px]"
              height="h-48"
              id={newsItem.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BreakingNews;
