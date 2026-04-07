import { useEffect, useState } from "react"
import Block from "./Block";

export default function App2(){
let[block,setBlock]=useState(false)

const[count, setCount]= useState(0)
const [animal, setAnimal]=useState("lion")
useEffect(()=>{
  console.log("counted",count);
  console.log("animal name",animal);
  
    
  
},[count,animal]);
// useEffect(()=>{

//   console.log(animal);
  
  
// },[animal]);


  return(
    <>
    <h1>Fancy Counter</h1>
    <h2>{count}</h2>
    <button onClick={()=>{if(count>0){
      setCount(count-1)
    }

    }}>-1</button>
    <button onClick={()=>{
      if(count<5){
      setCount(count+1)}
      
      }}>+1</button>



    <button onClick={()=>{setCount(0)

    }}>reset</button>


    <br /> 
    <hr />
    <h2>Animal name:{animal}</h2>
    <button onClick={()=>setAnimal("cat")}>change animal</button>
    <hr />
    <br />
    {block ? <Block/>: null}
    <button onClick={()=>setBlock(!block)}>Toggle</button>
    </>
  )
}