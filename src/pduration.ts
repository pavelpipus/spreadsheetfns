/**
 * Returns the number of periods required by an investment to reach a specified value
 * @param  {number} rate The interest rate per period
 * @param  {number} pv The present value of the investment
 * @param  {number} fv The desired future value of the investment
 */
export default (rate: number, pv: number, fv: number): number => {
    return -(Math.log(pv) - Math.log(fv)) / Math.log(1 + rate);
};
