import { useState, useEffect } from "react";

interface useFetchOptions {
  url: string;
  skip?: boolean;
}

export default function useFetch<T>({ url, skip = false }: useFetchOptions) {
  const [data, setData] = useState<null | T>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, { method: "GET" });
      setLoading(false);
      if (!response.ok) {
        setError("something went wrong");
        setLoading(false);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
        setLoading(false)
        setError("Something went wrong")
        console.error(error)
    }
  };

  useEffect(() => {
    if (!skip) getData();
  }, [skip]);

  return { data, loading, error, reFetch: getData };
}
