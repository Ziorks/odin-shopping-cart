import { useEffect, useState } from "react";

export const useFetchProduct = (productId) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let ignore = false;

    const fetchProduct = async () => {
      try {
        const resp = await fetch(
          `https://fakestoreapi.com/products/${productId}`,
          {
            mode: "cors",
          }
        );
        if (!resp.ok) {
          throw new Error("server error");
        }
        const fetchedData = await resp.json();
        if (!ignore) {
          setData(fetchedData);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchProduct();

    return () => {
      ignore = true;
    };
  }, [productId]);

  return { data, isLoading, isError };
};

export const useFetchAllProducts = () => {
  return useFetchProduct("");
};
