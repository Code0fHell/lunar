import { supabase } from "@/lib/supabase"

export async function GET(){

 const {data,error} = await supabase
   .from("greetings")
   .select("*")
   .order("created_at",{ascending:false})

 if(error){

   return Response.json(
     {error:"Fetch failed"},
     {status:500}
   )

 }

 return Response.json(data)
}
