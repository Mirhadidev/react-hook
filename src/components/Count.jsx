import { memo } from "react";

export default memo( function Count({count}){
      console.log("2.Count");

  return(
    <>
  <h3>The count is {count}</h3>
    </>
  )
})