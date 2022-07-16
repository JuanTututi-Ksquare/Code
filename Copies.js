const array = [1, 2, 3, 4, 5];
const arrayCopy = [...array];

arrayCopy[0] = 5;

console.log(array);
console.log(arrayCopy);
