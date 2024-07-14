import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import QuantityInput from "../src/components/QuantityInput";

describe("QuantityInput", () => {
  describe("Decrement", () => {
    it("should render a decrement button", () => {
      render(
        <QuantityInput
          quantity={1}
          handleIncrement={() => {}}
          handleDecrement={() => {}}
          handleQuantityChange={() => {}}
        />,
        {
          wrapper: MemoryRouter,
        }
      );

      const decrement = screen.getByRole("button", { name: "decrement" });

      expect(decrement).toBeInTheDocument();
    });

    it("should call the handleDecrement function when clicked with quantity > 1", async () => {
      const handleDecrement = vi.fn();
      const user = userEvent.setup();

      render(
        <QuantityInput
          quantity={2}
          handleIncrement={() => {}}
          handleDecrement={handleDecrement}
          handleQuantityChange={() => {}}
        />,
        {
          wrapper: MemoryRouter,
        }
      );

      const decrement = screen.getByRole("button", { name: "decrement" });

      await user.click(decrement);

      expect(handleDecrement.mock.calls).toHaveLength(1);
    });

    it("should not call the handleDecrement function when clicked with quantity <= 1", async () => {
      const handleDecrement = vi.fn();
      const user = userEvent.setup();

      render(
        <QuantityInput
          quantity={1}
          handleIncrement={() => {}}
          handleDecrement={handleDecrement}
          handleQuantityChange={() => {}}
        />,
        {
          wrapper: MemoryRouter,
        }
      );

      const decrement = screen.getByRole("button", { name: "decrement" });

      await user.click(decrement);

      expect(handleDecrement.mock.calls).toHaveLength(0);
    });

    it("should not call the handleDecrement function when it isn't clicked", () => {
      const handleDecrement = vi.fn();

      render(
        <QuantityInput
          quantity={1}
          handleIncrement={() => {}}
          handleDecrement={handleDecrement}
          handleQuantityChange={() => {}}
        />,
        {
          wrapper: MemoryRouter,
        }
      );

      expect(handleDecrement.mock.calls).toHaveLength(0);
    });
  });

  describe("Increment", () => {
    it("should render an increment button", () => {
      render(
        <QuantityInput
          quantity={1}
          handleIncrement={() => {}}
          handleDecrement={() => {}}
          handleQuantityChange={() => {}}
        />,
        {
          wrapper: MemoryRouter,
        }
      );

      const increment = screen.getByRole("button", { name: "increment" });

      expect(increment).toBeInTheDocument();
    });

    it("should call the handleIncrement function when clicked", async () => {
      const handleIncrement = vi.fn();
      const user = userEvent.setup();

      render(
        <QuantityInput
          quantity={1}
          handleIncrement={handleIncrement}
          handleDecrement={() => {}}
          handleQuantityChange={() => {}}
        />,
        {
          wrapper: MemoryRouter,
        }
      );

      const increment = screen.getByRole("button", { name: "increment" });

      await user.click(increment);

      expect(handleIncrement.mock.calls).toHaveLength(1);
    });

    it("should not call the handleIncrement function when it isn't clicked", () => {
      const handleIncrement = vi.fn();

      render(
        <QuantityInput
          quantity={1}
          handleIncrement={handleIncrement}
          handleDecrement={() => {}}
          handleQuantityChange={() => {}}
        />,
        {
          wrapper: MemoryRouter,
        }
      );

      expect(handleIncrement.mock.calls).toHaveLength(0);
    });
  });

  describe("Input", () => {
    it("should render a number input with a value of the quantity prop", () => {
      const quantity = 1;
      render(
        <QuantityInput
          quantity={quantity}
          handleIncrement={() => {}}
          handleDecrement={() => {}}
          handleQuantityChange={() => {}}
        />,
        {
          wrapper: MemoryRouter,
        }
      );

      const input = screen.getByRole("spinbutton");

      expect(input).toBeInTheDocument();
      expect(input).toHaveValue(quantity);
    });
  });

  it("should call handleQuantityChange when value changed to a number > 0", async () => {
    const handleQuantityChange = vi.fn();
    const user = userEvent.setup();
    render(
      <QuantityInput
        quantity={1}
        handleIncrement={() => {}}
        handleDecrement={() => {}}
        handleQuantityChange={handleQuantityChange}
      />,
      {
        wrapper: MemoryRouter,
      }
    );

    const input = screen.getByRole("spinbutton");

    await user.click(input);
    await user.keyboard("2");

    expect(handleQuantityChange.mock.calls).toHaveLength(1);
  });

  it("should not call handleQuantityChange when value changed to a non-number", async () => {
    const handleQuantityChange = vi.fn();
    const user = userEvent.setup();
    render(
      <QuantityInput
        quantity={1}
        handleIncrement={() => {}}
        handleDecrement={() => {}}
        handleQuantityChange={handleQuantityChange}
      />,
      {
        wrapper: MemoryRouter,
      }
    );

    const input = screen.getByRole("spinbutton");

    await user.click(input);
    await user.keyboard("a");

    expect(handleQuantityChange.mock.calls).toHaveLength(0);
  });

  it("should not call handleQuantityChange when value doesn't change", () => {
    const handleQuantityChange = vi.fn();
    render(
      <QuantityInput
        quantity={1}
        handleIncrement={() => {}}
        handleDecrement={() => {}}
        handleQuantityChange={handleQuantityChange}
      />,
      {
        wrapper: MemoryRouter,
      }
    );

    expect(handleQuantityChange.mock.calls).toHaveLength(0);
  });
});
