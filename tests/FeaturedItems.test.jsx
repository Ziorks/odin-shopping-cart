import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import FeaturedItems from "../src/components/FeaturedItems/FeaturedItems";

vi.mock("react-router-dom", async () => {
  return {
    ...(await vi.importActual("react-router-dom")),
    useOutletContext: () => ({ data: [] }),
  };
});

describe("FeaturedItems unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<FeaturedItems />);

    expect(container).toBeInTheDocument();
  });
});
