import { isPositiveNumber } from "../parseNumber";

describe("parseNumber", () => {
  it("should return a correct result", () => {
    expect(isPositiveNumber("1000")).toEqual(true);
    expect(isPositiveNumber("-9000")).toEqual(false);
  });
});
