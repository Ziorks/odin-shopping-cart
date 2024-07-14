import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter, useOutletContext } from "react-router-dom";
import Cart from "../src/pages/Cart/Cart";
import userEvent from "@testing-library/user-event";

const testData = [
  {
    quantity: 3,
    id: 1,
    title: "title",
    price: 2,
    image: "image",
  },
];

const handleRemove = vi.fn();
const handleClear = vi.fn();

vi.mock("react-router-dom", async () => {
  return {
    ...(await vi.importActual("react-router-dom")),
    useOutletContext: vi.fn(),
  };
});

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Cart", () => {
  describe("Empty Cart", () => {
    it("should display 'Your cart is empty'", () => {
      useOutletContext.mockReturnValue({ cart: [] });
      render(<Cart />, { wrapper: MemoryRouter });

      const message = screen.getByText("Your cart is empty");

      expect(message).toBeInTheDocument();
    });

    it("should render a link to '/shop' with text 'Continue shopping'", () => {
      useOutletContext.mockReturnValue({ cart: [] });
      render(<Cart />, { wrapper: MemoryRouter });

      const link = screen.getByRole("link", { name: "Continue shopping" });

      expect(link).toBeInTheDocument();
    });
  });

  describe("Cart With Items", () => {
    describe("Header", () => {
      it("should render a heading with text 'Your Cart'", () => {
        useOutletContext.mockReturnValue({ cart: testData });
        render(<Cart />, { wrapper: MemoryRouter });

        const heading = screen.getByRole("heading", { name: "Your Cart" });

        expect(heading).toBeInTheDocument();
      });

      it("should render a link to '/shop' with text 'Continue shopping'", () => {
        useOutletContext.mockReturnValue({ cart: testData });
        render(<Cart />, { wrapper: MemoryRouter });

        const link = screen.getByRole("link", { name: "Continue shopping" });

        expect(link).toBeInTheDocument();
      });
    });

    describe("Table", () => {
      it("should render a table with headers 'PRODUCT', 'QUANTITY', and 'TOTAL'", () => {
        useOutletContext.mockReturnValue({ cart: testData });
        render(<Cart />, { wrapper: MemoryRouter });

        const table = screen.getByRole("table");
        const product = screen.getByRole("columnheader", {
          name: "PRODUCT",
        });
        const quantity = screen.getByRole("columnheader", {
          name: "QUANTITY",
        });
        const total = screen.getByRole("columnheader", {
          name: "TOTAL",
        });

        expect(table).toBeInTheDocument();
        expect(table).toContainElement(product);
        expect(table).toContainElement(quantity);
        expect(table).toContainElement(total);
      });

      it("should have one row for each entry in cart", () => {
        useOutletContext.mockReturnValue({ cart: testData });
        render(<Cart />, { wrapper: MemoryRouter });

        const table = screen.getByRole("table");
        const rows = within(table).getAllByRole("row");

        expect(rows).toHaveLength(2);
      });

      it.todo(
        "should render an img using image for src and title for alt",
        () => {}
      );

      it.todo("should render the products title", () => {});

      it.todo("should render the products price in the form '$X.XX'", () => {});

      it.todo(
        "should render at least one link to '/shop/<productId>'",
        () => {}
      );

      it.todo("should render a remove button", () => {});

      it.todo("should run handleRemove when clicked", () => {});

      it.todo("should not run handleRemove if not clicked", () => {});

      it.todo(
        "should render total price (price*quantity) in the form '$X.XX'",
        () => {}
      );
    });

    describe("Footer", () => {
      it("should display 'Estimated total' with total in the form '$X.XX' within (sum of quantity*price of each product)", () => {
        useOutletContext.mockReturnValue({ cart: testData });
        render(<Cart />, { wrapper: MemoryRouter });

        const estimatedTotal = screen.getByText("Estimated total");
        const total = within(estimatedTotal).getByText("$6.00");

        expect(total).toBeInTheDocument();
      });

      it("should render a button with text 'Checkout'", () => {
        useOutletContext.mockReturnValue({ cart: testData });
        render(<Cart />, { wrapper: MemoryRouter });

        const button = screen.getByRole("button", { name: "Checkout" });

        expect(button).toBeInTheDocument();
      });

      it("should call handleClear when checkout button is clicked", async () => {
        const user = userEvent.setup();
        useOutletContext.mockReturnValue({ cart: testData, handleClear });
        render(<Cart />, { wrapper: MemoryRouter });

        const button = screen.getByRole("button", { name: "Checkout" });

        await user.click(button);

        expect(handleClear.mock.calls).toHaveLength(1);
      });

      it("should not call handleClear if checkout button is not clicked", () => {
        useOutletContext.mockReturnValue({ cart: testData, handleClear });
        render(<Cart />, { wrapper: MemoryRouter });

        expect(handleClear.mock.calls).toHaveLength(0);
      });
    });
  });
});
