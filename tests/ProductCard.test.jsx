import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "../src/components/ProductCard/ProductCard";

describe("ProductCard unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const testProduct = {
      id: 1,
      image: "",
      price: 4.5,
      title: "Example Product",
    };

    const { container } = render(<ProductCard product={testProduct} />, {
      wrapper: MemoryRouter,
    });

    expect(container).toBeInTheDocument();
  });
});
