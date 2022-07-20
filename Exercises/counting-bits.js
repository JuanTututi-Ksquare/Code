const countBits = function(number) {
  const convertedNumber = convertBinary(number);
  let counter = 0;
  convertedNumber.forEach(number => {
    if(number === 1){
        counter++;
    }
  })
  return counter;
};

const convertBinary = function(number) {
    let result = [];
    for(let i = number; i >= 1;) {
        if(Math.floor(i % 2) === 1){
            result.push(1)
        } 
        if(Math.floor(i % 2) === 0){
            result.push(0);
        }
        i = i / 2;
    }
    return result;
}

console.log(countBits(4));