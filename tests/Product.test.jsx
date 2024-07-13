import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Product from "../src/pages/Product/Product";

vi.mock("react-router-dom", async () => {
  return {
    ...(await vi.importActual("react-router-dom")),
    useParams: () => ({ productId: "1" }),
    useOutletContext: () => ({
      data: [
        {
          image: "",
          title: "",
          rating: { rate: 1, count: 1 },
          description: "",
          price: 1,
          id: 1,
        },
      ],
    }),
  };
});

describe("Product unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<Product />, { wrapper: MemoryRouter });

    expect(container).toBeInTheDocument();
  });
});
