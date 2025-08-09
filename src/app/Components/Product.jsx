import dbConnect from '@/lib/dbConnect';
import Link from 'next/link';
import React from 'react'




export default async function Products() {

    const data = await dbConnect("productCollection").find().toArray();
    return (
        <div className='max-w-11/12 mx-auto my-20 grid grid-cols-1 md:grid-cols-4 gap-4'>
            {data.slice(0, 8).map((p) => (
                <div key={p._id} className="flex justify-center">
                    <div className="card md:w-96 p-3 bg-base-100 shadow-xl border flex flex-col">
                        <figure className="h-48">
                            <img
                                src={p.image}
                                alt={p.name}
                                className="h-full w-full object-cover"
                            />
                        </figure>
                        <div className=" flex flex-col justify-between flex-1">
                            <div>
                                <h2 className="card-title">{p.name.length == 23 ? p.name : p.name.slice(0, 23) + '...'}</h2>
                                <div className='flex items-center justify-between'>
                                    <p className="text-sm text-gray-500">Category: {p.category}</p>
                                    <p className="text-lg font-semibold text-primary">${p.price}</p>
                                </div>
                            </div>
                            <div className="">
                                <Link href={`/products/${p._id}`}><button className="btn btn-primary w-full btn-sm">Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
