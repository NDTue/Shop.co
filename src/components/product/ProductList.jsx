import React from 'react';
import ProductCard from './ProductCard';
import products from '../../data/products';

function ProductList({className = 'md:grid-cols-4', products}) {
    return (
        
        <div className={`grid grid-cols-2 ${className} gap-x-5 gap-y-9 justify-items-center md:justify-items-start`}>
            {products
                .map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </div>
    );
}

export default ProductList;