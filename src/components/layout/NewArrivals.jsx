import React, { useEffect, useState } from 'react'; 
import ProductCard from '../product/ProductCard';   
import products from '../../data/products';         

function NewArrivals() {
    // Khởi tạo state để xác định thiết bị đang là mobile hay không
    // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Định nghĩa hàm xử lý khi resize cửa sổ
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768) // cập nhật lại isMobile nếu kích thước thay đổi
        }

        handleResize() // Gọi ngay khi component được render lần đầu

        // Gán hàm handleResize cho sự kiện window.onresize
        window.onresize = handleResize

        // Khi unmount component, reset lại onresize để tránh memory leak
        return () => {
            window.onresize = null
        }
    }, [])

    // Lọc sản phẩm theo kích thước màn hình
    // Nếu là mobile thì chỉ lấy id 1 đến 2, còn nếu không thì lấy 1 đến 4
    const filteredProducts = products.filter(product =>
        isMobile ? product.id >= 1 && product.id <= 2 : product.id >= 1 && product.id <= 4
    );

    return (
        <section>
            <div className='max-w-96 md:max-w-[78rem] my-0 mx-auto pb-14 md:pb-16'>
                <h2 className='pt-10 pb-8 md:pt-16 text-4xl md:text-5xl uppercase text-center font-extrabold'>
                    New Arrivals
                </h2>

                {/* Product List */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5">
                    {/* Hiển thị danh sách sản phẩm đã được lọc */}
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                    {/* Nút View All nằm ở cuối, chiếm đủ chiều ngang trong grid */}
                    <div className='pt-8 col-span-2 md:col-span-4 flex justify-center'>
                        <a className="cursor-pointer hover:opacity-50 flex items-center justify-center border-2 rounded-full w-96 h-11 ">
                            View All
                        </a>
                    </div>
                </div>
            </div>

            {/* Đường kẻ ngang phân tách dưới cùng */}
            <hr className="max-w-96 md:max-w-[78rem] my-0 mx-auto" />
        </section>
    );
}

export default NewArrivals;
