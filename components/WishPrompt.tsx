"use client"

import { useState } from "react";

export default function WishPrompt(){

 const [show,setShow]=useState(false);
 const [message,setMessage]=useState("");
 const [sent,setSent]=useState(false);

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

     <div className="bg-black/50 backdrop-blur-md border border-yellow-400/40 p-4 rounded-xl mt-2">

       <input
         placeholder="Nhập lời chúc..."
         className="bg-white text-black px-3 py-2 rounded-lg outline-none w-64"
         onChange={e=>setMessage(e.target.value)}
       />

       <button
         onClick={async()=>{
           await fetch("/api/greetings",{
             method:"POST",
             body:JSON.stringify({message})
           });

           setSent(true);
         }}
         className="ml-2 bg-yellow-400 text-black px-3 py-2 rounded-lg"
       >
         Gửi
       </button>

     </div>
   )}

 </div>
 )
}
