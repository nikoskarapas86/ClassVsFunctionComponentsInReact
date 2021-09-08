import { useEffect,useState } from "react";


export default function Counter(){
let [counter,setCounter]=useState(0);
useEffect(()=>{
    document.title =counter
})
    return (
        <div><button onClick={()=>{}}>click me</button> </div>
    )
}