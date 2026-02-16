import { supabase } from "@/lib/supabase"

export async function POST(req:Request){

 try{

   const body = await req.json()

   const message = body?.message?.trim()

   // VALIDATION
   if(!message){
     return Response.json(
       {error:"Message empty"},
       {status:400}
     )
   }

   if(message.length > 500){
     return Response.json(
       {error:"Message too long"},
       {status:400}
     )
   }

   const {error} = await supabase
     .from("greetings")
     .insert({
       message
     })

   if(error){
     console.error(error)
     return Response.json({error:"DB error"},{status:500})
   }

   return Response.json({ok:true})

 }catch(err){

   return Response.json(
     {error:"Invalid request"},
     {status:400}
   )

 }

}
