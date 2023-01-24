import React from 'react';
import { useRouter } from 'next/router';
import { data } from '../../data/data';

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const productData = data.find((e) => e.name === id);
  console.log('data', productData);
  return (
    <div>
      <div>Image</div>
      <div>Title</div>
      <div>Aff Link</div>
      <div>Description</div>
    </div>
  );
}
