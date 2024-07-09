import { useEffect, useState } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let ignore = false;

    const getProducts = async () => {
      try {
        const resp = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
        });
        if (!resp.ok) {
          throw new Error("server error");
        }
        const data = await resp.json();
        if (!ignore) {
          setProducts(data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    getProducts();

    return () => {
      ignore = true;
    };
  }, []);

  return { products, isLoading, isError };
};
