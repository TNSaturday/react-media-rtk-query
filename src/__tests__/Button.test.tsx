import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Button from "../components/Button/Button";

describe("Button tests", () => {
  it("should render default button with correct styles", async () => {
    const button = render(<Button>Default button</Button>);
    const buttonElement = await button.findByTestId("defaultButton");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement.className).toBe(
      "flex items-center px-3 py-1.5 border h-8"
    );

    button.unmount();
  });

  it("should render render rounded outlined primary button", async () => {
    const button = render(
      <Button.Primary rounded outline>
        Primary button
      </Button.Primary>
    );
    const buttonElement = await button.findByTestId("primaryButton");
    expect(buttonElement.className.includes("text-blue-500"));
  });
});
