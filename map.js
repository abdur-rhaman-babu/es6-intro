const numbers = [10,20,30,40,50,60]
// const output = [];

const double = (number)=> number * 2;
// for( let number of numbers){
//     const result = double(number)
//     output.push(result)
// }
const output = numbers.map(double)
console.log(output)