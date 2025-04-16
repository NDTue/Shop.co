import React, { useEffect, useState } from 'react';
import ProductCard from '../product/ProductCard';
import products from '../../data/products';

function TopSelling() {
    // Khởi tạo state để kiểm tra đang ở thiết bị mobile hay không
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Hàm kiểm tra kích thước màn hình để cập nhật isMobile
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768) // <768px thì là mobile
        };

        handleResize() // Gọi ngay khi component được render lần đầu

        // Gán sự kiện resize cho window
        window.onresize = handleResize

        // Dọn dẹp khi unmount component
        return () => {
            window.onresize = null
        }
    }, [])

    // Lọc sản phẩm dựa theo kích thước màn hình
    const filteredProducts = products.filter(product =>
        isMobile
            ? product.id >= 5 && product.id <= 6   // Hiển thị 2 sản phẩm trên mobile
            : product.id >= 5 && product.id <= 8   // Hiển thị 4 sản phẩm trên màn hình md trở lên
    );

    return (
        <section className="max-w-96 md:max-w-[78rem] my-0 mx-auto pb-16">
            <h2 className='pt-10 pb-8 md:pt-16 text-4xl md:text-5xl uppercase text-center font-extrabold'>
                Top selling
            </h2>

            {/* Grid hiển thị sản phẩm */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-x-5'>
                {/* Hiển thị sản phẩm đã lọc */}
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}

                {/* Nút View All */}
                <div className='pt-8 col-span-2 md:col-span-4 flex justify-center'>
                    <a className="cursor-pointer hover:opacity-50 flex items-center justify-center border-2 rounded-full w-96 h-11 ">
                        View All
                    </a>
                </div>
            </div>
        </section>
    );
}

export default TopSelling;
