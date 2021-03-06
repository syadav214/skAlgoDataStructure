/*
Pickup 2 packeges and put into a truck. 30 space unit reserved. If it has more than 1 pair then pick pair with highest weight.
*/


truckSpace = 110;
packagesSpace = [20, 70, 90, 30, 60, 110];

truckSpace = 90;
packagesSpace = [1, 10, 25, 35, 60];

truckSpace = 250;
packagesSpace = [100, 180, 40, 120, 10];

const reversedSpace = 30;
const availableSpace = truckSpace - reversedSpace;

const requiredSpace = new Map();
const pairs = [];
for (let i = 0; i < packagesSpace.length; i++) {
  requiredSpace.set(availableSpace - packagesSpace[i], i);
  if (requiredSpace.has(packagesSpace[i])) {
    pairs.push([requiredSpace.get(packagesSpace[i]), i]);
  }
}

let index = 0;
if (pairs.length > 1) {
  let max = 0;
  for (let i = 0; i < pairs.length; i++) {
    const currMax = Math.max(
      packagesSpace[pairs[i][0]],
      packagesSpace[pairs[i][1]]
    );
    if (currMax > max) {
      max = currMax;
      index = i;
    }
  }
}
return pairs[index];
