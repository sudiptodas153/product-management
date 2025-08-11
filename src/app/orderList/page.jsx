// src/app/orderList/page.jsx (Server Component)
import dbConnect from '@/lib/dbConnect';
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';
import Image from 'next/image';

export default async function OrderListPage() {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-lg font-medium text-gray-700">Please login to see your orders.</p>
            </div>
        );
    }

    const orderCollection = await dbConnect("orderCollection");
    const orders = await orderCollection.find({ email: session.user.email }).toArray();

    return (
        <div className="min-h-screen p-6 bg-gray-50">
            {orders.length === 0 ? (
                <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                    <h1 className="text-xl font-semibold mb-4">You have no orders yet</h1>
                    <p className="text-gray-600">Start shopping and place your first order!</p>
                    <Link href="/products"><button className='btn btn-primary rounded-lg mt-4'>Buy Product</button></Link>
                </div>
            ) : (
                <div className="max-w-11/12 mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-extrabold mb-8 text-indigo-700 border-b-2 border-indigo-300 pb-2">
                        Your Orders
                    </h2>
                    <ul className="space-y-6">
                        {orders.map((order) => (
                            <li
                                key={order._id.toString()}
                                className="flex gap-5 flex-col md:flex-row md:items-center bg-gradient-to-r from-indigo-50 to-white border border-indigo-200 rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Product Image */}
                                {order.image ? (
                                    <Image
                                        width={150}
                                        height={30}
                                        src={order.image}
                                        alt={order.productName}
                                        className=" rounded-lg object-cover "
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-lg mr-6 mx-auto md:mx-0 mb-4 md:mb-0 flex items-center justify-center text-gray-400">
                                        No Image
                                    </div>
                                )}

                                {/* Order Info */}
                                <div className="flex-1">
                                    <p className="text-xl font-semibold text-indigo-900">{order.productName}</p>
                                    <p className="text-sm text-indigo-600 mt-1">
                                        Order ID: <span className="font-mono text-[10px]">{order.orderId || order._id.toString()}</span>
                                    </p>
                                    <p className="mt-2 text-gray-700">
                                        Quantity: <span className="font-semibold">{order.quantity}</span>
                                    </p>
                                    <p className="mt-1 text-gray-500 italic text-sm">Ordered by: {order.name || 'N/A'}</p>
                                    <p className="mt-1 text-gray-500 italic text-sm">Delivery Address: {order.address || 'N/A'}</p>
                                </div>

                                {/* Status or other action (Optional) */}
                                <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-center">
                                    <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm">
                                        {order.status || "Pending"}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            )}
        </div>
    );
}
