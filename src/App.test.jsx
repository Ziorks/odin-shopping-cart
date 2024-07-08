import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Test tests", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<div>Test div</div>);

    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("Test div");
  });
});
