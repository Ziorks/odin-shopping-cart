import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./Home";

describe("Home unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<Home />);

    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("Home Page");
  });
});
