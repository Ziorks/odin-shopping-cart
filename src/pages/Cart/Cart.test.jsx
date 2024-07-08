import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Cart from "./Cart";

describe("Cart unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<Cart />);

    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("Cart Page");
  });
});
