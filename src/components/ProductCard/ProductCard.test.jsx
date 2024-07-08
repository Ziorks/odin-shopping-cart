import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProductCard from "./ProductCard";

describe("ProductCard unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<ProductCard />);

    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("Product Card");
  });
});
