import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomeBanner from "./HomeBanner";

describe("HomeBanner unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<HomeBanner />);

    expect(container).toBeInTheDocument();
  });
});
