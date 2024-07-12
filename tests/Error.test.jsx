import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Error from "../src/pages/Error/Error";

describe("Error unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<Error />, { wrapper: MemoryRouter });

    expect(container).toBeInTheDocument();
  });
});
