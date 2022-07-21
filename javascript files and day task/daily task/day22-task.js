// var age=parseInt(prompt("enter the age !!!"));

// var p1=new Promise((resolve,reject)=>{
// if(age>=18){
//     resolve("You are eligible to vote!!!!!");
// }
// else{
//     reject("You are Not eligible to vote!!!!");
// }
// });
// console.log(p1);
// p1.then((d)=>console.log(d)).catch((e)=>console.log(e));

//promise chaining/chaining of promises
function foo(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(2*num),3000)
    });
}

foo(5).then((data)=>{
    console.log(data);
    return foo(data);//foo(10)
}).then((data1)=>{
    console.log(data1)
   return foo(data1);//foo(20)
}).then((data2)=>console.log(data2))
.catch((error)=>console.log(error))

    

