import { useState, useEffect } from "react";
import client from "../api/client";

const useAddData = (query: string) => {
  const [newsData, setNewsData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await client.get(
          `/api/Advertisements/get-advertisements-by-place?advertisementsPlace=${query}`
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

export default useAddData;
