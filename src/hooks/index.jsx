import { useEffect, useState } from "react";

export const useFetchSingleProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let ignore = false;

    const getProduct = async () => {
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
        const data = await resp.json();
        if (!ignore) {
          setProduct(data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    getProduct();

    return () => {
      ignore = true;
    };
  }, []);

  return { product, isLoading, isError };
};

export const useFetchAllProducts = () => {
  const { product, isLoading, isError } = useFetchSingleProduct("");
  return { products: product, isLoading, isError };
};
