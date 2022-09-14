function average() {
    let sum = 0;
    let counter = 0;
    function calculate(num){
        sum += num;
        counter++;
        return sum / counter;
    }
    return calculate;    
}

const avg = average();

console.log(avg(10));
console.log(avg(11));
console.log(avg(12));