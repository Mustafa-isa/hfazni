import React, { useEffect, useState } from "react";
import ImageCard from "../../common/imgCard/ImgCard";
import client from "../../../api/client";
function OpinionArticles() {
  const [articles, setArticles] = useState<any[]>([]); // State to store articles
  const [loading, setLoading] = useState<boolean>(true); // State for loading

  // Fetch data using Axios
  useEffect(() => {
    client
      .get("/api/MeinungNews/get-meinungNews?userId=")
      .then((response) => {
        setArticles(response.data.data); // Set the response data to state
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  function handleCardClick(id: number) {
    console.log(`Card clicked with ID: ${id}`);
  }

  return (
    <div className="mr-4">
      <h3 className="text-2xl font-bold m-7">مقالات الراي</h3>
      <div className="bg-[#D9D9D980] p-4 rounded-tr-xl rounded-tb-xl flex flex-col items-center gap-10">
        {loading ? (
          <p>Loading...</p>
        ) : (
          articles.map((article) => (
            <ImageCard
              key={article.id}
              imgSrc={article.images[0]}
              title={article.title}
              text={article.description}
              width="w-full"
              height="h-64"
              created_at={article.createdAt}
              onClick={() => handleCardClick(article.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default OpinionArticles;
