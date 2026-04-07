import { memo } from "react";

export default memo( function Age({age}){
      console.log("4.Age");

  // console.log();
  
  return(
    <>
    <h3>The age is {age}</h3>
    </>
  )
})