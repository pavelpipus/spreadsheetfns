import pmt from "./pmt";

describe("pmt", () => {
    it("should calculate PMT properly", () => {
        expect(+pmt(0.5, 12, 2000).toFixed(2)).toBe(-1007.77);
    });
});
