async function foo(){
    let res= await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    let res1=await res.json(); 
    console.log(res1);
}
foo();