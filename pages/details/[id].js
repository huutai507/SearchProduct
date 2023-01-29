import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { data } from '../../data/data';
import parse from 'html-react-parser';

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const productData = data.find((e) => e.name === id);

  return (
    <div className='details-product'>
      {productData && (
        <>
          <div className='title-details'>
            <h2>{productData.title}</h2>
          </div>
          <div className='img-details pt-10'>
            <img src={productData.imglink} alt='' />
          </div>
          <div className='notice-details pt-10'>
            <p> Links May display A similar product or Search results for similar products.</p>
          </div>
          <div className='btn-link pt-16'>
            <a href={productData.usalink} target='_blank' className='custom-button'>
              Check Price Amazon
            </a>
            <a href={productData.aliexpress} target='_blank' className='custom-button'>
              Check Price Aliexpress
            </a>
          </div>
          <div className='description-details pt-16'>{parse(productData.descriptions)}</div>
        </>
      )}
    </div>
  );
}
