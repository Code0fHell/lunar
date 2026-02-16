import { greetings } from "@/lib/store";

export async function POST(req:Request){

 const body = await req.json();

 greetings.push({
   message: body.message,
   time: Date.now()
 });

 return Response.json({ok:true});
}

export async function GET(){

 return Response.json(greetings);
}
