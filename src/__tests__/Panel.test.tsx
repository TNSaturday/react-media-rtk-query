import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Panel from "../components/Panel";

describe("Panel tests", async () => {
  const panel = render(
    <Panel>
      <div>Panel test</div>
    </Panel>
  );
  const panelContainer = await panel.findByTestId("panel");

  it("should render component", () => {
    expect(panelContainer).toBeTruthy();
  });

  it("should render provided children", () => {
    const child = panelContainer.firstChild as HTMLElement;
    if (child) {
      expect(child.tagName).toBe("DIV");
      expect(child.textContent).toBe("Panel test");
    }
  });

  it("should render correct className", () => {
    expect(panelContainer.className).toBe(
      "border rounded p-3 shadow bg-white w-full"
    );
  });

  panel.unmount();
});
