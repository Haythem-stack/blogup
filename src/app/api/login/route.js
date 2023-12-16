import { connectToDB } from "@/app/lib/connectDb"
import User from '@/app/model/model';
import { NextResponse } from "next/server"
import { redirect } from "next/navigation";
const bcrypt = require("bcrypt")


export const POST = async (req, res) => {

    connectToDB()

    try{
        const body = await req.json();
        const {name ,password} = body;
        const user = await User.findOne({username: name})

        const match = await bcrypt.compare(password, user.password)
        if(match){
            
            return NextResponse.json({ data: body }, { status: 200 });
            
        } else {
            return NextResponse.json({ data: body }, { status: 404 });
        }  
         
    } catch(err){
        console.log(err)
    }
}
