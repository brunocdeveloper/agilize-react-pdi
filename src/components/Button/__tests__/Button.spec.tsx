import { renderWithTheme } from "../../../utils/testHelpers";
import { screen } from "@testing-library/react";
import Button from "../Button";
import Text from "../../Text/Text";
describe("Button component", () => {
  it("render button correctly", () => {
    renderWithTheme(
      <Button text="Botao" loading={<Text text="Loading" />}>
        Children
      </Button>
    );

    expect(screen.getByText("Botao"));
    expect(screen.getByText("Children"));
    expect(screen.getByText("Loading"));
  });
});
