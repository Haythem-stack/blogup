import { connectToDB } from "@/app/lib/connectDb";
import User from '@/app/model/model';
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt")

export const POST = async (req, res) =>{


await connectToDB()
  
try{
  const body = await req.json();
  const {username , email, password } = body;
  const hashedPassword = await bcrypt.hash(password, 10)

 
const user= await new User({
    username:username,
    email:email,
    password: hashedPassword
})
await user.save()
console.log("inside api",username,email,password)

return NextResponse.json({ data: user }, { status: 201 });

}catch(err){
  console.log(err)
}
 }



  