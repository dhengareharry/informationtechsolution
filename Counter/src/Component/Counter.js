import { useState } from "react";
import "./Counter.css"
export default function Counter(){
    const [count,setCount]=useState(0)
   const increament = ()=>{
    setCount(count+1)
   }
   const decreament = ()=>{
    if(count<=0){
        return
    }
    setCount(count-1)
    
   }
    return(
        <>
        <div className="container">
            <h1>{count}</h1>
            <div className="btn-container">
                <button onClick={decreament}>-</button>
                <button onClick={increament}>+</button>
            </div>
        </div>
        </>
    )
}