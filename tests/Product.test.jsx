import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Product from "../src/pages/Product/Product";

describe("Product unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<Product />, { wrapper: MemoryRouter });

    expect(container).toBeInTheDocument();
  });
});
