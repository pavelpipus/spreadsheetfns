/**
 * @param  {number} rate The interest rate for the loan
 * @param  {number} nper The total number of payments for the loan
 * @param  {number} pv The present value, or the total amount that a series of future payments is worth now
 * @returns {number} The payment for a loan based on constant payments and a constant interest rate
 */
function pmt(rate: number, nper: number, pv: number): number {
    return -(pv * rate) / (1 - Math.pow(1 + rate, -nper));
}

export default pmt;
