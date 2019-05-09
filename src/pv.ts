export default (rate: number, nper: number, pmt: number) => {
    if (rate === 0) {
        return -pmt * nper;
    }

    const c1 = Math.pow(1 + rate, nper);

    return (((1 - c1) / rate) * pmt * (1 + rate)) / c1;
};
