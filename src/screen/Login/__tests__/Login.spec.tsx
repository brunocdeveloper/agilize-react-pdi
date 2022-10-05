import {
  ensureRender,
  mockAxios,
  renderWithRoute,
} from "../../../utils/testHelpers";
import Login from "../Login";
import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

describe("Login screen", () => {
  it("render login correctly", () => {
    renderWithRoute(<Login />);

    expect(screen.getByText("Usuário do professor"));
    expect(screen.getByText("Senha do professor"));
    expect(screen.getByText("Sou aluno"));
    expect(screen.getByText("Entrar"));
  });

  it("exchange for student credentials", async () => {
    renderWithRoute(<Login />);

    await waitFor(() =>
      userEvent.click(screen.getByRole("button", { name: "Sou aluno" }))
    );

    expect(screen.getByText("Usuário do aluno"));

    expect(screen.getByText("Senha do aluno"));
  });

  it("login correctly with professor", async () => {
    mockAxios.get.mockImplementation(async (url) => {
      return {
        message: "",
        error: false,
        data: {
          user: "professor",
          password: "professor",
        },
      };
    });
    renderWithRoute(<Login />);

    fireEvent.change(screen.getByTestId("usernameId"), {
      target: { value: "professor" },
    });

    fireEvent.change(screen.getByTestId("passwordId"), {
      target: { value: "professor" },
    });
    await waitFor(() =>
      userEvent.click(screen.getByRole("button", { name: "Entrar" }))
    );

    await ensureRender();

    expect(mockAxios.get).toHaveBeenCalledWith("/login");
  });

  it("login correctly with aluno", async () => {
    mockAxios.get.mockImplementation(async (url) => {
      return {
        message: "",
        error: false,
        data: {
          user: "professor",
          password: "professor",
        },
      };
    });
    renderWithRoute(<Login />);

    await waitFor(() =>
      userEvent.click(screen.getByRole("button", { name: "Sou aluno" }))
    );

    fireEvent.change(screen.getByTestId("usernameId"), {
      target: { value: "bruno" },
    });

    fireEvent.change(screen.getByTestId("passwordId"), {
      target: { value: "bruno" },
    });
    await waitFor(() =>
      userEvent.click(screen.getByRole("button", { name: "Entrar" }))
    );
    await ensureRender();

    expect(mockAxios.get).toHaveBeenCalledWith("/login");
  });
});
