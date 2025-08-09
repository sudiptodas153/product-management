
 
export async function GET() {
const data = {
    message:"success",
    error: false,
    status: 200
}
 
  return Response.json({ data })
}



export async function POST(req) {

 const data = req.body
  return Response.json({ data })
}