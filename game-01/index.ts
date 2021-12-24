const numbers = [2, 5, 8, 14, 0];
const n = 10;
function calculate(numbers: number[], total: number): number[]{
    const subtractionList = numbers.map(number => total - number);
    return subtractionList.filter(num => {
        if (numbers.includes(num)) {
            return [num, numbers.indexOf(num)]
        }
    });
}