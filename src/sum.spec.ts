import sum from "./sum";

describe("sum", () => {
    it("should calculate sum of any numbers of arguments", () => {
        expect(sum(1, 2, 3)).toBe(6);
    });
});
