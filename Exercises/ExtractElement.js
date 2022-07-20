const extractElement = (array, searchedElement) => {
  const result = array.filter(element => {
    if(element !== searchedElement) {
        return element;
    }
  })
  if(result.length === array.length){
    return "Element not found";
  }
  return result;
}

console.log(extractElement([1,2,3,4,5,6], 2))