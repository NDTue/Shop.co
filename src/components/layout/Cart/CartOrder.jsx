import React from 'react';
import { useCart } from './CartContext';

function CartOrder() {
    // Sử dụng tất cả các hàm và giá trị từ CartContext
    const {
        cartItems,
        updateQuantity,
        removeFromCart,
        subtotal,
        deliveryFee,
        total
    } = useCart();

    // Giảm số lượng của một sản phẩm cụ thể
    const handleSubtract = (item) => {
        // Nếu số lượng hiện tại là 1, hành động giảm sẽ xóa sản phẩm
        if (item.quantity === 1) {
            removeFromCart(item.id);
        } else {
            // Nếu lớn hơn 1, giảm 1 đơn vị
            updateQuantity(item.id, item.quantity - 1);
        }
    };

    // Tăng số lượng của một sản phẩm cụ thể
    const handlePlus = (item) => {
        updateQuantity(item.id, item.quantity + 1);
    };

    return (
        <section className='pt-5 pb-12 md:pb-16'>
            <div className='max-w-96 md:max-w-[78rem] my-0 mx-auto'>
                <h1 className='font-extrabold text-3xl pb-5'>YOUR CART</h1>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_40%]">
                    {/* Product List */}
                    <div className="md:col-span-1 space-y-5 border rounded-3xl shadow-lg">
                        {/* Kiểm tra nếu giỏ hàng rỗng thì hiển thị thông báo */}
                        {cartItems.length === 0 ? (
                            <div className="flex items-center justify-center p-8 ">
                                <p className="text-xl text-gray-500">Your cart is empty</p>
                            </div>
                        ) : (
                            // Nếu giỏ hàng có sản phẩm thì hiển thị danh sách
                            cartItems.map((item, index) => (
                                <div key={item.id} 
                                className="flex flex-col !m-0 pt-2 px-2 md:px-8 pb-3 md:pb-4 ">
                                    {/* Product Item - Thêm border-top cho item có index từ 1 */}
                                    <div className={`flex items-center justify-between pt-4 ${index > 0 && 'border-t'}`}>
                                        <div className="flex items-center gap-3">
                                            <img src={item.image} alt={item.name} className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-lg" />
                                            {/* Product Info */}
                                            <div className='flex flex-col gap-2 md:gap-5'>
                                                <h2 className="font-semibold tracking-tight text-base capitalize md:text-2xl line-clamp-2 
                                                        w-full">
                                                    {item.name}
                                                </h2>
                                                <p className='w-1/2 md:w-4/5'>
                                                    <span className=''>Category:
                                                        <span className='text-gray-500 font-normal text-lg'> {item.category}</span>
                                                    </span>
                                                </p>
                                                {/* Price each Product */}
                                                <p className='font-semibold text-lg'>
                                                    ${item.price.toFixed(2)} x 1
                                                </p>
                                            </div>
                                        </div>

                                        {/* Remove button - SubTotal - Quantity Controls */}
                                        <div className="flex flex-col items-end md:items-center justify-between gap-5">
                                            {/* Remove Button */}
                                            <button className="flex items-center gap-1 rounded-full bg-red-50 p-2"
                                                onClick={() => removeFromCart(item.id)} // Xóa sản phẩm khỏi giỏ hàng
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 size-5 stroke-red-500 lg:size-6"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                                            </button>

                                            {/* Subtotal for each item */}
                                            <div className="text-xl font-bold">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center">
                                                <button className="w-8 h-8 flex items-center justify-center bg-[#F0F0F0] rounded-l-full hover:bg-gray-200"
                                                    onClick={() => handleSubtract(item)} // Giảm số lượng sản phẩm
                                                >
                                                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z" fill="black" />
                                                    </svg>
                                                </button>
                                                <div className="w-8 h-8 text-base flex items-center justify-center bg-[#F0F0F0]">
                                                    {item.quantity}
                                                </div>
                                                <button className="w-8 h-8 flex items-center justify-center bg-[#F0F0F0] rounded-r-full hover:bg-gray-200"
                                                    onClick={() => handlePlus(item)} // Tăng số lượng sản phẩm
                                                >
                                                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z" fill="black" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            ))
                        )}
                    </div>

                    {/* Order Summary */}
                    <div className="sticky bottom-0 md:top-36 border bg-gray-50 md:bg-white p-4 md:p-6 rounded-3xl space-y-4 h-fit shadow-lg">
                        <h2 className="text-2xl font-bold">Order Summary</h2>
                        <div className="flex justify-between text-lg">
                            <span className='text-gray-500'>Subtotal</span>
                            <span className='font-bold'>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-lg">
                            <span className='text-gray-500'>Discount</span>
                            <span className='font-bold text-[#ff3333]'>-$0.00</span>
                        </div>
                        <div className="flex justify-between text-lg">
                            <span className='text-gray-500'>Delivery Fee</span>
                            <span className='font-bold'>${deliveryFee.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-2xl border-t pt-2">
                            <span className=''>Total</span>
                            <span className='font-bold'>${total.toFixed(2)}</span>
                        </div>

                        {/* Input Code - Apply Button */}
                        <div className='grid w-full grid-cols-[1fr_7rem] gap-3'>
                            <label className='flex relative'>
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 transform">
                                    <svg className=''
                                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.0766 12.4857L13.7653 3.17444C13.5917 2.9997 13.3851 2.86115 13.1576 2.76685C12.93 2.67254 12.686 2.62435 12.4397 2.62507H3.75001C3.45164 2.62507 3.16549 2.7436 2.95451 2.95457C2.74353 3.16555 2.62501 3.4517 2.62501 3.75007V12.4398C2.62429 12.6861 2.67248 12.9301 2.76679 13.1576C2.86109 13.3852 2.99963 13.5918 3.17438 13.7654L12.4856 23.0766C12.8372 23.4281 13.3141 23.6256 13.8113 23.6256C14.3084 23.6256 14.7853 23.4281 15.1369 23.0766L23.0766 15.1369C23.4281 14.7853 23.6255 14.3085 23.6255 13.8113C23.6255 13.3141 23.4281 12.8373 23.0766 12.4857ZM13.8113 21.2204L4.87501 12.2813V4.87507H12.2813L21.2175 13.8113L13.8113 21.2204ZM9.37501 7.87507C9.37501 8.17174 9.28703 8.46175 9.12221 8.70842C8.95739 8.9551 8.72312 9.14736 8.44903 9.26089C8.17494 9.37442 7.87334 9.40412 7.58237 9.34625C7.2914 9.28837 7.02413 9.14551 6.81435 8.93573C6.60457 8.72595 6.46171 8.45868 6.40383 8.1677C6.34595 7.87673 6.37566 7.57513 6.48919 7.30104C6.60272 7.02695 6.79498 6.79269 7.04165 6.62786C7.28833 6.46304 7.57834 6.37507 7.87501 6.37507C8.27283 6.37507 8.65436 6.5331 8.93567 6.81441C9.21697 7.09571 9.37501 7.47724 9.37501 7.87507Z" fill="black" fillOpacity="0.4" />
                                    </svg>
                                </div>
                                <input className='bg-[rgba(240,240,240,1)] rounded-full w-full py-3 pl-12  '
                                    type="text" placeholder='Add promo code' />
                            </label>
                            <button className="text-white bg-black rounded-full py-3 px-6 hover:opacity-80 transition-opacity ">
                                Apply
                            </button>
                        </div>

                        {/* Checkout button */}
                        {cartItems.length > 0 && (
                            <button className="flex justify-center items-center w-full bg-black text-white py-3 px-6 rounded-full hover:opacity-80 transition-opacity mt-4">
                                Proceed to Checkout
                                <div className='pl-3'>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.7959 4.4541L21.5459 11.2041C21.6508 11.3086 21.734 11.4328 21.7908 11.5696C21.8476 11.7063 21.8768 11.8529 21.8768 12.001C21.8768 12.149 21.8476 12.2957 21.7908 12.4324C21.734 12.5691 21.6508 12.6933 21.5459 12.7979L14.7959 19.5479C14.5846 19.7592 14.2979 19.8779 13.9991 19.8779C13.7002 19.8779 13.4135 19.7592 13.2022 19.5479C12.9908 19.3365 12.8721 19.0499 12.8721 18.751C12.8721 18.4521 12.9908 18.1654 13.2022 17.9541L18.0313 13.125L4.25 13.125C3.95163 13.125 3.66548 13.0065 3.4545 12.7955C3.24353 12.5846 3.125 12.2984 3.125 12C3.125 11.7017 3.24353 11.4155 3.45451 11.2045C3.66548 10.9936 3.95163 10.875 4.25 10.875L18.0313 10.875L13.2013 6.04598C12.9899 5.83463 12.8712 5.54799 12.8712 5.2491C12.8712 4.95022 12.9899 4.66357 13.2013 4.45223C13.4126 4.24088 13.6992 4.12215 13.9981 4.12215C14.297 4.12215 14.5837 4.24088 14.795 4.45223L14.7959 4.4541Z" fill="white" />
                                    </svg>
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartOrder;