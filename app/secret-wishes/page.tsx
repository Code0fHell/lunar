"use client"

import { useEffect,useState } from "react";

export default function Secret(){

 const [data,setData]=useState([]);

 useEffect(()=>{
   fetch("/api/greetings")
   .then(r=>r.json())
   .then(setData);
 },[]);

 return(

  <div>

    {data.map((w,i)=>(
      <div key={i}>{w.message}</div>
    ))}

  </div>
 )
}
