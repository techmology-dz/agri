import connectMongoDb from "@/lib/mongodb";
import Users from "@/models/users";
import { log } from "console";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const {
    email,
    fullName,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
  } = await request.json();

//   return await axios.post(url, data);
console.log({
  email,
  fullName,
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
});

await connectMongoDb ()
await Users.create({
  email,
  fullName,
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
})
return NextResponse.json({message : 'created'},{status : 200})
}
export async function GET() {

//   return await axios.post(url, data);
try {
  await connectMongoDb ()
  const users = await Users.find()
  return NextResponse.json({users : ['1']})
} catch (error) {
    console.log(error);
    
}
}

