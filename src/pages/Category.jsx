import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BreadCrumb from '../components/common/BreadCrumb';
import { Link } from 'react-router-dom';
import ProductList from '../components/product/ProductList';
import products from '../data/products';
import Pagination from '../components/common/Pagination';

function Category(props) {
    const [currentPage, setCurrentPage] = useState(1)
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false) // State điều khiển hiển thị filter mobile
    const [isMedium, setIsMedium] = useState(window.innerWidth >= 768) // Kiểm tra màn hình >= medium
    const [selectedCategory, setSelectedCategory] = useState('') // Lưu category được chọn
    const [isClearBtnActive, setIsClearBtnActive] = useState(false) // Lưu trạng thái của Clear Button

    const productsPerPage = 9

    // Loại bỏ 5 phần tử cuối
    const trimmedProducts = products.slice(0, -5) // lấy từ phần tử đầu đến phần tử cách cuối 5 phần tử

    // Lọc sản phẩm theo category được chọn
    const filteredProducts = selectedCategory // Nếu có selectedCategory, sẽ lọc các sản phẩm thuộc danh mục đó (filter())
        ? trimmedProducts.filter((product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase())
        : trimmedProducts //giữ nguyên danh sách trimmedProducts

    // Tính tổng số trang dựa trên số lượng sản phẩm đã lọc (filteredProducts.length)
    // VD: filteredProducts.length = 20 và productsPerPage = 9 => (20 / 9) = 3
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

    // Tính danh sách sản phẩm của trang hiện tại
    const startIndex = (currentPage - 1) * productsPerPage // currentPage - 1 => bắt đầu từ số 0 (mảng)
    // Lấy danh sách sản phẩm từ startIndex đến startIndex + productsPerPage
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)

    // Chuyển trang
    const handlePageClick = (pageNum) => {
        setCurrentPage(pageNum)
        window.scrollTo({ top: 0, behavior: 'smooth' }) // scroll lên đầu mỗi lần đổi trang
    }

    // Theo dõi thay đổi kích thước màn hình để cập nhật isMedium
    useEffect(() => {
        const handleResize = () => setIsMedium(window.innerWidth >= 768)

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    // Khi người dùng click category, set lại category và reset về trang 1
    const handleCategoryClick = (category) => {
        // Chuẩn hóa tên category để tránh lỗi do không khớp chính xác
        const normalizedCategory = category === 'T-Shirts' ? 'T-shirt' :
            category === 'Shirts' ? 'Shirt' :
                category
        setSelectedCategory(normalizedCategory)
        setCurrentPage(1)
        setMobileFilterOpen(false) // Đóng filter trên mobile nếu đang mở
        setIsClearBtnActive(true)   // set Active cho Clear Btn
    }

    // Xử lý clear filter
    const handleClearFilter = () => {
        setSelectedCategory('') // Reset selected category
        setCurrentPage(1) // Reset về trang 1
        setMobileFilterOpen(false) // Đóng filter trên mobile nếu đang mở
        setIsClearBtnActive(false) // Disable Clear Btn
    }


    return (
        <>
            <Header />
            <main className=''>
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
                                Category
                            </li>
                        </ol>
                    </div>
                </nav>
                {/*  */}
                <section className="">
                    <div className="w-96 md:w-[78rem] mt-0 mb-12 md:mb-20 mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-5">
                            {/* Filters  (25% - gap) */}
                            <aside className={` transform md:transform-none transition-transform duration-300 ease-in-out
                                    md:block w-full md:w-[calc(25%-1rem)] md:sticky md:top-36 
                                    border-2 bg-white rounded-2xl py-5 px-6 
                                    ${mobileFilterOpen
                                    ? 'fixed bottom-0 left-0 w-full h-[50vh] md:h-auto z-50 translate-y-0'
                                    : 'fixed bottom-0 left-0 w-full h-[50vh] md:h-auto z-50 translate-y-full md:translate-y-0 md:z-10'
                                }
                                    `}>
                                <form >
                                    <div className="flex justify-between ">
                                        <h3 className='text-xl font-semibold'>Filters</h3>
                                        {/* Filter Icon */}
                                        <div className="hidden md:block">
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.125 12.125V20.75C13.125 21.0484 13.0065 21.3345 12.7955 21.5455C12.5845 21.7565 12.2984 21.875 12 21.875C11.7016 21.875 11.4155 21.7565 11.2045 21.5455C10.9935 21.3345 10.875 21.0484 10.875 20.75V12.125C10.875 11.8266 10.9935 11.5405 11.2045 11.3295C11.4155 11.1185 11.7016 11 12 11C12.2984 11 12.5845 11.1185 12.7955 11.3295C13.0065 11.5405 13.125 11.8266 13.125 12.125ZM18.75 18.5C18.4516 18.5 18.1655 18.6185 17.9545 18.8295C17.7435 19.0405 17.625 19.3266 17.625 19.625V20.75C17.625 21.0484 17.7435 21.3345 17.9545 21.5455C18.1655 21.7565 18.4516 21.875 18.75 21.875C19.0484 21.875 19.3345 21.7565 19.5455 21.5455C19.7565 21.3345 19.875 21.0484 19.875 20.75V19.625C19.875 19.3266 19.7565 19.0405 19.5455 18.8295C19.3345 18.6185 19.0484 18.5 18.75 18.5ZM21 14.75H19.875V4.25C19.875 3.95163 19.7565 3.66548 19.5455 3.4545C19.3345 3.24353 19.0484 3.125 18.75 3.125C18.4516 3.125 18.1655 3.24353 17.9545 3.4545C17.7435 3.66548 17.625 3.95163 17.625 4.25V14.75H16.5C16.2016 14.75 15.9155 14.8685 15.7045 15.0795C15.4935 15.2905 15.375 15.5766 15.375 15.875C15.375 16.1734 15.4935 16.4595 15.7045 16.6705C15.9155 16.8815 16.2016 17 16.5 17H21C21.2984 17 21.5845 16.8815 21.7955 16.6705C22.0065 16.4595 22.125 16.1734 22.125 15.875C22.125 15.5766 22.0065 15.2905 21.7955 15.0795C21.5845 14.8685 21.2984 14.75 21 14.75ZM5.25 15.5C4.95163 15.5 4.66548 15.6185 4.4545 15.8295C4.24353 16.0405 4.125 16.3266 4.125 16.625V20.75C4.125 21.0484 4.24353 21.3345 4.4545 21.5455C4.66548 21.7565 4.95163 21.875 5.25 21.875C5.54837 21.875 5.83452 21.7565 6.0455 21.5455C6.25647 21.3345 6.375 21.0484 6.375 20.75V16.625C6.375 16.3266 6.25647 16.0405 6.0455 15.8295C5.83452 15.6185 5.54837 15.5 5.25 15.5ZM7.5 11.75H6.375V4.25C6.375 3.95163 6.25647 3.66548 6.0455 3.4545C5.83452 3.24353 5.54837 3.125 5.25 3.125C4.95163 3.125 4.66548 3.24353 4.4545 3.4545C4.24353 3.66548 4.125 3.95163 4.125 4.25V11.75H3C2.70163 11.75 2.41548 11.8685 2.2045 12.0795C1.99353 12.2905 1.875 12.5766 1.875 12.875C1.875 13.1734 1.99353 13.4595 2.2045 13.6705C2.41548 13.8815 2.70163 14 3 14H7.5C7.79837 14 8.08452 13.8815 8.2955 13.6705C8.50647 13.4595 8.625 13.1734 8.625 12.875C8.625 12.5766 8.50647 12.2905 8.2955 12.0795C8.08452 11.8685 7.79837 11.75 7.5 11.75ZM14.25 7.25H13.125V4.25C13.125 3.95163 13.0065 3.66548 12.7955 3.4545C12.5845 3.24353 12.2984 3.125 12 3.125C11.7016 3.125 11.4155 3.24353 11.2045 3.4545C10.9935 3.66548 10.875 3.95163 10.875 4.25V7.25H9.75C9.45163 7.25 9.16548 7.36853 8.9545 7.5795C8.74353 7.79048 8.625 8.07663 8.625 8.375C8.625 8.67337 8.74353 8.95952 8.9545 9.1705C9.16548 9.38147 9.45163 9.5 9.75 9.5H14.25C14.5484 9.5 14.8345 9.38147 15.0455 9.1705C15.2565 8.95952 15.375 8.67337 15.375 8.375C15.375 8.07663 15.2565 7.79048 15.0455 7.5795C14.8345 7.36853 14.5484 7.25 14.25 7.25Z" fill="black" fillOpacity="0.4" />
                                            </svg>
                                        </div>
                                        {/* Close button trên filter mobile */}
                                        <button
                                            type="button"
                                            className="md:hidden text-xl"
                                            onClick={() => setMobileFilterOpen(false)}
                                        >
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.5459 18.4541C19.7572 18.6654 19.876 18.952 19.876 19.2509C19.876 19.5498 19.7572 19.8365 19.5459 20.0478C19.3346 20.2592 19.0479 20.3779 18.749 20.3779C18.4501 20.3779 18.1635 20.2592 17.9521 20.0478L12 14.0937L6.0459 20.0459C5.83455 20.2573 5.54791 20.376 5.24902 20.376C4.95014 20.376 4.66349 20.2573 4.45215 20.0459C4.2408 19.8346 4.12207 19.5479 4.12207 19.2491C4.12207 18.9502 4.2408 18.6635 4.45215 18.4522L10.4062 12.5L4.45402 6.54593C4.24268 6.33459 4.12395 6.04795 4.12395 5.74906C4.12395 5.45017 4.24268 5.16353 4.45402 4.95218C4.66537 4.74084 4.95201 4.62211 5.2509 4.62211C5.54978 4.62211 5.83643 4.74084 6.04777 4.95218L12 10.9062L17.954 4.95125C18.1654 4.7399 18.452 4.62117 18.7509 4.62117C19.0498 4.62117 19.3364 4.7399 19.5478 4.95125C19.7591 5.16259 19.8778 5.44924 19.8778 5.74812C19.8778 6.04701 19.7591 6.33365 19.5478 6.545L13.5937 12.5L19.5459 18.4541Z" fill="black" fillOpacity="0.4" />
                                            </svg>
                                        </button>
                                    </div>
                                    <hr className='w-full mx-auto my-5' />

                                    {/* Filter Category Links */}
                                    <div className="flex flex-col gap-3">
                                        <div className=''>
                                            <Link to='#' className={`flex items-center justify-between py-3 ${selectedCategory === 'T-shirt' ? 'text-black font-semibold' : 'text-gray-500'}`}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    handleCategoryClick('T-shirt')
                                                }}
                                            >
                                                T-Shirts
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.53073 2.4694L11.5307 7.4694C11.6007 7.53908 11.6561 7.62187 11.694 7.71304C11.7318 7.8042 11.7513 7.90194 11.7513 8.00065C11.7513 8.09936 11.7318 8.1971 11.694 8.28827C11.6561 8.37943 11.6007 8.46222 11.5307 8.5319L6.53073 13.5319C6.38984 13.6728 6.19874 13.752 5.99948 13.752C5.80023 13.752 5.60913 13.6728 5.46823 13.5319C5.32734 13.391 5.24818 13.1999 5.24818 13.0007C5.24818 12.8014 5.32734 12.6103 5.46823 12.4694L9.93761 8.00003L5.46761 3.53065C5.32671 3.38976 5.24756 3.19866 5.24756 2.9994C5.24756 2.80015 5.32671 2.60905 5.46761 2.46815C5.60851 2.32726 5.7996 2.2481 5.99886 2.2481C6.19812 2.2481 6.38921 2.32726 6.53011 2.46815L6.53073 2.4694Z" fill="black" fillOpacity="0.6" />
                                                </svg>
                                            </Link>
                                            <Link to='#' className={`flex items-center justify-between py-3 ${selectedCategory === 'Shirt' ? 'text-black font-semibold' : 'text-gray-500'}`}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    handleCategoryClick('Shirt')
                                                }}
                                            >
                                                Shirts
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.53073 2.4694L11.5307 7.4694C11.6007 7.53908 11.6561 7.62187 11.694 7.71304C11.7318 7.8042 11.7513 7.90194 11.7513 8.00065C11.7513 8.09936 11.7318 8.1971 11.694 8.28827C11.6561 8.37943 11.6007 8.46222 11.5307 8.5319L6.53073 13.5319C6.38984 13.6728 6.19874 13.752 5.99948 13.752C5.80023 13.752 5.60913 13.6728 5.46823 13.5319C5.32734 13.391 5.24818 13.1999 5.24818 13.0007C5.24818 12.8014 5.32734 12.6103 5.46823 12.4694L9.93761 8.00003L5.46761 3.53065C5.32671 3.38976 5.24756 3.19866 5.24756 2.9994C5.24756 2.80015 5.32671 2.60905 5.46761 2.46815C5.60851 2.32726 5.7996 2.2481 5.99886 2.2481C6.19812 2.2481 6.38921 2.32726 6.53011 2.46815L6.53073 2.4694Z" fill="black" fillOpacity="0.6" />
                                                </svg>
                                            </Link>
                                            <Link to='#' className={`flex items-center justify-between py-3 ${selectedCategory === 'Jeans' ? 'text-black font-semibold' : 'text-gray-500'}`}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    handleCategoryClick('Jeans')
                                                }}
                                            >
                                                Jeans
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.53073 2.4694L11.5307 7.4694C11.6007 7.53908 11.6561 7.62187 11.694 7.71304C11.7318 7.8042 11.7513 7.90194 11.7513 8.00065C11.7513 8.09936 11.7318 8.1971 11.694 8.28827C11.6561 8.37943 11.6007 8.46222 11.5307 8.5319L6.53073 13.5319C6.38984 13.6728 6.19874 13.752 5.99948 13.752C5.80023 13.752 5.60913 13.6728 5.46823 13.5319C5.32734 13.391 5.24818 13.1999 5.24818 13.0007C5.24818 12.8014 5.32734 12.6103 5.46823 12.4694L9.93761 8.00003L5.46761 3.53065C5.32671 3.38976 5.24756 3.19866 5.24756 2.9994C5.24756 2.80015 5.32671 2.60905 5.46761 2.46815C5.60851 2.32726 5.7996 2.2481 5.99886 2.2481C6.19812 2.2481 6.38921 2.32726 6.53011 2.46815L6.53073 2.4694Z" fill="black" fillOpacity="0.6" />
                                                </svg>
                                            </Link>
                                            <Link to='#' className={`flex items-center justify-between py-3 ${selectedCategory === 'Polo' ? 'text-black font-semibold' : 'text-gray-500'}`}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    handleCategoryClick('Polo')
                                                }}
                                            >
                                                Polos
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.53073 2.4694L11.5307 7.4694C11.6007 7.53908 11.6561 7.62187 11.694 7.71304C11.7318 7.8042 11.7513 7.90194 11.7513 8.00065C11.7513 8.09936 11.7318 8.1971 11.694 8.28827C11.6561 8.37943 11.6007 8.46222 11.5307 8.5319L6.53073 13.5319C6.38984 13.6728 6.19874 13.752 5.99948 13.752C5.80023 13.752 5.60913 13.6728 5.46823 13.5319C5.32734 13.391 5.24818 13.1999 5.24818 13.0007C5.24818 12.8014 5.32734 12.6103 5.46823 12.4694L9.93761 8.00003L5.46761 3.53065C5.32671 3.38976 5.24756 3.19866 5.24756 2.9994C5.24756 2.80015 5.32671 2.60905 5.46761 2.46815C5.60851 2.32726 5.7996 2.2481 5.99886 2.2481C6.19812 2.2481 6.38921 2.32726 6.53011 2.46815L6.53073 2.4694Z" fill="black" fillOpacity="0.6" />
                                                </svg>
                                            </Link>

                                            {/* Clear Btn */}
                                            <button
                                                className={`w-full p-3 mt-5 transition-all duration-300 bg-black text-white rounded-full
                                                    ${isClearBtnActive ? 'hover:bg-opacity-70 ' : 'opacity-50 '}`}
                                                onClick={handleClearFilter}
                                                disabled={!isClearBtnActive} // Vô hiệu hóa button khi `isClearBtnActive = false`
                                            >
                                                Clear Filter
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </aside>

                            {/* Overlay khi filter mobile mở */}
                            {mobileFilterOpen && (
                                <div
                                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                                    onClick={() => setMobileFilterOpen(false)}
                                />
                            )}

                            {/* Main Content (75% - gap) */}
                            <div className="md:w-[calc(75%-1rem)]">
                                {/* Heading */}
                                <div className="flex justify-between items-baseline md:items-center mb-2 md:mb-5">
                                    <h1 className='text-4xl font-semibold'>Shop</h1>
                                    <div className='flex justify-center items-center'>
                                        {selectedCategory ? (
                                            `Showing ${startIndex + 1}-${Math.min(startIndex + productsPerPage, filteredProducts.length)} of ${filteredProducts.length} ${selectedCategory} products`
                                        ) : (
                                            `Showing ${startIndex + 1}-${Math.min(startIndex + productsPerPage, products.length)} of ${products.length} products`
                                        )}
                                        {/* Mobile Filter Button */}
                                        <div className="md:hidden p-2 ml-3 rounded-full bg-[#F0F0F0] hover:cursor-pointer"
                                            onClick={() => setMobileFilterOpen(true)} //Hiện Filter khi click
                                        >
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.75 7.75V13.5C8.75 13.6989 8.67098 13.8897 8.53033 14.0303C8.38968 14.171 8.19891 14.25 8 14.25C7.80109 14.25 7.61032 14.171 7.46967 14.0303C7.32902 13.8897 7.25 13.6989 7.25 13.5V7.75C7.25 7.55109 7.32902 7.36032 7.46967 7.21967C7.61032 7.07902 7.80109 7 8 7C8.19891 7 8.38968 7.07902 8.53033 7.21967C8.67098 7.36032 8.75 7.55109 8.75 7.75ZM12.5 12C12.3011 12 12.1103 12.079 11.9697 12.2197C11.829 12.3603 11.75 12.5511 11.75 12.75V13.5C11.75 13.6989 11.829 13.8897 11.9697 14.0303C12.1103 14.171 12.3011 14.25 12.5 14.25C12.6989 14.25 12.8897 14.171 13.0303 14.0303C13.171 13.8897 13.25 13.6989 13.25 13.5V12.75C13.25 12.5511 13.171 12.3603 13.0303 12.2197C12.8897 12.079 12.6989 12 12.5 12ZM14 9.5H13.25V2.5C13.25 2.30109 13.171 2.11032 13.0303 1.96967C12.8897 1.82902 12.6989 1.75 12.5 1.75C12.3011 1.75 12.1103 1.82902 11.9697 1.96967C11.829 2.11032 11.75 2.30109 11.75 2.5V9.5H11C10.8011 9.5 10.6103 9.57902 10.4697 9.71967C10.329 9.86032 10.25 10.0511 10.25 10.25C10.25 10.4489 10.329 10.6397 10.4697 10.7803C10.6103 10.921 10.8011 11 11 11H14C14.1989 11 14.3897 10.921 14.5303 10.7803C14.671 10.6397 14.75 10.4489 14.75 10.25C14.75 10.0511 14.671 9.86032 14.5303 9.71967C14.3897 9.57902 14.1989 9.5 14 9.5ZM3.5 10C3.30109 10 3.11032 10.079 2.96967 10.2197C2.82902 10.3603 2.75 10.5511 2.75 10.75V13.5C2.75 13.6989 2.82902 13.8897 2.96967 14.0303C3.11032 14.171 3.30109 14.25 3.5 14.25C3.69891 14.25 3.88968 14.171 4.03033 14.0303C4.17098 13.8897 4.25 13.6989 4.25 13.5V10.75C4.25 10.5511 4.17098 10.3603 4.03033 10.2197C3.88968 10.079 3.69891 10 3.5 10ZM5 7.5H4.25V2.5C4.25 2.30109 4.17098 2.11032 4.03033 1.96967C3.88968 1.82902 3.69891 1.75 3.5 1.75C3.30109 1.75 3.11032 1.82902 2.96967 1.96967C2.82902 2.11032 2.75 2.30109 2.75 2.5V7.5H2C1.80109 7.5 1.61032 7.57902 1.46967 7.71967C1.32902 7.86032 1.25 8.05109 1.25 8.25C1.25 8.44891 1.32902 8.63968 1.46967 8.78033C1.61032 8.92098 1.80109 9 2 9H5C5.19891 9 5.38968 8.92098 5.53033 8.78033C5.67098 8.63968 5.75 8.44891 5.75 8.25C5.75 8.05109 5.67098 7.86032 5.53033 7.71967C5.38968 7.57902 5.19891 7.5 5 7.5ZM9.5 4.5H8.75V2.5C8.75 2.30109 8.67098 2.11032 8.53033 1.96967C8.38968 1.82902 8.19891 1.75 8 1.75C7.80109 1.75 7.61032 1.82902 7.46967 1.96967C7.32902 2.11032 7.25 2.30109 7.25 2.5V4.5H6.5C6.30109 4.5 6.11032 4.57902 5.96967 4.71967C5.82902 4.86032 5.75 5.05109 5.75 5.25C5.75 5.44891 5.82902 5.63968 5.96967 5.78033C6.11032 5.92098 6.30109 6 6.5 6H9.5C9.69891 6 9.88968 5.92098 10.0303 5.78033C10.171 5.63968 10.25 5.44891 10.25 5.25C10.25 5.05109 10.171 4.86032 10.0303 4.71967C9.88968 4.57902 9.69891 4.5 9.5 4.5Z" fill="black" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {/* 9 Products per Page */}
                                <div className="w-full">
                                    {/* <ProductList className='md:grid-cols-3' /> */}
                                    <ProductList className="md:grid-cols-3" products={currentProducts} />
                                </div>
                                <hr className='w-full mx-auto my-5' />

                                {/* Pagination */}
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageClick}
                                />

                                {/* End Pagination */}
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}

export default Category;