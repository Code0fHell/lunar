"use client"

import { useState } from "react";

export default function WishPrompt(){

 const [show,setShow]=useState(false);
 const [message,setMessage]=useState("");
 const [sent,setSent]=useState(false);
 const [loading,setLoading]=useState(false);

 const send = async()=>{

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

     setSent(true);

   }catch{
     alert("Gửi thất bại 😭")
   }finally{
     setLoading(false);
   }

 };

 if(sent){
   return(
     <div className="fixed right-10 top-10 bg-black/40 backdrop-blur-md text-yellow-300 p-4 rounded-xl">
       Cảm ơn em yêu của anh❤️
     </div>
   )
 }

 return(

 <div className="fixed right-10 top-10 text-white">

   {!show && (

     <button
       onClick={()=>setShow(true)}
       className="bg-red-600 px-4 py-2 rounded-xl shadow-lg hover:bg-red-500 transition"
     >
       💬 Em có muốn gửi đôi lời đến anh không?
     </button>

   )}

   {show && (

     <div className="bg-black/50 backdrop-blur-md border border-yellow-400/40 p-4 rounded-xl mt-2 flex gap-2">

       <input
         value={message}
         placeholder="Nhập lời chúc..."
         className="bg-white text-black px-3 py-2 rounded-lg outline-none w-64"
         onChange={e=>setMessage(e.target.value)}
       />

       <button
         disabled={loading}
         onClick={send}
         className="bg-yellow-400 text-black px-3 py-2 rounded-lg disabled:opacity-50"
       >
         {loading ? "..." : "Gửi"}
       </button>

     </div>
   )}

 </div>
 )
}
