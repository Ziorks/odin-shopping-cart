import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Error from "../src/pages/Error/Error";

describe("Error", () => {
  describe("Shop Link", () => {
    it("should have text 'Continue shopping' ", () => {
      render(<Error />, { wrapper: MemoryRouter });

      const link = screen.getByRole("link", { name: "Continue shopping" });

      expect(link).toBeInTheDocument();
    });
    it("should link to '/shop'", () => {
      render(<Error />, { wrapper: MemoryRouter });

      const link = screen.getByRole("link", { name: "Continue shopping" });

      expect(link).toHaveAttribute("href", "/shop");
    });
  });
});
