"use server"
import dbConnect from "@/lib/dbConnect"

export const orderProduct = async (payload) => {
    const orderCollection = dbConnect("orderCollection");

    const result = await orderCollection.insertOne(payload)
    result.insertedId = result.insertedId.toString()
    return result;


}
