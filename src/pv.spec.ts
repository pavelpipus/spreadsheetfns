import pv from "./pv";

describe("pv", () => {
    describe("when rate is zero", () => {
        it("should calulate present value properly", () => {
            expect(+pv(0, 12, 2000)).toBe(-24000);
        });
    });

    describe("when rate is above zero", () => {
        it("should calculate present value properly", () => {
            expect(+pv(0.5, 12, 20000).toFixed(2)).toBe(-39691.71);
        });
    });
});
