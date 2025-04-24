import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../Cart/CartContext';

ProductInfo.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    }).isRequired,
}

function ProductInfo({ product }) {
    // State cho màu sắc, kích thước và số lượng
    const [selectedSize, setSelectedSize] = useState('Large')
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useCart() // truy cập hàm addToCart

    // Mảng chứa các kích thước có sẵn
    const sizes = ['Small', 'Medium', 'Large', 'X-Large']

    // Giảm số lượng nhưng không nhỏ hơn 1
    const handleSubtract = () => setQuantity(Math.max(1, quantity - 1))

    // Tăng số lượng
    const handlePlus = () => setQuantity(quantity + 1)

    // Xử lý thêm vào giỏ hàng với số lượng đã chọn
    const handleAddToCart = () => {
        // Truyền thêm tham số quantity để thêm đúng số lượng sản phẩm đã chọn
        addToCart(product, quantity)
    }

    return (
        <section className="max-w-96 md:max-w-[78rem] mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr] gap-8 md:gap-16">
                {/* Left Col - Product Image */}
                <div className="aspect-square overflow-hidden rounded-3xl bg-[#F2F2F2]">
                    <img className="w-full h-full"
                        src={product.image}
                        alt={product.name}
                    />
                </div>

                {/* Right Col - Product Info */}
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl md:text-5xl font-bold uppercase">{product.name}</h1>
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                            <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
                            <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
                            <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
                            <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
                            <i className="text-[#ffc633] fa-sharp fa-solid fa-star-half"></i>
                        </div>
                        <span className="text-base">4.5/5</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold">${product.price}</span>
                        <span className="text-3xl text-gray-400 line-through">$300</span>
                        <span className="text-red-500 text-lg">-40%</span>
                    </div>

                    {/* Product Desc */}
                    <p className="text-gray-500">
                        {product.desc}
                    </p>
                    <hr className='w-full mx-auto' />

                    {/* Size */}
                    <div className="flex flex-col gap-4">
                        <span className="text-base text-gray-500">Choose Size</span>
                        <div className="flex  gap-3">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-3 md:px-6 py-2 rounded-full text-lg ${selectedSize === size
                                        ? 'bg-black text-white'
                                        : 'bg-[#F0F0F0] text-gray-500 hover:bg-gray-200'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <hr className='w-full mx-auto' />

                    {/* Quantity & Add Button */}
                    <div className="flex gap-4">
                        <div className="flex items-center">
                            <button className="w-12 h-12 flex items-center justify-center bg-[#F0F0F0] rounded-l-full hover:bg-gray-200"
                                onClick={handleSubtract}
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z" fill="black" />
                                </svg>
                            </button>
                            <div className="w-12 h-12 text-xl flex items-center justify-center bg-[#F0F0F0]">
                                {quantity}
                            </div>
                            <button className="w-12 h-12 flex items-center justify-center bg-[#F0F0F0] rounded-r-full hover:bg-gray-200"
                                onClick={handlePlus}
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z" fill="black" />
                                </svg>
                            </button>
                        </div>
                        {/* Button Add */}
                        <button className="flex-1 bg-black text-white py-3 px-6 rounded-full hover:opacity-80 transition-opacity"
                            onClick={handleAddToCart} // Sử dụng hàm đã định nghĩa để add với số lượng đã chọn
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductInfo;