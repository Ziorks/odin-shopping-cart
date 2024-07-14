import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";

describe("Navbar", () => {
  it("should render a nav element", () => {
    render(<Navbar nCartItems={0} />, { wrapper: MemoryRouter });

    const nav = screen.getByRole("navigation");

    expect(nav).toBeInTheDocument();
  });

  it("should have a link to '/' in nav", () => {
    render(<Navbar nCartItems={0} />, { wrapper: MemoryRouter });

    const nav = screen.getByRole("navigation");
    const links = within(nav).getAllByRole("link");

    const homeLink = links.find((link) => link.getAttribute("href") === "/");

    expect(homeLink).toBeInTheDocument();
  });

  it("should have a link to '/shop' in nav", () => {
    render(<Navbar nCartItems={0} />, { wrapper: MemoryRouter });

    const nav = screen.getByRole("navigation");
    const links = within(nav).getAllByRole("link");

    const shopLink = links.find(
      (link) => link.getAttribute("href") === "/shop"
    );

    expect(shopLink).toBeInTheDocument();
  });

  it("should have a link to '/cart' in nav", () => {
    render(<Navbar nCartItems={0} />, { wrapper: MemoryRouter });

    const nav = screen.getByRole("navigation");
    const links = within(nav).getAllByRole("link");

    const cartLink = links.find(
      (link) => link.getAttribute("href") === "/cart"
    );

    expect(cartLink).toBeInTheDocument();
  });

  it("should display nCartItems if > 0 and < 100", () => {
    const nCartItems = 1;
    render(<Navbar nCartItems={nCartItems} />, { wrapper: MemoryRouter });

    const div = screen.getByText(nCartItems);

    expect(div).toBeInTheDocument();
  });

  it("should display 99+ if nCartItems  > 100", () => {
    const nCartItems = 999999;
    render(<Navbar nCartItems={nCartItems} />, { wrapper: MemoryRouter });

    const div = screen.getByText("99+");

    expect(div).toBeInTheDocument();
  });

  it("should not display nCartItems < 1", () => {
    const nCartItems = 0;
    render(<Navbar nCartItems={nCartItems} />, { wrapper: MemoryRouter });

    const div = screen.queryByText(nCartItems);

    expect(div).toBeNull();
  });
});
