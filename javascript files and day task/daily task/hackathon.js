var title=document.createElement("h1")
title.innerHTML="NATIONALIZE API"
var box=document.createElement("div")
box.setAttribute("id","box")
//creating label
var label=document.createElement("label")
label.setAttribute("for","text")
label.innerHTML="ENTER NAME"
label.style.fontSize="bold"
label.style.color="black"

//for next line
var br2=document.createElement("br");

//creating search box(input)
var searchbox=document.createElement("input");
searchbox.innerHTML="country Name";
searchbox.setAttribute("id","searchbox");
searchbox.setAttribute("type","text");

searchbox.style.textAlign="center";
searchbox.setAttribute("required","true");
searchbox.setAttribute("placeholder","enter the name")


//for next line
var br1=document.createElement("br");

//creating button
var button=document.createElement("button");
button.setAttribute("id","button");
button.innerHTML="search";
//click event
button.addEventListener("click",find);

box.append(label,br2,searchbox,br1,button);
document.body.append(title,box);

//creating function for search button
async function find(){
  try{
    var aa=document.getElementById("searchbox").value;
    var b=await fetch(`https://api.nationalize.io/?name=${aa}`);
    var c=await b.json();
    console.log(c);
    for(var i=0; i<2; i++)
    {
     var res=document.createElement("div");
     res.setAttribute("id","card")
     res.innerHTML=`country ID:${c.country[i].country_id}    Probability:${c.country[i].probability}`;
     res.style.color="balck"
     
     document.body.append(res);
    }
  }catch{
    alert("not define");
  }
  }
 
