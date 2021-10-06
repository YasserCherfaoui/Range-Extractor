function solution(list) {
  // TODO: complete solution
  const result = [];
  let arr = [];
  for (let index = 0; index < list.length; index++) {
    const currentElement = list[index];
    const nextElement = list[index + 1];
    const predictedElement = currentElement + 1;

    arr.push(currentElement);
    const pushedElement = `${arr[0]}-${arr[arr.length - 1]}`;

    if (nextElement === predictedElement) {
      // console.log('match');
      continue;
    } else {
      // console.log('unmatch');
      if (arr.length > 2) {
        result.push(pushedElement);
      } else {
        result.push(arr.join());
      }
      arr = [];
    }
  }
  return result.join();
}

const res = solution([
  -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
]);
console.log(res);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
