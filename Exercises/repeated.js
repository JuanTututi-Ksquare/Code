// Remove repeated elements
// [1, 1, 2, 2, 3, 6, 6] > [1, 2, 3, 6]
const originalArray = [1, 1, 2, 2, 3, 6, 6];

// Returns all unique values of an array
const getUniqueValues = (array) => {
  let result = [];
  array.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  console.log(result);
  return result;
};

// Returns all repeated values of an array
const getRepeatedValues = (array) => {
  let values = [];
  let repeated = [];
  array.forEach((element) => {
    if (!values.includes(element)) {
      values.push(element);
    } else {
      if (!repeated.includes(element)) {
        repeated.push(element);
      }
    }
  });
  console.log(repeated);
  return repeated;
};

getUniqueValues(originalArray);
getRepeatedValues(originalArray);
