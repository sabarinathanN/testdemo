//q-1

let f,s,t;
let aa = (f,s,t) => {

 console.log(f,s,t);
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3);

//q-2

const array = [2,3,4,5,6,7,8,9,10,11]; 
var isPrime = (num)=>{
for (let start = 2; num > start; start++) {
 if (num % start == 0) {
 return false;
    }

  }

  return num > 1;

}
console.log(array.filter(isPrime));

//q-3

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !==0) {
 console.log(arr[i]);
 }}
})();

//q-4

