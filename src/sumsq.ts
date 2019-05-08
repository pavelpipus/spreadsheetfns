export default (...values: number[]): number => {
    let sum = 0;

    for (const value of values) {
        sum += Math.pow(value, 2);
    }

    return sum;
};
