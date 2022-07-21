import React from 'react';
import {useState} from "react";
import "./App.css";

export default function App(){
  const [list,setlist] =useState([]);
  const [currenttask,setcurrenttask]=useState(" ");

//add task function for button
let addtask=()=>{
  setlist([...list,{id: Math.random().toString(),name:currenttask,isDone:false}])
 
}
//markdone function 
let markdone=(id)=>{
  console.log("id",id);
  let itemIndex=list.findIndex(obj =>obj.id===id)
  //console.log("itemIndex",itemIndex);
  // console.log("name",list[itemIndex].name);
  // console.log("list[itemIndex].isDone",list[itemIndex].isDone)
  list[itemIndex].isDone = true;
  // console.log("list[itemIndex].isDone",list[itemIndex].isDone)
  setlist([...list])
}
//delete tsk function
const makedelete=(id)=>{
  // console.log("id",id)
  setlist(remove=>{
   return remove.filter((item)=> item.id !==id)})
  // setlist([...list]);
}

//function for creating button and text box

return(

<div className="container">
  <h1>TO DO APP</h1>
<input type="text" onChangeCapture={(e)=>setcurrenttask(e.target.value)} />
<button className="button"onClick={addtask}>ADD TASK</button>

<ul>
  {
    list.map((item)=>{
      return <li className={item.isDone ? 'markdone':' '}>
        {item.name}- <button onClick={()=>markdone(item.id)}>Done</button>- <button onClick={()=>makedelete(item.id)}>Delete</button></li>
    })
  }
</ul>

<img className="todo" src="http://www.clipartbest.com/cliparts/aTq/L7L/aTqL7LA8c.jpg"/>
</div>  


);

}
