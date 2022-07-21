// var res=fetch("https://restcountries.com/v3.1/all");
// console.log(res);
// var res1=res.then(data)=>data.json().then((data1)=>console.log(data1);
var url="https://624a7f85fd7e30c51c0e48bf.mockapi.io/user"
function getdata(){
    var res=fetch("https://624a7f85fd7e30c51c0e48bf.mockapi.io/user")
    res.then((data)=>data.json())
    .then((data1)=>console.log(data1))
    .catch((error)=>console.log(error));
}
getdata();

function createdata(){
    var data={
        name:"sabri",
        email:"sabari@123.in"
    };
    fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{"Content-Type": "application/json"}
    })
}
createdata();

function updatedata(){
    var data={
        name:"sabri1111",
        email:"sabari@12333333.in"
    };
    fetch(url+"/12",{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"}
    })
}
updatedata();

function deletedata(){
    fetch(url+"/5",{
        method:"DELETE",})
}
deletedata();