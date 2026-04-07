import { memo } from "react";

export default memo( function Title(){
    console.log("1.Title");
    
    return(
        <>
        <h1>My App</h1>
        </>
    )
})