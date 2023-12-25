import { randomIdInvoice } from "../randomIdInvoice";

describe("randomIdInvoice", () => {
  it("should generate a random invoice ID not in the existing IDs", () => {
    const existingIds = ["AB4123", "DE7856", "GH87789"];

    const newId = randomIdInvoice(existingIds);

    expect(existingIds).not.toContain(newId);
  });
});
