// import "./App.css";

export default function App() {
  const users=[{name:"sabari",pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthHVYX7uaGAQbJifvkv4GskIjvp14b9KIAQ&usqp=CAU"},
{name:"kumar",pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakPbjmWvkEoKx-hwhR2o-dlSZogs3afw4jg&usqp=CAU"},
{name:"siva",pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawKI2lk5FrQsud_wJl1iIvVUWiN2cG0KKUA&usqp=CAU"},];
const people=["sabari","kumar","siva"];
{people.map((personName)=>
  (<welcome name={personName}/>
  ))}
}