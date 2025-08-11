"use server"
import dbConnect from '@/lib/dbConnect';
import bcrypt from 'bcrypt'

export const loginUser = async (payload) => {
    const userCollection = dbConnect("userCollection");
    const {email, password} = payload;
    const user = await userCollection.findOne({email})
    if (!user) return null;
    const isPasswordOk = bcrypt.compare(password, user.password)
    if(!isPasswordOk) return null;
    return user;

}