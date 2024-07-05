import React from 'react';

const HomeSectionCard = ({product}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden mx-3">
      <div className="flex justify-center h-48 w-full">
        <img
          className="object-contain object-top h-full"
          src={product.imageUrl}
          alt="Product"
        />
      </div>
      <div className="p-4">
        <h1 className="text-lg font-medium text-gray-900">{product.brand}</h1>
        <p className="mt-2 text-sm text-gray-500"> {product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;

