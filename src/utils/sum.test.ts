import { describe, expect, test } from "@jest/globals";
import { somaValores } from "./sum";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(somaValores(1, 2)).toBe(3);
  });
});
