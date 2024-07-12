import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Cart from "../src/pages/Cart/Cart";

describe("Cart unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<Cart />, { wrapper: MemoryRouter });

    expect(container).toBeInTheDocument();
  });
});
