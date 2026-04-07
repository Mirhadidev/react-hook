import { memo } from "react";

export default memo( function AgeBtn({handleAge}){
      console.log("5.AgeBtn");

  return(
    <>
   <button onClick={handleAge}>Increment Age</button>
    </>
  )
})