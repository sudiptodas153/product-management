import dbConnect from "@/lib/dbConnect";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { LuMoveRight } from "react-icons/lu";



export default async function Feature() {
  const data = await dbConnect("productCollection").find().toArray();
  return (
    <section className="max-w-11/12 mx-auto border border-gray-300 rounded-2xl px-5 py-3" id="trending">
      <h2 className="flex items-center gap-1 text-2xl md:text-4xl text-center mb-10 font-bold">Trending Products <LuMoveRight size={30} /> </h2>

      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        <div className="flex items-center p-4">
          {data.slice(0, 5).map((product) => (
            <Link key={product._id} href={`/products/${product._id}`}>
              <div

                className="w-96 mr-4 p-3 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 rounded-xl object-cover"
                  loading="lazy"
                />
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {product.name.length == 23 ? product.name : product.name.slice(0, 23) + '...'}
                  </h3>
                  <p className="text-blue-600 font-bold mb-2">{product.price}</p>

                </div>
              </div>
            </Link>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
