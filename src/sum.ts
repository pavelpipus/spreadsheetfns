export default (...values: number[]): number => {
    let sum = 0;

    for (const value of values) {
        sum += value;
    }

    return sum;
};
