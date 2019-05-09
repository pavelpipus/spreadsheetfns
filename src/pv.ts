/**
 * Calculates the present value of a loan or an investment, based on a constant interest rate
 * @param {number} rate The interest rate per period
 * @param {number} periods The total number of payment periods in an annuity
 * @param {number} payment The payment made each period and cannot change over the life of the annuity
 */
export default function pv(rate: number, periods: number, payment: number) {
    if (rate === 0) {
        return -payment * periods;
    }

    return (-payment / rate) * (1 - Math.pow(1 + rate, -periods));
}
