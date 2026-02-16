"use client"

import { useState } from "react";

export default function GreetingPanel(){

 const [message,setMessage]=useState("");
 const [loading,setLoading]=useState(false);

 const send=async()=>{

   if(!message.trim()) return;

   try{

     setLoading(true);

     const res = await fetch("/api/greeting",{
       method:"POST",
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify({message})
     });

     if(!res.ok) throw new Error();

     setMessage("");
     alert("Đã gửi 🎉");

   }catch{
     alert("Gửi thất bại ❌");
   }finally{
     setLoading(false);
   }

 };

 return(

  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/10 border border-yellow-400/30 rounded-2xl p-4 flex gap-2 shadow-xl">

    <input
      value={message}
      className="bg-transparent text-white placeholder-yellow-200 outline-none"
      placeholder="Gửi lời chúc năm mới..."
      onChange={e=>setMessage(e.target.value)}
    />

    <button
      disabled={loading}
      onClick={send}
      className="bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-red-900 font-bold px-4 py-2 rounded-xl transition"
    >
      {loading ? "Sending..." : "🎆 Gửi"}
    </button>

  </div>
 );
}
