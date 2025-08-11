
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import OrderForm from '@/app/Components/OrderForm';
import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';

export default async function OrderPage({ params }) {
  const productData = await dbConnect("productCollection").findOne({ _id: new ObjectId(params.id) });

  // MongoDB Object কে plain JS object এ কনভার্ট করলাম, _id কে string এ রূপান্তর করছি
  const product = {
    ...productData,
    _id: productData._id.toString(),
  };
  const session = await getServerSession(authOptions);
  const emails = session?.user?.email
  console.log(emails)

  return (
    <div className=" bg-gray-50 p-4">
      <OrderForm product={product} emails={emails}/>
    </div>
  );
}
