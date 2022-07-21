let firstname=document.createElement("div");
firstname.innerHTML="firstname"
firstname.setAttribute("iput","text");
//<div class="container"></div>
let lastname=document.createElement("div");
row.setAttribute("input","row");

let col=document.createElement("div");
col.setAttribute("class","col");

row.append(col);
firstname.append(row);
document.body.append(firstname);