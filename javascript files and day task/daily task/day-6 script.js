//q-1
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i <numsArr.length ; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);

//q-2

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i =10; i>=0; i-- ) {
 new_string +=numsArr[i]+" ";
}
console.log(new_string);

//q-3

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] ="even"
 
 }
 
}
console.log(numsArr);

//q-4

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 
 sum += numsArr[i]
}
console.log(sum);

//q-5

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(i %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

//q-6

let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];

const sumEvens = (numStr) => {
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (i % 2 === 0){ 
    sum = sum + numStr[i];
    }
  }
  return sum;
}
 
console.log(sumEvens(numStr));


//q-7

var arr=[1,2,3,4,5,6,7,8,9,10,11]
let sum=0 
for(i=1;i<=arr.length;i++)
{
  if(i%2==0)
  {
    sum=sum+i
  }
}
console.log(sum)

//q-8

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11]
    
sumDiff(numbers);

function sumDiff(numbers) {
    let even = [];
    let odd = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even.push(numbers[i]);
        } 
        else {
            odd.push(numbers[i]);
        }

    } 

    
    
    let oddSum = odd.reduce((r, s) => r += s, 0)
    let oddEven = even.reduce((r, s) => r -= s, 0)
    
    console.log("odd sum total: " + oddSum)
    console.log("even sum total: " + oddEven)
    console.log("difference: " + (oddSum - oddEven))
} 

//q-9
