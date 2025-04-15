import React from 'react';
import products from '../../data/products';
import PropTypes from 'prop-types';

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
}

function ProductCard({ product }) {
    return (
        <div className=''>
            <img className='rounded-xl w-52 h-52 md:w-64 md:h-64'
                src={product.image} alt={product.name} />

            <h3 className='text-sm pt-2 font-bold'>{product.name}</h3>

            <div className='flex text-sm tracking-widest'>
                <div>
                    <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
                    <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
                    <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
                    <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
                    <i className="text-[#ffc633] fa-sharp fa-solid fa-star-half"></i>
                </div>
                <div className="">
                    4.5/5
                </div>
            </div>
            <p className='font-bold text-lg'>${product.price}</p>

        </div>
    );
}

export default ProductCard;