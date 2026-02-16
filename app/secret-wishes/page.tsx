"use client"

import { useEffect,useState } from "react";

export default function Secret(){

 const [data,setData]=useState<any[]>([]);

 useEffect(()=>{

   fetch("/api/greetings")
     .then(r=>r.json())
     .then(res=>{
       if(Array.isArray(res)){
         setData(res)
       }
     });

 },[]);

 return(

  <div className="p-10 text-white">

    {data.map((w)=>(
      <div key={w.id} className="mb-2">
        {w.message}
      </div>
    ))}

  </div>
 )
}
