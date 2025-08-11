"use client";
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import { orderProduct } from '../action/auth/orderProduct';
import Swal from 'sweetalert2';



export default function OrderForm({ product, emails }) {

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = product.name;
        const image = product.image;
        const price = product.price;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.phone.value;
        const quantity = form.quantity.value;
        const address = form.address.value;
        const orderId = uuidv4();

        try {
            await orderProduct({ orderId, productName, image, price, name, email, number, quantity, address });

            // Success Alert
            Swal.fire({
                icon: "success",
                title: "Order Placed!",
                text: "Your order has been placed successfully.",
                confirmButtonText: "OK",
            });
            form.reset(); // ফর্ম রিসেট করতে চাইলে
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Please try again.",
            });
        }
    };



    return (
        <form onSubmit={handleSubmit} className="max-w-11/12 mx-auto bg-white p-6 rounded-lg shadow-md space-y-6">
            {/* Product Info */}
            <div className="md:flex justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="mt-2 font-semibold">Price: ${product.price}</p>
                </div>
                <Image className='hidden md:flex' src={product.image} width={150} height={30} alt='product' />
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block mb-1 font-medium">Name <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Your full name"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Email <span className="text-red-500">*</span></label>
                    <input
                        type="email"
                        name="email"
                        value={emails}
                        readOnly
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Your email address"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="type your number...."
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        defaultValue={1}
                        min="1"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>

            <div>
                <label className="block mb-1 font-medium">Delivery Address <span className="text-red-500">*</span></label>
                <textarea
                    name="address"
                    required
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your full delivery address"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold transition"
            >
                Place Order
            </button>
        </form>
    );
}
