import React from 'react'


// - currentPage: trang hiện tại
// - totalPages: tổng số trang
// - onPageChange: hàm xử lý khi chuyển trang
function Pagination({ currentPage, totalPages, onPageChange }) {

    // Hàm tạo danh sách trang hiển thị, có xử lý dấu '...' khi nhiều trang
    const getVisiblePages = () => {
        const pages = []

        // Nếu tổng số trang <= 7, hiển thị tất cả
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i)
        }
        // Nếu nhiều hơn 7 trang, xử lý logic hiển thị dấu '...'
        else {
            const showLeftDots = currentPage > 3  // > trang 3 sẽ hiện dấu ... bên trái
            const showRightDots = currentPage < totalPages - 2  // < 3 trang cuối sẽ hiện dấu ... bên phải

            pages.push(1)  // Luôn hiển thị trang đầu tiên

            // Trường hợp 1: Chỉ cần dấu ... bên trái
            if (showLeftDots && !showRightDots) {
                pages.push('...')
                for (let i = totalPages - 4; i <= totalPages - 1; i++) pages.push(i)
            }
            // Trường hợp 2: Chỉ cần dấu ... bên phải
            else if (!showLeftDots && showRightDots) {
                for (let i = 2; i <= 4; i++) pages.push(i)
                pages.push('...')
            }
            // Trường hợp 3: Cần dấu ... cả 2 bên
            else if (showLeftDots && showRightDots) {
                pages.push('...')
                pages.push(currentPage - 1)  // Trang trước đó
                pages.push(currentPage)      // Trang hiện tại
                pages.push(currentPage + 1)  // Trang kế tiếp
                pages.push('...')
            }

            pages.push(totalPages)  // Luôn hiển thị trang cuối cùng
        }

        return pages
    }

    return (
        <nav aria-label="Pagination">
            <ul className='flex justify-between items-center'>
                {/* Previous Button */}
                <li>
                    <button
                        className='flex items-center border-2 p-3 md:py-2 md:px-4 rounded-xl hover:bg-gray-100 disabled:opacity-50'
                        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}  // Disable nếu ở trang đầu
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663" stroke="black" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className='ml-2 hidden md:block'>Previous</span>  {/* Chỉ hiện trên desktop */}
                    </button>
                </li>

                {/* Page numbers */}
                <div className="flex items-center gap-2">
                    {getVisiblePages().map((page, idx) => (
                        <li key={idx}>
                            {page === '...' ? ( // Hiển thị dấu '...' cho các trang bị ẩn
                                <span className="px-2">...</span>
                            ) : (
                                // Each page number
                                <button
                                    onClick={() => onPageChange(page)}
                                    className={`py-1 text-lg px-3 md:py-2 md:px-4 rounded-lg cursor-pointer ${currentPage === page
                                            ? 'bg-[#F0F0F0] hover:bg-neutral-100'  // Style cho trang hiện tại
                                            : 'hover:bg-neutral-100'                // Style cho trang khác
                                        }`}
                                >
                                    {page}
                                </button>
                            )}
                        </li>
                    ))}
                </div>

                {/* Next Button */}
                <li>
                    <button
                        className='flex items-center border-2 p-3 md:py-2 md:px-4 rounded-xl hover:bg-gray-100 disabled:opacity-50'
                        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}  // Disable nếu ở trang cuối
                    >
                        <span className='hidden md:block mr-2'>Next</span> 
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.1665 9.99996H15.8332M15.8332 9.99996L9.99984 4.16663M15.8332 9.99996L9.99984 15.8333" stroke="black" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination