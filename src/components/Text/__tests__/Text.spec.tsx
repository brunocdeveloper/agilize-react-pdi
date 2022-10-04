import { renderWithTheme } from "../../../utils/testHelpers";
import { screen } from "@testing-library/react";

import Text from "../Text";

describe("Text component", () => {
  it("render Text correctly", () => {
    renderWithTheme(<Text text="Testando componente" />);

    expect(screen.getByText("Testando componente"));
  });
});
