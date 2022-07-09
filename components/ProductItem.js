/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export const ProductItem = ({ product }) => {
    console.log(product)
    // console.log(product.slug)
    return (
        // main card div
        <div className='card'>
            {/* image section linked  */}
            <Link href={`/product/${product.slug}`}>
                <a>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="rounded shadow"
                    />
                </a>
            </Link>
            {/* below image info section */}
            <div className='flex flex-col items-center justify-center p-5' >
                <Link href={`/product/${product.slug}`}>
                    <a>
                        <h2 className='text-lg'>{product.name}</h2>
                    </a>
                </Link>
                <p className='mb-2 '>{product.brand}</p>
                <p>£{product.price}</p>
                <button className='primary-button' type='button'>
                    Add to cart
                </button>
            </div>
        </div>
    )
}
