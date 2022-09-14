// 100 doors - initially closed
let doors = [];
for (let i = 0; i < 100; i++) {
  doors = [...doors, false];
}

// repeat the process 100 times
for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= doors.length; j++) {
    let multiplier = j * i;
    if(multiplier > doors.length){
        continue;
    }
    if (doors[multiplier - 1] === false) {
      doors[multiplier - 1] = true;
    } 
    else if(doors[multiplier - 1] === true) {
      doors[multiplier - 1] = false;
    }
  }
}

let result = [];

doors.forEach((door, index) => {
    if(door === true){
        result.push(index);
    }
});

console.log(result);