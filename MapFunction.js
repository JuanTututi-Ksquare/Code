const mapFunction = (element) => {
    return element * 2;
}

const exampleArray = [1, 2, 3, 4]

const result = [];

exampleArray.forEach(element => result.push(mapFunction(element)));

console.log(result);