import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../../../data/products';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import Pagination from '../../common/Pagination';
import ProductList from '../../product/ProductList';

function Polos(props) {
    const productsPerPage = 12
    const [currentPage, setCurrentPage] = useState(1)

    // Lọc sp theo category = polo
    const filteredProducts = products.filter(product => product.category.toLowerCase() === 'polo')

    // Tính tổng số trang dựa trên số lượng sản phẩm đã lọc (filteredProducts.length)
    // VD: filteredProducts.length = 20 và productsPerPage = 9 => (20 / 9) = 3 (làm tròn lên)
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

    // Tính danh sách sản phẩm của trang hiện tại
    const startIndex = (currentPage - 1) * productsPerPage // currentPage - 1 => bắt đầu từ số 0 (mảng)
    // Lấy danh sách sản phẩm từ startIndex đến startIndex + productsPerPage
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)

    // Chuyển trang
    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            <Header />
            <main className='pb-5 md:pb-10'>
                {/* BreadCrumb */}
                <nav className="pt-24 md:pt-36 mb-4 md:mb-5">
                    <div className='flex flex-row justify-between items-center md:gap-10 max-w-96 md:max-w-[78rem] my-0 mx-auto xl:mx-auto md:ml-16 md:mr-16'>
                        <ol className="flex items-center whitespace-nowrap">
                            <Link to='/' className="inline-flex items-center">
                                <a className="flex items-center text-sm text-gray-500 hover:text-black focus:outline-hidden focus:text-blue-600" href="#">
                                    Home
                                </a>
                                <svg className="shrink-0 mx-2 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </Link>
                            <li className="inline-flex items-center">
                                <Link to='/category' className="flex items-center text-sm text-gray-500 hover:text-black focus:outline-hidden focus:text-blue-600" href="#">
                                    Category
                                    <svg className="shrink-0 mx-2 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                </Link>
                            </li>
                            <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate" aria-current="page">
                                Polos
                            </li>
                        </ol>
                    </div>
                </nav>

                {/* Products */}
                <section className="max-w-96 md:max-w-[78rem] mx-auto px-4">
                    <div className="flex justify-between items-center mb-5">
                        <h1 className="text-4xl md:text-5xl font-bold">Polos</h1>
                        <p className="text-sm md:text-base">
                            Showing {startIndex + 1} – {Math.min(startIndex + productsPerPage, filteredProducts.length)} of {filteredProducts.length} products
                        </p>
                    </div>

                    <ProductList products={currentProducts} />
                    <hr className="w-full mx-auto my-5" />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </section>

            </main>
            <Footer />
        </>
    );
}

export default Polos;