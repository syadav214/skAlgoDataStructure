let arr = [10, 7, 12]; //[2, 2, 7, 3]
let count = 0,
  allSame = false;

while (allSame === false) {
  arr = arr.sort((a, b) => a - b);
  const max = arr[arr.length - 1];
  const min = arr[0];

  let diff = max - min;

  diff = diff > 4 ? 5 : diff < 4 && diff > 1 ? 2 : 1;

  arr = arr.map(ele => (ele === max ? ele : ele + diff));

  const firstVal = arr[0];
  count++;
  for (let i = 1; i < arr.length; i++) {
    if (firstVal !== arr[i]) {
      allSame = false;
      break;
    } else {
      allSame = true;
    }
  }
}
console.log('count', count);
