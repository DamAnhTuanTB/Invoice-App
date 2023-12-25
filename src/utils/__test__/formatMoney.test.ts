import { formatMoney } from "../formatMoney";

describe("formatMoney", () => {
  it("should return a formatted money string with two decimal places", () => {
    expect(formatMoney(987654.32)).toEqual("987,654.32");
    expect(formatMoney(1000)).toEqual("1,000.00");
  });
});
