const sliceArray = (array, element) => {
  const elementIndex = array.indexOf(element);
  const firstSegment = array.slice(0, elementIndex - 1);
  const secondSegment = array.slice(elementIndex + 1, array.length);
  if(elementIndex === -1) {
    return "Element doesn't exists!"
  }
  if(elementIndex === 0) {
    return secondSegment
  }
  if(elementIndex === array.length - 1){
    return array.slice(0, elementIndex);
  }
  const result = [...firstSegment, ...secondSegment];
  return result;
}

console.log(sliceArray([1,2,3,4,5,6,7], 7))