// import App2 from "./App2";

import { useCallback, useState } from "react";
import Count from "./components/Count";
import Title from "./components/Title";
import CountBtn from "./components/CountBtn";
import Age from "./components/Age";
import AgeBtn from "./components/AgeBtn";

export default function App(){
  
  let [count, setCount] =useState (0);
  let [age, setAge] =useState(18);
    
const handleCount = useCallback(
  ()=>{setCount(count+1)
},[count]);

const handleAge= useCallback(
  ()=>{setAge(age+1)
},[age]);
  return(
    <>
  
    <Title/>
    <hr />
    <Count count={count}/>
    <CountBtn handleCount={handleCount}/>
    <Age age={age}/>
    <AgeBtn handleAge={handleAge}/>
    {/* <App2/> */}
  
    </>
  )
}