var table=document.createElement("table");
table.className="table";

var thead=document.createElement("thead");
thead.className="thead-dark";

var th1=createtrth("th","firstname");
var th2=createtrth("th","lastname");

tr.append(th1,th2);
thead.append(tr);


var tbody=document.createElement("tbody");
var tr=document.createElement("tr");

var td1=createElement("td","sabari");
var td2=createElement("td","nathan");

tr.append(td1,td2);
tbody.append(tr);

table.append(thead,tbody);
document.body.append(table);

function cratetrth(element,values){
    var ele=document.createElement(element);
    ele.innerHTML=values;
    return ele;
}