import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Cart from "../src/pages/Cart/Cart";

vi.mock("react-router-dom", async () => {
  return {
    ...(await vi.importActual("react-router-dom")),
    useOutletContext: () => ({ cart: [] }),
  };
});

describe("Cart unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<Cart />, { wrapper: MemoryRouter });

    expect(container).toBeInTheDocument();
  });
});
