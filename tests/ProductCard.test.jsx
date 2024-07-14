import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "../src/components/ProductCard/ProductCard";

const testProduct = {
  id: 1,
  image: "",
  price: 4.5,
  title: "Example Product",
};

describe("ProductCard", () => {
  it("should render a link to '/shop/<productId>'", () => {
    render(<ProductCard product={testProduct} />, { wrapper: MemoryRouter });

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", `/shop/${testProduct.id}`);
  });

  it("should render an img with image as src and title as alt", () => {
    render(<ProductCard product={testProduct} />, { wrapper: MemoryRouter });

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src", testProduct.image);
    expect(image).toHaveAttribute("alt", testProduct.title);
  });

  it("should display the title", () => {
    render(<ProductCard product={testProduct} />, { wrapper: MemoryRouter });

    const title = screen.getByText(testProduct.title);

    expect(title).toBeInTheDocument();
  });

  it("should display the price in the form '$X.XX'", () => {
    render(<ProductCard product={testProduct} />, { wrapper: MemoryRouter });

    const price = screen.getByText(`$${testProduct.price.toFixed(2)}`);

    expect(price).toBeInTheDocument();
  });
});
