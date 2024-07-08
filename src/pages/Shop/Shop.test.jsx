import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Shop from "./Shop";

describe("Shop unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<Shop />);

    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("Shop Page");
  });
});
