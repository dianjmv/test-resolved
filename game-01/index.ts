import {flatMap} from "lodash";
const numbers = [2, 5, 8, 14, 0, 10, 10];
const total = 7;
function calculate(numbers: number[], total: number){
    const numberSet= new Set()
    return flatMap(numbers,num =>{
        const subtractionResult = total - num;
        if (numberSet.has(subtractionResult)){
            return [num, subtractionResult]
        }
        numberSet.add(num);
    }).filter(nums => nums !== undefined).slice(0,2)
}
console.log(calculate(numbers, total));