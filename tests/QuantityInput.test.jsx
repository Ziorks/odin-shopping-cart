import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import QuantityInput from "../src/components/QuantityInput";

describe("QuantityInput unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(
      <QuantityInput
        quantity={1}
        handleIncrement={() => {}}
        handleDecrement={() => {}}
        handleQuantityChange={() => {}}
      />,
      {
        wrapper: MemoryRouter,
      }
    );

    expect(container).toBeInTheDocument();
  });
});
