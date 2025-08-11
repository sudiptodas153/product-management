import React from 'react';
import { LuMoveRight } from "react-icons/lu";

export default function ProductBanner() {
    return (
        <section className="bg-gray-50">
            <div className="max-w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">

                {/* Right Side - Image */}
                <div className="flex justify-center order-1 md:order-2">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                        alt="Product Management"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>

                {/* Left Side - Text Content */}
                <div className="order-2 md:order-1">
                    <h1 className="text-4xl font-bold text-blue-500 mb-4">
                        Manage Your Products Effortlessly
                    </h1>
                    <p className="text-gray-600 mb-3">
                        Streamline your workflow with our intuitive product management tools.
                        Organize, track, and update your products in one simple dashboard.
                    </p>
                    <div className="">
                        <LuMoveRight color='blue' size={50} />
                    </div>
                </div>

            </div>

        </section>
    );
}
