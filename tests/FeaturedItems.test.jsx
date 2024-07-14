import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import FeaturedItems from "../src/components/FeaturedItems";

vi.mock("react-router-dom", async () => {
  return {
    ...(await vi.importActual("react-router-dom")),
    useOutletContext: () => ({
      data: [
        {
          id: 1,
          title: "title",
          price: 2,
          description: "description",
          image: "image",
        },
      ],
    }),
  };
});

describe("FeaturedItems", () => {
  it("should render a heading with text content 'FEATURED ITEMS'", () => {
    render(<FeaturedItems />);

    const heading = screen.getByRole("heading", { name: "FEATURED ITEMS" });

    expect(heading).toBeInTheDocument();
  });

  it("should render a p with text content 'There's nothing here' if no ids given", () => {
    render(<FeaturedItems />);

    const paragraph = screen.getByRole("paragraph");

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent("There's nothing here");
  });

  it("should render a p with text content 'There's nothing here' if no valid ids given", () => {
    render(<FeaturedItems itemIds={[2]} />);

    const paragraph = screen.getByRole("paragraph");

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent("There's nothing here");
  });

  it("should render a ul of with one li for each valid id given at least one valid id", () => {
    render(<FeaturedItems itemIds={[1]} />, { wrapper: MemoryRouter });

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
    expect(list.childElementCount).toEqual(1);
    expect(list.childNodes[0]).toHaveRole("listitem");
  });
});
