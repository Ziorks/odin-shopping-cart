import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Shop from "../src/pages/Shop/Shop";

describe("Shop unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<Shop />, { wrapper: MemoryRouter });

    expect(container).toBeInTheDocument();
  });
});
