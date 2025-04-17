import React from 'react';
import ProductCard from './ProductCard';
import products from '../../data/products';

function ProductList(props) {
    return (
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5">
            {products
                .map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </div>
    );
}

export default ProductList;