import { connectToDB } from "@/app/lib/connectDb";
import User from '@/app/model/model';
import { NextResponse } from "next/server";

export const GET = async (req, res) =>{


    await connectToDB()
      
    try{
    const users = await User.find()
    console.log(users)
    
    return NextResponse.json({ users }, { status: 201 });
    
    }catch(err){
      console.log(err)
    }
     }