import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "./Navbar";

describe("Navbar unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<Navbar />);

    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("Navbar");
  });
});
