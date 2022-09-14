function test1Async(n) {
  if (n < 0) {
    throw "NUMBER MUST BE GREATER THAN ZERO";
  } else {
    return "Test 1 Accepted"
  }
}

function test2Async(n) {
  if (n > 10) {
    throw "NUMBER MUST BE LESSER THAN TEN";
  } else {
    return "Test 2 Accepted"
  }
}

function test3Async(n) {
  if (n !== 100) {
    throw "NUMBER CAN ONLY BE 100";
  } else {
    return "Test 3 Accepted"
  }
}

test1Async(10).then((res) => {
    return test2Async(22)
      .then((res) => {
        return test3Async(100);
      })
      .catch((err) => {
        throw "ERROR AFTER THEN";
      });
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
