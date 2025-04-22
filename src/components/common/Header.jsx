import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ props }) {
    // Xử lý click vào icon trang chủ sẽ cuộn lên đầu trang
    const location = useLocation()
    const [closeNoti, setCloseNoti] = useState(true)

    const handleCloseNoti = () => setCloseNoti(false)

    const handleClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <header className='fixed w-full bg-white shadow z-20'>
            {/* Notification */}
            {closeNoti && (
                <div className='py-2 text-center text-white bg-black'>
                    <div className="relative mx-auto max-w-96 md:max-w-[78rem] font-thin text-sm md:text-base">
                        Sign up and get 20% off to your first order.
                        <Link to='/login' className='ml-2 underline underline-offset-4'>Sign Up Now</Link>
                        {/* Close button */}
                        <button onClick={handleCloseNoti} className='absolute right-0 hidden md:inline-block hover:opacity-50'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.2882 14.9617C16.4644 15.1378 16.5633 15.3767 16.5633 15.6258C16.5633 15.8749 16.4644 16.1137 16.2882 16.2898C16.1121 16.466 15.8733 16.5649 15.6242 16.5649C15.3751 16.5649 15.1362 16.466 14.9601 16.2898L9.99997 11.3281L5.03825 16.2883C4.86213 16.4644 4.62326 16.5633 4.37418 16.5633C4.12511 16.5633 3.88624 16.4644 3.71012 16.2883C3.534 16.1122 3.43506 15.8733 3.43506 15.6242C3.43506 15.3751 3.534 15.1363 3.71012 14.9602L8.67184 10L3.71168 5.03828C3.53556 4.86216 3.43662 4.62329 3.43662 4.37422C3.43662 4.12515 3.53556 3.88628 3.71168 3.71016C3.8878 3.53404 4.12668 3.43509 4.37575 3.43509C4.62482 3.43509 4.86369 3.53404 5.03981 3.71016L9.99997 8.67188L14.9617 3.70938C15.1378 3.53326 15.3767 3.43431 15.6257 3.43431C15.8748 3.43431 16.1137 3.53326 16.2898 3.70938C16.4659 3.8855 16.5649 4.12437 16.5649 4.37344C16.5649 4.62251 16.4659 4.86138 16.2898 5.0375L11.3281 10L16.2882 14.9617Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
            {/* Header */}
            <nav className='py-1 md:py-5 relative'>
                <div className='flex flex-row justify-between items-center md:gap-10 max-w-96 md:max-w-[78rem] my-0 mx-auto xl:mx-auto md:ml-16 md:mr-16'>
                    {/* Mobile Menu Icon */}
                    <label className='md:hidden' htmlFor='nav-mobile-icon' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="24" width="24">
                            <path fill="#000" d="M21.375 12a1.125 1.125 0 0 1-1.125 1.125H3.75a1.125 1.125 0 1 1 0-2.25h16.5A1.125 1.125 0 0 1 21.375 12M3.75 7.125h16.5a1.125 1.125 0 0 0 0-2.25H3.75a1.125 1.125 0 0 0 0 2.25m16.5 9.75H3.75a1.125 1.125 0 1 0 0 2.25h16.5a1.125 1.125 0 1 0 0-2.25"></path>
                        </svg>
                    </label>

                    <input className='peer' type="checkbox" id="nav-mobile-icon" hidden />
                    {/* Mobile Overlay - khi click vào checkbox, peer-checked:block sẽ được kích hoạt */}
                    <label className="peer-checked:block hidden z-30 fixed md:static top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.3)]"
                        htmlFor='nav-mobile-icon'
                    ></label>

                    {/* Mobile NavBar */}
                    <div className='peer-checked:translate-y-0 peer-checked:block -translate-y-full z-40 rounded-3xl 
                        fixed hidden md:static mx-5 md:mx-0 left-0 top-20 right-0 h-auto bg-white'>
                        <ul className='md:flex left-0 flex-row items-center w-full gap-6 py-6 transition-all duration-200 ease-in-out
                            bg-white -bottom-full md:w-auto rounded-3xl md:static md:flex-row md:justify-start md:py-0'>
                            <li className=' py-2 md:py-0 px-3 md:px-0'>
                                <Link to='/category'>Shop</Link>
                            </li>
                            <li className='py-2 md:py-0 px-3 md:px-0'>
                                <a href="#new-arrivals">On Sale</a>
                            </li>
                            <li className='relative group py-2 md:py-0 px-3 md:px-0'>
                                <input className='hidden' type="checkbox" id='submenu-toggle' />
                                <label className='flex justify-start items-center ' role='button' htmlFor="submenu-toggle">
                                    Category
                                    <svg className='ml-1' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5306 6.53063L8.53063 11.5306C8.46095 11.6005 8.37816 11.656 8.28699 11.6939C8.19583 11.7317 8.09809 11.7512 7.99938 11.7512C7.90067 11.7512 7.80293 11.7317 7.71176 11.6939C7.6206 11.656 7.53781 11.6005 7.46813 11.5306L2.46813 6.53063C2.32723 6.38973 2.24808 6.19864 2.24808 5.99938C2.24808 5.80012 2.32723 5.60902 2.46813 5.46813C2.60902 5.32723 2.80012 5.24808 2.99938 5.24808C3.19864 5.24808 3.38973 5.32723 3.53063 5.46813L8 9.9375L12.4694 5.4675C12.6103 5.32661 12.8014 5.24745 13.0006 5.24745C13.1999 5.24745 13.391 5.32661 13.5319 5.4675C13.6728 5.6084 13.7519 5.7995 13.7519 5.99875C13.7519 6.19801 13.6728 6.38911 13.5319 6.53L13.5306 6.53063Z" fill="black" />
                                    </svg>

                                </label>
                                {/* Sub Nav */}
                                <ul className='group-hover:block hidden absolute top-10 left-2 bg-white w-28
                                            rounded-3xl shadow-2xl overflow-hidden'>
                                    <li className='hover:bg-slate-100'>
                                        <Link to='/category/t-shirts' className='block p-2'>T-Shirts</Link>
                                    </li>
                                    <li className='hover:bg-slate-100'>
                                        <Link to='/category/shirts' className='block p-2'>Shirts</Link>
                                    </li>
                                    <li className='hover:bg-slate-100'>
                                        <Link to='/category/jeans' className='block p-2'>Jeans</Link>
                                    </li>
                                    <li className='hover:bg-slate-100'>
                                        <Link to='/category/polos' className='block p-2'>Polos</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/* Close btn */}
                        <label className='absolute top-4 right-6'
                            htmlFor='nav-mobile-icon'
                        >
                            <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.2882 11.9617C13.4644 12.1378 13.5633 12.3767 13.5633 12.6258C13.5633 12.8749 13.4644 13.1137 13.2882 13.2898C13.1121 13.466 12.8733 13.5649 12.6242 13.5649C12.3751 13.5649 12.1362 13.466 11.9601 13.2898L6.99997 8.32813L2.03825 13.2883C1.86213 13.4644 1.62326 13.5633 1.37418 13.5633C1.12511 13.5633 0.886243 13.4644 0.710122 13.2883C0.534002 13.1122 0.435059 12.8733 0.435059 12.6242C0.435059 12.3751 0.534002 12.1363 0.710122 11.9602L5.67184 7L0.711685 2.03828C0.535564 1.86216 0.436621 1.62329 0.436621 1.37422C0.436621 1.12515 0.535564 0.886277 0.711685 0.710157C0.887805 0.534036 1.12668 0.435093 1.37575 0.435093C1.62482 0.435093 1.86369 0.534036 2.03981 0.710157L6.99997 5.67188L11.9617 0.709375C12.1378 0.533255 12.3767 0.434312 12.6257 0.434312C12.8748 0.434312 13.1137 0.533255 13.2898 0.709375C13.4659 0.885496 13.5649 1.12437 13.5649 1.37344C13.5649 1.62251 13.4659 1.86138 13.2898 2.0375L8.32809 7L13.2882 11.9617Z" fill="black" />
                            </svg>
                        </label>

                    </div>
                    {/* Shop Name */}
                    <Link to='/' onClick={handleClick}>
                        <h1 className='text-3xl font-extrabold '>SHOP.CO</h1>
                    </Link>

                    {/* PC NavBar */}
                    <ul className='hidden md:flex left-0  flex-row items-center w-full gap-6 py-6 transition-all duration-200 ease-in-out
                        bg-white -bottom-full md:w-auto rounded-t-3xl md:static md:flex-row md:justify-start md:py-0'>
                        <li className='relative group py-2'>
                            <input className='hidden' type="checkbox" id='submenu-toggle' />
                            <label className='flex justify-center items-center ' role='button' htmlFor="submenu-toggle">Category
                                <svg className='ml-1' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5306 6.53063L8.53063 11.5306C8.46095 11.6005 8.37816 11.656 8.28699 11.6939C8.19583 11.7317 8.09809 11.7512 7.99938 11.7512C7.90067 11.7512 7.80293 11.7317 7.71176 11.6939C7.6206 11.656 7.53781 11.6005 7.46813 11.5306L2.46813 6.53063C2.32723 6.38973 2.24808 6.19864 2.24808 5.99938C2.24808 5.80012 2.32723 5.60902 2.46813 5.46813C2.60902 5.32723 2.80012 5.24808 2.99938 5.24808C3.19864 5.24808 3.38973 5.32723 3.53063 5.46813L8 9.9375L12.4694 5.4675C12.6103 5.32661 12.8014 5.24745 13.0006 5.24745C13.1999 5.24745 13.391 5.32661 13.5319 5.4675C13.6728 5.6084 13.7519 5.7995 13.7519 5.99875C13.7519 6.19801 13.6728 6.38911 13.5319 6.53L13.5306 6.53063Z" fill="black" />
                                </svg>

                            </label>
                            {/* Sub Nav */}
                            <ul className='group-hover:block hidden absolute top-6 -left-2 bg-white w-28
                                        rounded-xl shadow-2xl overflow-hidden mt-2'>
                                <li className='hover:bg-slate-100'>
                                    <Link to='/category/t-shirts' className='block p-2'>T-Shirts</Link>
                                </li>
                                <li className='hover:bg-slate-100'>
                                    <Link to='/category/shirts' className='block p-2'>Shirts</Link>
                                </li>
                                <li className='hover:bg-slate-100'>
                                    <Link to='/category/jeans' className='block p-2'>Jeans</Link>
                                </li>
                                <li className='hover:bg-slate-100'>
                                    <Link to='/category/polos' className='block p-2'>Polos</Link>
                                </li>
                            </ul>
                        </li>
                        <Link to='/category'>Shop</Link>
                        <li><a href="#new-arrivals">On Sale</a></li>
                    </ul>

                    <div className="flex justify-between items-center gap-3 md:flex-grow">
                        {/* PC Search Bar */}
                        <label htmlFor='search-btn' className='md:flex-grow'>
                            <div className='relative '>
                                <svg className='opacity-100 top-0 right-0 absolute transition-opacity duration-500
                                        ease-in-out fill-black md:absolute md:opacity-40 md:top-3.5 md:left-4 '
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='' d="M21.7959 20.2041L17.3437 15.75C18.6787 14.0104 19.3019 11.8282 19.087 9.64607C18.8722 7.4639 17.8353 5.44516 16.1867 3.99937C14.5382 2.55357 12.4014 1.78899 10.2098 1.86071C8.01829 1.93244 5.93607 2.8351 4.38558 4.38559C2.83509 5.93608 1.93243 8.0183 1.8607 10.2098C1.78898 12.4014 2.55356 14.5382 3.99936 16.1867C5.44515 17.8353 7.46389 18.8722 9.64606 19.087C11.8282 19.3019 14.0104 18.6787 15.75 17.3438L20.2059 21.8006C20.3106 21.9053 20.4348 21.9883 20.5715 22.0449C20.7083 22.1016 20.8548 22.1307 21.0028 22.1307C21.1508 22.1307 21.2973 22.1016 21.4341 22.0449C21.5708 21.9883 21.695 21.9053 21.7997 21.8006C21.9043 21.696 21.9873 21.5717 22.044 21.435C22.1006 21.2983 22.1298 21.1517 22.1298 21.0037C22.1298 20.8558 22.1006 20.7092 22.044 20.5725C21.9873 20.4358 21.9043 20.3115 21.7997 20.2069L21.7959 20.2041ZM4.12499 10.5C4.12499 9.23915 4.49888 8.0066 5.19938 6.95824C5.89987 5.90988 6.89551 5.09278 8.06039 4.61027C9.22527 4.12776 10.5071 4.00151 11.7437 4.2475C12.9803 4.49348 14.1162 5.10064 15.0078 5.9922C15.8994 6.88376 16.5065 8.01967 16.7525 9.2563C16.9985 10.4929 16.8722 11.7747 16.3897 12.9396C15.9072 14.1045 15.0901 15.1001 14.0418 15.8006C12.9934 16.5011 11.7609 16.875 10.5 16.875C8.80977 16.8733 7.18927 16.2011 5.99411 15.0059C4.79894 13.8107 4.12673 12.1902 4.12499 10.5Z" fill="black" fillOpacity="0.4" />
                                </svg>
                            </div>
                            <input className='bg-[rgba(240,240,240,1)] md:block max-w-0 transition-all duration-500 ease-in-out md:w-full rounded-full md:max-w-xl md:pl-14 md:py-3.5'
                                type="text" placeholder='Search for products...' />
                        </label>


                        {/* Cart */}
                        <a className='flex items-center justify-center' href="">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.375 20.25C9.375 20.6208 9.26503 20.9834 9.059 21.2917C8.85298 21.6 8.56014 21.8404 8.21753 21.9823C7.87492 22.1242 7.49792 22.1613 7.1342 22.089C6.77049 22.0166 6.4364 21.838 6.17417 21.5758C5.91195 21.3136 5.73337 20.9795 5.66103 20.6158C5.58868 20.2521 5.62581 19.8751 5.76773 19.5325C5.90964 19.1899 6.14996 18.897 6.45831 18.691C6.76665 18.485 7.12916 18.375 7.5 18.375C7.99728 18.375 8.47419 18.5725 8.82582 18.9242C9.17745 19.2758 9.375 19.7527 9.375 20.25ZM17.25 18.375C16.8792 18.375 16.5166 18.485 16.2083 18.691C15.9 18.897 15.6596 19.1899 15.5177 19.5325C15.3758 19.8751 15.3387 20.2521 15.411 20.6158C15.4834 20.9795 15.662 21.3136 15.9242 21.5758C16.1864 21.838 16.5205 22.0166 16.8842 22.089C17.2479 22.1613 17.6249 22.1242 17.9675 21.9823C18.3101 21.8404 18.603 21.6 18.809 21.2917C19.015 20.9834 19.125 20.6208 19.125 20.25C19.125 19.7527 18.9275 19.2758 18.5758 18.9242C18.2242 18.5725 17.7473 18.375 17.25 18.375ZM22.0753 7.08094L19.5169 15.3966C19.3535 15.9343 19.0211 16.4051 18.569 16.739C18.1169 17.0729 17.5692 17.2521 17.0072 17.25H7.77469C7.2046 17.2482 6.65046 17.0616 6.1953 16.7183C5.74015 16.3751 5.40848 15.8936 5.25 15.3459L2.04469 4.125H1.125C0.826631 4.125 0.540483 4.00647 0.329505 3.7955C0.118526 3.58452 0 3.29837 0 3C0 2.70163 0.118526 2.41548 0.329505 2.2045C0.540483 1.99353 0.826631 1.875 1.125 1.875H2.32687C2.73407 1.87626 3.12988 2.00951 3.45493 2.25478C3.77998 2.50004 4.01674 2.84409 4.12969 3.23531L4.81312 5.625H21C21.1761 5.62499 21.3497 5.6663 21.5069 5.74561C21.664 5.82492 21.8004 5.94001 21.905 6.08164C22.0096 6.22326 22.0795 6.38746 22.1091 6.56102C22.1387 6.73458 22.1271 6.91266 22.0753 7.08094ZM19.4766 7.875H5.45531L7.41375 14.7281C7.43617 14.8065 7.48354 14.8755 7.54867 14.9245C7.6138 14.9736 7.69315 15.0001 7.77469 15H17.0072C17.0875 15.0002 17.1656 14.9746 17.2303 14.927C17.2949 14.8794 17.3426 14.8123 17.3662 14.7356L19.4766 7.875Z" fill="black" />
                            </svg>
                        </a>
                        {/* Avatar */}
                        <Link to='/login'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 1.875C9.99747 1.875 8.0399 2.46882 6.37486 3.58137C4.70981 4.69392 3.41206 6.27523 2.64572 8.12533C1.87939 9.97543 1.67888 12.0112 2.06955 13.9753C2.46023 15.9393 3.42454 17.7435 4.84055 19.1595C6.25656 20.5755 8.06066 21.5398 10.0247 21.9305C11.9888 22.3211 14.0246 22.1206 15.8747 21.3543C17.7248 20.5879 19.3061 19.2902 20.4186 17.6251C21.5312 15.9601 22.125 14.0025 22.125 12C22.122 9.3156 21.0543 6.74199 19.1562 4.84383C17.258 2.94567 14.6844 1.87798 12 1.875ZM7.45969 18.4284C7.98195 17.7143 8.66528 17.1335 9.45418 16.7331C10.2431 16.3327 11.1153 16.124 12 16.124C12.8847 16.124 13.7569 16.3327 14.5458 16.7331C15.3347 17.1335 16.0181 17.7143 16.5403 18.4284C15.2134 19.3695 13.6268 19.875 12 19.875C10.3732 19.875 8.78665 19.3695 7.45969 18.4284ZM9.375 11.25C9.375 10.7308 9.52896 10.2233 9.8174 9.79163C10.1058 9.35995 10.5158 9.0235 10.9955 8.82482C11.4751 8.62614 12.0029 8.57415 12.5121 8.67544C13.0213 8.77672 13.489 9.02673 13.8562 9.39384C14.2233 9.76096 14.4733 10.2287 14.5746 10.7379C14.6759 11.2471 14.6239 11.7749 14.4252 12.2545C14.2265 12.7342 13.8901 13.1442 13.4584 13.4326C13.0267 13.721 12.5192 13.875 12 13.875C11.3038 13.875 10.6361 13.5984 10.1438 13.1062C9.65157 12.6139 9.375 11.9462 9.375 11.25ZM18.1875 16.8694C17.4583 15.9419 16.5289 15.1914 15.4688 14.6737C16.1444 13.9896 16.6026 13.1208 16.7858 12.1769C16.9689 11.2329 16.8688 10.2558 16.498 9.36861C16.1273 8.4814 15.5024 7.72364 14.702 7.19068C13.9017 6.65771 12.9616 6.37334 12 6.37334C11.0384 6.37334 10.0983 6.65771 9.29797 7.19068C8.49762 7.72364 7.87275 8.4814 7.50198 9.36861C7.13121 10.2558 7.0311 11.2329 7.21424 12.1769C7.39739 13.1208 7.85561 13.9896 8.53125 14.6737C7.4711 15.1914 6.54168 15.9419 5.8125 16.8694C4.89661 15.7083 4.32614 14.3129 4.1664 12.8427C4.00665 11.3725 4.2641 9.88711 4.90925 8.55644C5.55441 7.22578 6.5612 6.10366 7.81439 5.31855C9.06757 4.53343 10.5165 4.11703 11.9953 4.11703C13.4741 4.11703 14.9231 4.53343 16.1762 5.31855C17.4294 6.10366 18.4362 7.22578 19.0814 8.55644C19.7265 9.88711 19.984 11.3725 19.8242 12.8427C19.6645 14.3129 19.094 15.7083 18.1781 16.8694H18.1875Z" fill="black" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile SearchBar */}
            <input className='peer' type="checkbox" id="search-btn" hidden />
            <label className='peer-checked:block md:peer-checked:hidden border-y  border-black/10 hidden' htmlFor='search-btn' >
                <div className='p-3'>
                    <div className='relative w-full lg:max-w-[36rem]'>
                        <div className='relative'>
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 transform">
                                <svg className=''
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='' d="M21.7959 20.2041L17.3437 15.75C18.6787 14.0104 19.3019 11.8282 19.087 9.64607C18.8722 7.4639 17.8353 5.44516 16.1867 3.99937C14.5382 2.55357 12.4014 1.78899 10.2098 1.86071C8.01829 1.93244 5.93607 2.8351 4.38558 4.38559C2.83509 5.93608 1.93243 8.0183 1.8607 10.2098C1.78898 12.4014 2.55356 14.5382 3.99936 16.1867C5.44515 17.8353 7.46389 18.8722 9.64606 19.087C11.8282 19.3019 14.0104 18.6787 15.75 17.3438L20.2059 21.8006C20.3106 21.9053 20.4348 21.9883 20.5715 22.0449C20.7083 22.1016 20.8548 22.1307 21.0028 22.1307C21.1508 22.1307 21.2973 22.1016 21.4341 22.0449C21.5708 21.9883 21.695 21.9053 21.7997 21.8006C21.9043 21.696 21.9873 21.5717 22.044 21.435C22.1006 21.2983 22.1298 21.1517 22.1298 21.0037C22.1298 20.8558 22.1006 20.7092 22.044 20.5725C21.9873 20.4358 21.9043 20.3115 21.7997 20.2069L21.7959 20.2041ZM4.12499 10.5C4.12499 9.23915 4.49888 8.0066 5.19938 6.95824C5.89987 5.90988 6.89551 5.09278 8.06039 4.61027C9.22527 4.12776 10.5071 4.00151 11.7437 4.2475C12.9803 4.49348 14.1162 5.10064 15.0078 5.9922C15.8994 6.88376 16.5065 8.01967 16.7525 9.2563C16.9985 10.4929 16.8722 11.7747 16.3897 12.9396C15.9072 14.1045 15.0901 15.1001 14.0418 15.8006C12.9934 16.5011 11.7609 16.875 10.5 16.875C8.80977 16.8733 7.18927 16.2011 5.99411 15.0059C4.79894 13.8107 4.12673 12.1902 4.12499 10.5Z" fill="black" fillOpacity="0.4" />
                                </svg>
                            </div>
                            <input className='border-input text-zinc-900 ring-offset-background placeholder:text-muted-foreground flex min-h-10 rounded-full border px-8 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 lg:text-base pl-12 w-full bg-shade-200'
                                type="text" placeholder='Search for products...' />
                        </div>
                    </div>
                </div>
            </label>

            {/* <Routes> 
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<ValidateForm />} />
            </Routes> */}
        </header>

    );
}

export default Header;







