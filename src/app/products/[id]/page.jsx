import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function ProductDetails({ params }) {
  const p = await params;
  const data = await dbConnect("productCollection").findOne({ _id: new ObjectId(p.id) });
  return (
    <div className='max-w-11/12 mx-auto'>
      <div className=" my-10 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="md:w-1/2 w-full h-64 md:h-auto">
            <img
              src={data.image}
              alt={data.name}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 w-full flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{data.name}</h1>

              <p className="text-gray-600 mb-4">{data.description}</p>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="text-xl font-semibold text-primary">
                  ${data.price}
                </span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                  Category: {data.category}
                </span>
              </div>

              <p className="mb-2">
                <strong>Brand:</strong> {data.brand}
              </p>

              <p className="mb-2">
                <strong>Warranty:</strong> {data.warranty}
              </p>

              <div className="flex items-center mb-4">
                <div className="text-yellow-400 mr-2 flex space-x-1">
                  {/* Star Rating */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {i < Math.round(data.rating) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  ({data.reviewsCount} reviews)
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <button className="btn btn-primary mt-6 w-full py-3 text-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
