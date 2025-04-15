import React from 'react';
import ProductCard from './ProductCard';
import products from '../../data/products';

function ProductList(props) {
    return (
        <main>
            <div className='max-w-96 md:max-w-[78rem] my-0 mx-auto pb-14 md:pb-16'>
                <h2 className='pt-10 pb-8 md:pt-36 text-4xl md:text-5xl uppercase text-center font-extrabold'>
                    New Arrivals
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5">
                    {products
                        .filter(product => product.id >= 1 && product.id <= 2)
                        .map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}

                    <div className='pt-8 '>
                        <a className="flex items-center justify-center border rounded-full w-96 h-11 ">
                            View All
                        </a>
                    </div>
                </div>
            </div>

            <hr className="max-w-96 md:max-w-[78rem] my-0 mx-auto" />

            {/* TOP SELLING */}
            <div className="max-w-96 md:max-w-[78rem] my-0 mx-auto pb-16">
                <h2 className='pt-10 pb-8 md:pt-36 text-4xl md:text-5xl uppercase text-center font-extrabold'>
                    Top selling
                </h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-x-5'>
                    {products
                        .filter(product => product.id >= 5 && product.id <= 6)
                        .map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    {/* Button View All */}
                    <div className='pt-8 '>
                        <a className="flex items-center justify-center border rounded-full w-96 h-11 ">
                            View All
                        </a>
                    </div>
                </div>
            </div>

            {/* BROWSE BY DRESS STYLE */}
            <div className="bg-[#f0f0f0] max-w-96 md:max-w-[78rem] my-0 mx-auto pb-10 md:pb-16 rounded-3xl">
                <h2 className='pt-10 pb-8 md:pt-36 text-5xl md:text-5xl uppercase text-center font-extrabold'>
                    Browse by dress style
                </h2>

                <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-stretch md:items-center gap-5">
                    <div className="relative w-80 flex mx-auto max-w-sm h-60 rounded-xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover "
                            src="/assets/products/Casual.png"
                            alt="Casual"
                        />
                        <div className="absolute top-5 left-5 z-10 text-3xl font-semibold">
                            Casual
                        </div>
                    </div>
                    <div className="relative w-80 flex mx-auto max-w-sm h-60 rounded-xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover "
                            src="/assets/products/Formal.png"
                            alt="Formal"
                        />
                        <div className="absolute top-5 left-5 z-10 text-3xl font-semibold">
                            Formal
                        </div>
                    </div>
                    <div className="relative w-80 flex mx-auto max-w-sm h-60 rounded-xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover "
                            src="/assets/products/Party.png"
                            alt="Party"
                        />
                        <div className="absolute top-5 left-5 z-10 text-3xl font-semibold">
                            Party
                        </div>
                    </div>
                    <div className="relative w-80 flex mx-auto max-w-sm h-60 rounded-xl overflow-hidden">
                        <img
                            className="w-full h-full object-cover "
                            src="/assets/products/Gym.png"
                            alt="Gym"
                        />
                        <div className="absolute top-5 left-5 z-10 text-3xl font-semibold">
                            Gym
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews */}
            <div>
                <div className="relative max-w-96 md:max-w-[78rem] my-0 mx-auto mt-10 pb-16 rounded-3xl">
                    {/* Heading */}
                    <h2 className='uppercase inline-block text-left text-4xl md:text-5xl font-bold'>
                        Our happy Customers
                    </h2>
                    {/* Arrows */}
                    <div className="absolute right-0 top-7">
                        <button className="hover:opacity-50">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.70406 4.4541L2.95406 11.2041C2.84918 11.3086 2.76597 11.4328 2.70919 11.5696C2.6524 11.7063 2.62317 11.8529 2.62317 12.001C2.62317 12.149 2.6524 12.2957 2.70919 12.4324C2.76597 12.5691 2.84918 12.6933 2.95406 12.7979L9.70406 19.5479C9.91541 19.7592 10.2021 19.8779 10.5009 19.8779C10.7998 19.8779 11.0865 19.7592 11.2978 19.5479C11.5092 19.3365 11.6279 19.0499 11.6279 18.751C11.6279 18.4521 11.5092 18.1654 11.2978 17.9541L6.46875 13.125L20.25 13.125C20.5484 13.125 20.8345 13.0065 21.0455 12.7955C21.2565 12.5846 21.375 12.2984 21.375 12C21.375 11.7017 21.2565 11.4155 21.0455 11.2045C20.8345 10.9936 20.5484 10.875 20.25 10.875L6.46875 10.875L11.2987 6.04598C11.5101 5.83463 11.6288 5.54799 11.6288 5.2491C11.6288 4.95022 11.5101 4.66357 11.2987 4.45223C11.0874 4.24088 10.8008 4.12215 10.5019 4.12215C10.203 4.12215 9.91634 4.24088 9.705 4.45223L9.70406 4.4541Z" fill="black" />
                            </svg>
                        </button>
                        <button className="hover:opacity-50">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2959 4.4541L21.0459 11.2041C21.1508 11.3086 21.234 11.4328 21.2908 11.5696C21.3476 11.7063 21.3768 11.8529 21.3768 12.001C21.3768 12.149 21.3476 12.2957 21.2908 12.4324C21.234 12.5691 21.1508 12.6933 21.0459 12.7979L14.2959 19.5479C14.0846 19.7592 13.7979 19.8779 13.4991 19.8779C13.2002 19.8779 12.9135 19.7592 12.7022 19.5479C12.4908 19.3365 12.3721 19.0499 12.3721 18.751C12.3721 18.4521 12.4908 18.1654 12.7022 17.9541L17.5313 13.125L3.75 13.125C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5846 2.625 12.2984 2.625 12C2.625 11.7017 2.74353 11.4155 2.95451 11.2045C3.16548 10.9936 3.45163 10.875 3.75 10.875L17.5313 10.875L12.7013 6.04598C12.4899 5.83463 12.3712 5.54799 12.3712 5.2491C12.3712 4.95022 12.4899 4.66357 12.7013 4.45223C12.9126 4.24088 13.1992 4.12215 13.4981 4.12215C13.797 4.12215 14.0837 4.24088 14.295 4.45223L14.2959 4.4541Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                    {/*  */}
                </div>
            </div>

        </main>
    );
}

export default ProductList;