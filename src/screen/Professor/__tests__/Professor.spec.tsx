import { fireEvent, screen, waitFor } from "@testing-library/react";
import {
  ensureRender,
  mockAxios,
  renderWithRoute,
} from "../../../utils/testHelpers";
import Professor from "../Professor";
import userEvent from "@testing-library/user-event";

describe("Professor screen", () => {
  it("render options header correctly", () => {
    renderWithRoute(<Professor />);

    expect(screen.getByText("Cadastre um aluno"));
    expect(screen.getByText("Cadastre questões"));
    expect(screen.getByText("Aplique as provas"));
    expect(screen.getByText("Cadastre o aluno"));
    expect(screen.getByText("Usuário do aluno"));
    expect(screen.getByText("Senha do aluno"));
    expect(screen.getByText("Criar"));
  });

  it("create studant correctly", async () => {
    mockAxios.post.mockImplementation(async (url) => {
      return {
        message: "",
        error: false,
        data: {
          message: "Aluno criado com sucesso",
        },
      };
    });

    renderWithRoute(<Professor />);

    fireEvent.change(screen.getByTestId("usernameId"), {
      target: { value: "bruno " },
    });

    fireEvent.change(screen.getByTestId("passwordId"), {
      target: { value: "bruno" },
    });

    await waitFor(() =>
      userEvent.click(screen.getByRole("button", { name: "Criar" }))
    );

    expect(mockAxios.post).toHaveBeenCalledWith("/criar-aluno");
  });

  it("register questions correctly", async () => {
    window.document.getSelection = jest.fn();
    renderWithRoute(<Professor />);

    await waitFor(() =>
      userEvent.click(screen.getByTestId("cadastreQuestoesId"))
    );
    await ensureRender();
    expect(screen.getByText("Digite aqui a questão"));
    expect(screen.getByText("Digite aqui o tema da questão"));
    expect(screen.getByText("Digite aqui a alternativa correta"));
    expect(screen.getByText("Digite abaixo qual serão as alternativas falsas"));

    fireEvent.change(screen.getByTestId("questaoId"), {
      target: {
        value: "Qual a propriedade que muda a cor de fundo de um elmento",
      },
    });

    fireEvent.change(screen.getByTestId("temaId"), {
      target: { value: "estilização" },
    });

    fireEvent.change(screen.getByTestId("questaoCorretaId"), {
      target: { value: "background-color" },
    });

    fireEvent.change(screen.getByTestId("alternativaFalsaAId"), {
      target: { value: "estado" },
    });

    fireEvent.change(screen.getByTestId("alternativaFalsaBId"), {
      target: { value: "hover" },
    });

    fireEvent.change(screen.getByTestId("alternativaFalsaCId"), {
      target: { value: "border-color" },
    });

    fireEvent.change(screen.getByTestId("alternativaFalsaDId"), {
      target: { value: "color" },
    });

    await waitFor(() =>
      userEvent.click(screen.getByRole("button", { name: "Criar" }))
    );

    expect(mockAxios.post).toHaveBeenCalledWith("/criar-questao");
  });

  it("register test correctly", async () => {
    window.document.getSelection = jest.fn();
    renderWithRoute(<Professor />);

    await waitFor(() =>
      userEvent.click(screen.getByTestId("cadastreQuestoesId"))
    );
    await ensureRender();
    expect(screen.getByText("Digite aqui a questão"));
    expect(screen.getByText("Digite aqui o tema da questão"));
    expect(screen.getByText("Digite aqui a alternativa correta"));
    expect(screen.getByText("Digite abaixo qual serão as alternativas falsas"));

    fireEvent.change(screen.getByTestId("questaoId"), {
      target: {
        value: "Qual a propriedade que muda a cor de fundo de um elmento",
      },
    });

    fireEvent.change(screen.getByTestId("temaId"), {
      target: { value: "estilização" },
    });

    fireEvent.change(screen.getByTestId("questaoCorretaId"), {
      target: { value: "background-color" },
    });

    fireEvent.change(screen.getByTestId("alternativaFalsaAId"), {
      target: { value: "estado" },
    });

    fireEvent.change(screen.getByTestId("alternativaFalsaBId"), {
      target: { value: "hover" },
    });

    fireEvent.change(screen.getByTestId("alternativaFalsaCId"), {
      target: { value: "border-color" },
    });

    fireEvent.change(screen.getByTestId("alternativaFalsaDId"), {
      target: { value: "color" },
    });

    await waitFor(() =>
      userEvent.click(screen.getByRole("button", { name: "Criar" }))
    );

    expect(mockAxios.post).toHaveBeenCalledWith("/criar-questao");
    await ensureRender();

    fireEvent.change(screen.getByTestId("cadastrarProvaId"), {
      target: { value: "Front-end" },
    });
    await ensureRender();

    await waitFor(() =>
      userEvent.click(screen.getByRole("button", { name: "Criar prova" }))
    );

    expect(mockAxios.post).toHaveBeenCalledWith("/criar-prova");
  });
});
