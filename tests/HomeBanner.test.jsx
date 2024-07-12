import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomeBanner from "../src/components/HomeBanner/HomeBanner";
import { MemoryRouter } from "react-router-dom";

describe("HomeBanner unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<HomeBanner />, { wrapper: MemoryRouter });

    expect(container).toBeInTheDocument();
  });
});
