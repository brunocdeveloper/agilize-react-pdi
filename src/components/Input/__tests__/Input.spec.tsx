import { ensureRender, renderWithTheme } from "../../../utils/testHelpers";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../Input";
describe("Input component", () => {
  it("render input correctly", async () => {
    renderWithTheme(<Input label="Input label" />);

    expect(screen.getByText("Input label"));
    userEvent.type(screen.getByTestId("inputText"), "testando");

    await ensureRender();
  });
});
