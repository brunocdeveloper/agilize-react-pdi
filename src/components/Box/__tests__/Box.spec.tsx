import { renderWithTheme } from "../../../utils/testHelpers";
import Box from "../Box";
import { render, screen, fireEvent } from "@testing-library/react";
describe("Box component", () => {
  it("render box child", () => {
    renderWithTheme(<Box>Testando</Box>);

    expect(screen.getByText("Testando"));
  });
});
