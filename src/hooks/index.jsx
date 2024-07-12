import { useEffect, useState } from "react";

const fetchProduct = async (id) => {
  try {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`, {
      mode: "cors",
    });
    if (!resp.ok) {
      throw new Error("server error");
    }
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const useFetchMultipleProducts = (productIds) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let ignore = false;

    const fetchProducts = async () => {
      const promises = [];
      productIds.forEach((id) => promises.push(fetchProduct(id)));
      try {
        const fetchedProducts = await Promise.all(promises);
        if (!ignore) {
          setProducts(fetchedProducts);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchProducts();

    return () => {
      ignore = true;
    };
  }, [productIds]);

  return { products, isLoading, isError };
};

export const useFetchSingleProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let ignore = false;

    const getProduct = async () => {
      try {
        const fetchedProduct = await fetchProduct(productId);
        if (!ignore) {
          setProduct(fetchedProduct);
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
  }, [productId]);

  return { product, isLoading, isError };
};

export const useFetchAllProducts = () => {
  const { product, isLoading, isError } = useFetchSingleProduct("");
  return { products: product, isLoading, isError };
};
