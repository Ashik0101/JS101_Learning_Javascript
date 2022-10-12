let i = 1;

let sumEven=0;

let count = 0;

while(i<=100){
  if(i%2==0){
    count = count+1;
    sumEven = sumEven+i;
  }
  i++;
}
// console.log(count);
// console.log( sumEven);
console.log("The Average is", sumEven/count);