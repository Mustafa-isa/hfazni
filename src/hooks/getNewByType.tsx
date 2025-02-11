import { useState, useEffect } from "react";
import client from "../api/client";

const useNewsData = (query: string) => {
  const [newsData, setNewsData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await client.get(
          `/api/News/news-by-type?natureNews=${query}`
        );
        setNewsData(response.data.data);
      } catch (e) {
        setError("Failed to fetch data");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query]);

  return { newsData, loading, error };
};

export default useNewsData;
