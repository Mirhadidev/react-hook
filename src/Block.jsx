import { useEffect } from "react"

export default function Block(){
    useEffect(()=>{
        console.log("block created");
        return ()=>{
            console.log("Block removed!!!");//clean up Effect ( it is behavior like if else)
            
        }
        
    })
    return(
        <div style={{background:"pink",color:"white",margin:"10px"}}>
            i am a block
        </div>
    )
}