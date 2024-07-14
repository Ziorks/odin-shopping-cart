import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter, useOutletContext } from "react-router-dom";
import Shop from "../src/pages/Shop/Shop";

const testData = [
  {
    id: 1,
    title: "title",
    price: 2,
    description: "description",
    image: "image",
  },
];

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useOutletContext: vi.fn(),
}));

describe("Shop", () => {
  it("should render a heading with text 'Feast Your Eyes On These Bad Boys'", () => {
    useOutletContext.mockReturnValue({ data: [] });
    render(<Shop />, { wrapper: MemoryRouter });

    const heading = screen.getByRole("heading", {
      name: "Feast Your Eyes On These Bad Boys",
    });

    expect(heading).toBeInTheDocument();
  });

  it("should render a p with text content 'There's nothing here' if data is an empty array", () => {
    useOutletContext.mockReturnValue({ data: [] });
    render(<Shop />, { wrapper: MemoryRouter });

    const paragraph = screen.getByRole("paragraph");

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent("There's nothing here");
  });

  it("should render a ul of with one li for each product if data length > 0", () => {
    useOutletContext.mockReturnValue({ data: testData });
    render(<Shop />, { wrapper: MemoryRouter });

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
    expect(list.childElementCount).toEqual(testData.length);
    expect(list.childNodes[0]).toHaveRole("listitem");
  });
});
