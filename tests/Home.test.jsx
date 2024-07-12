import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "../src/pages/Home/Home";

describe("Home unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<Home />, { wrapper: MemoryRouter });

    expect(container).toBeInTheDocument();
  });
});
