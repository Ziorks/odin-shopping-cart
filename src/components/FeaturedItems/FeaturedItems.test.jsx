import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FeaturedItems from "./FeaturedItems";

describe("FeaturedItems unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<FeaturedItems />);

    expect(container).toBeInTheDocument();
  });
});
