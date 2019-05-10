import pduration from "./pduration";

describe("pduration", () => {
    it("should calculate pduration properly", () => {
        expect(+pduration(0.025, 2000, 2200).toFixed(2)).toBe(3.86);
    });
});
