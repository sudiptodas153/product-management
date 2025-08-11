"use server"
import bcrypt from 'bcrypt'
import dbConnect from "@/lib/dbConnect"

export const RegisterUser = async (payload) => {
    const userCollection = dbConnect("userCollection");
    const { password } = payload;
    const user = await userCollection.findOne({ email: payload.email })
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10)
        payload.password = hashedPassword;
        const result = await userCollection.insertOne(payload);
        result.insertedId = result.insertedId.toString()
        return result;
    }
    return null;


}
