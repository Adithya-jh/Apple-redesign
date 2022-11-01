import React from 'react'
import {urlFor} from '../sanity'
import Image from 'next/image'

function Product({product}) {
    // console.log(product);
  return (
    <div>
        <div>
            <Image src={urlFor(product.image[0]).url()} 
            layout="fill"
            // objectFit="contain"
            width="300" 
            height="300"
            />
        </div>
    </div>
  );
}

export default Product