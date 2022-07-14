// map

const mapArray = (args) => {
  const newArray = args.map(element => {
    if(element < 2){
        return element
    }
  })
  console.log(newArray);
  return newArray;
}

const arr = [1,2,3,4];
mapArray(arr);