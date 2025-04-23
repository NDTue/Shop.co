import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';
import { useCart } from '../components/layout/Cart/CartContext';
import CartOrder from '../components/layout/Cart/CartOrder';

function Cart(props) {

    return (
        <>
            <Header />
            <main>
                {/* Bread Crumb */}
                <nav className="pt-24 md:pt-36 mb-4 md:mb-5">
                    <div className='flex flex-row justify-between items-center md:gap-10 max-w-96 md:max-w-[78rem] my-0 mx-auto xl:mx-auto md:ml-16 md:mr-16'>
                        <ol className="flex items-center whitespace-nowrap">
                            <li className="inline-flex items-center">
                                <Link to='/' className="flex items-center text-sm text-gray-500 hover:text-black focus:outline-hidden focus:text-blue-600" href="#">
                                    Home
                                </Link>
                                <svg className="shrink-0 mx-2 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate" aria-current="page">
                                Cart
                            </li>
                        </ol>
                    </div>
                </nav>

                <CartOrder/>
            </main>
            <div className="h-[500px]"></div>
            <Footer />
        </>
    );
}

export default Cart;