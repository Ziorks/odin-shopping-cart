import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomeBanner from "../src/components/HomeBanner";
import { MemoryRouter } from "react-router-dom";

describe("HomeBanner", () => {
  it("should render a heading with some text", () => {
    render(<HomeBanner />, { wrapper: MemoryRouter });

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).not.toBeEmptyDOMElement();
  });

  it("should render a link with the text 'SHOP NOW'", () => {
    render(<HomeBanner />, { wrapper: MemoryRouter });

    const link = screen.getByRole("link", { name: "SHOP NOW" });

    expect(link).toBeInTheDocument();
  });

  it("should link to '/shop'", () => {
    render(<HomeBanner />, { wrapper: MemoryRouter });

    const link = screen.getByRole("link", { name: "SHOP NOW" });

    expect(link).toHaveAttribute("href", "/shop");
  });
});
