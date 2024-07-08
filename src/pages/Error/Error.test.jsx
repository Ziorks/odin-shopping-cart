import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Error from "./Error";

describe("Error unit tests", () => {
  it("test test", () => {
    expect(true).toBe(true);
  });

  it("can test renders", () => {
    const { container } = render(<Error />);

    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("Error Page");
  });
});
