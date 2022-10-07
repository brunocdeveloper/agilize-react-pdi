import {
  ensureRender,
  mockAxios,
  renderWithRoute,
} from "../../../utils/testHelpers";
import Aluno from "../Aluno";
import { waitFor, screen, fireEvent } from "@testing-library/react";
import { localStorageMock } from "../../../utils/JestLocalStorage/JestLocalStorage";

describe("Aluno screen", () => {
  it("render flow correctly", async () => {
    window.document.getSelection = jest.fn();

    await waitFor(() =>
      localStorageMock.setItem(
        "alunos",
        JSON.stringify([
          {
            username: "fulano",
            password: "fulano",
            isAluno: true,
          },
        ])
      )
    );

    await waitFor(() =>
      localStorageMock.setItem(
        "provas",
        JSON.stringify([
          {
            nomeProva: "Front-end",
            id: 1664905433138,
            questoes: [
              {
                chaveQuestao: "questao1",
                questao:
                  "Qual propriedade altera o estilo de um elemento ao passar o mouse ?",
                tema: "Estilização",
                questaoCorreta: "hover",
                alternativaFalsaA: "mouseover",
                alternativaFalsaB: "onPress",
                alternativaFalsaC: "background-color",
                alternativaFalsaD: "border-width",
                id: 1664905425486,
              },
            ],
          },
        ])
      )
    );

    await waitFor(() =>
      localStorageMock.setItem(
        "provasAtribuidas",
        JSON.stringify([
          {
            username: "fulano",
            provas: [
              {
                nomeProva: "frontend",
                id: 1664474734793,
                questoes: [
                  {
                    chaveQuestao: "questao1",
                    questao: "Para que serve um estado no react",
                    tema: "react",
                    questaoCorreta: "att informações",
                    alternativaFalsaA: "para nada",
                    alternativaFalsaB: "para excluir dados",
                    alternativaFalsaC: "para fazer fetch",
                    alternativaFalsaD: "para chamar uma api",
                    id: 1664474645701,
                  },
                  {
                    chaveQuestao: "questao2",
                    questao: "Para que serve a propriedade hover no css",
                    tema: "css",
                    questaoCorreta:
                      "fazer alguma estilização ao passar o mouse",
                    alternativaFalsaA: "para nada",
                    alternativaFalsaB: "desabilitar algo",
                    alternativaFalsaC: "fazer animação",
                    alternativaFalsaD: "disparar uma ação de fetch",
                    id: 1664474724597,
                  },
                ],
                selected: true,
              },
            ],
          },
        ])
      )
    );

    mockAxios.get.mockImplementation(async () => {
      return {
        message: "",
        error: false,
        data: [{ message: "Prova concluída" }],
      };
    });

    renderWithRoute(<Aluno />);

    await ensureRender();

    await waitFor(() => fireEvent.click(screen.getByText("frontend")));
    await waitFor(() => fireEvent.click(screen.getByText("Iniciar")));
    await ensureRender();

    expect(screen.getByText("Para que serve um estado no react"));
    expect(screen.getByText("Para que serve a propriedade hover no css"));

    await waitFor(() => fireEvent.click(screen.getByText("att informações")));

    await waitFor(() =>
      fireEvent.click(
        screen.getByText("fazer alguma estilização ao passar o mouse")
      )
    );

    await waitFor(() => fireEvent.click(screen.getByText("Concluir")));

    expect(mockAxios.get).toHaveBeenCalledWith("/concluir-prova");
  });
});
