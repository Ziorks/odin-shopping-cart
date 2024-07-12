import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";

describe("Navbar unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<Navbar />, { wrapper: MemoryRouter });

    expect(container).toBeInTheDocument();
  });
});
