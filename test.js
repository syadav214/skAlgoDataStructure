
n = 4;
time = [0, 0, 1, 5];
direction = [0, 1, 1, 0];

n = 5;
time = [0, 1, 1, 3, 3];
direction = [0, 1, 0, 0, 1];




let result = [];
for (let i = 0; i < time.length; i++) {
  const currTime = time[i];
  const currDirection = direction[i];
  let cnt = 0;
  if (i == time.length - 1) {
    cnt = currTime;
  } else {
    for (let j = i + 1; j < time.length; j++) {
      const nxtTime = time[j];
      const nxtDirection = direction[j];
      if (currTime == nxtTime && nxtDirection == 1) {
        cnt++;
      } else if (currDirection == 1) {
        cnt = currTime;
        break;
      } else if (cnt == 0 && currTime == 0) {
        cnt = currTime;
        break;
      }
      else if (nxtDirection == 1) {
        cnt++;
      }
    }
  }

  result.push(cnt);
}

console.log(result);

/*
^ -start
$ - end
? - optional
[] - range
+ - followed by

// passed with a alpha, optional _ followed by number
^[a-z]*\((_?)+[0-9]?)@hackerrank.com$
*/
