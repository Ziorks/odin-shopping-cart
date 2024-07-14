import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Product from "../src/pages/Product/Product";
import userEvent from "@testing-library/user-event";

const testData = [
  {
    image: "image",
    title: "title",
    rating: { rate: 1, count: 2 },
    description: "description",
    price: 3,
    id: 4,
  },
];

const handleAdd = vi.fn();

vi.mock("react-router-dom", async () => {
  return {
    ...(await vi.importActual("react-router-dom")),
    useParams: () => ({ productId: "4" }),
    useOutletContext: () => ({
      data: testData,
      handleAdd,
    }),
  };
});

beforeEach(() => {
  handleAdd.mockClear();
});

describe("Product", () => {
  describe("Information Display", () => {
    it("should render a heading with text content equal to product title", () => {
      render(<Product />, { wrapper: MemoryRouter });

      const heading = screen.getByRole("heading", { name: testData[0].title });

      expect(heading).toBeInTheDocument();
    });

    it("should render an img with product image as src and product title as alt", () => {
      render(<Product />, { wrapper: MemoryRouter });

      const image = screen.getByRole("img");

      expect(image).toHaveAttribute("src", testData[0].image);
      expect(image).toHaveAttribute("alt", testData[0].title);
    });

    it("should display the product rating in the form 'Rated <rating.rate> of 5 by <rating.count> users'", () => {
      render(<Product />, { wrapper: MemoryRouter });

      const { rate, count } = testData[0].rating;
      const rating = screen.getByText(`Rated ${rate} of 5 by ${count} users`);

      expect(rating).toBeInTheDocument();
    });

    it("should display the product price in the form '$X.XX'", () => {
      render(<Product />, { wrapper: MemoryRouter });

      const price = screen.getByText(`$${testData[0].price.toFixed(2)}`);

      expect(price).toBeInTheDocument();
    });

    it("should display the product description", () => {
      render(<Product />, { wrapper: MemoryRouter });

      const description = screen.getByText(testData[0].description);

      expect(description).toBeInTheDocument();
    });
  });

  describe("Add to cart form", () => {
    it("should render a form", () => {
      render(<Product />, { wrapper: MemoryRouter });

      const form = screen.getByRole("form", { name: "addToCart" });

      expect(form).toBeInTheDocument();
    });

    it("should render a submit button with text 'Add to cart'", () => {
      render(<Product />, { wrapper: MemoryRouter });

      const submitBtn = screen.getByRole("button", { name: "Add to cart" });

      expect(submitBtn).toBeInTheDocument();
      expect(submitBtn).toHaveAttribute("type", "submit");
    });

    it("should run handleAdd on submit", async () => {
      const user = userEvent.setup();
      render(<Product />, { wrapper: MemoryRouter });

      const submitBtn = screen.getByRole("button", { name: "Add to cart" });

      await user.click(submitBtn);

      expect(handleAdd.mock.calls).toHaveLength(1);
    });

    it("should not run handleAdd without submitting", () => {
      render(<Product />, { wrapper: MemoryRouter });

      expect(handleAdd.mock.calls).toHaveLength(0);
    });
  });
});
