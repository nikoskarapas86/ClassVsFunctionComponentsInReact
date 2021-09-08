import { useEffect, useState } from "react";


export default function Clock_fn(){
        const[date,setDate]= useState(new Date());
    //    const date  = useState(new Date())[0];
    //    const setDate = useState(new Date())[1];
        useEffect(
            ()=>setInterval(()=>setDate(new Date)
            
             ,1000 )
        )
        return(
            <div>{date.toLocaleTimeString()}</div>
        )
}