//div kula container first second row
//adutha div kula col create aagum
let container=foo("div","container");
let row=foo("div","row");
let col=foo("div","col");
 //ingha append pani update pandrom
//row kula col irukum
 row.append(col);
 container.append(row);
 document.body.append(container);

 //this is function for above code
 function foo(elementname,attrname){
 let ele=document.createElement(elementname);

 ele.className="attrname";
 return ele;
 }
