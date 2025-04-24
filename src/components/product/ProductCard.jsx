import React from 'react';
import products from '../../data/products';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    }).isRequired,
}

function ProductCard({ product }) {
    // Hàm tạo Slug
    const generateSlug = (str) => (
        str.toLowerCase()  // Chuyển thành chữ thường
            .replace(/[^a-z0-9]+/g, '-')  // Thay khoảng trắng và ký tự đặc biệt bằng dấu '-'
            .replace(/^-|-$/g, '')  // Xóa dấu '-' ở đầu và cuối chuỗi
    )
    const slug = generateSlug(product.name)

    // Hàm helper để xử lý đường dẫn ảnh
    const getImageUrl = (path) => {
        // Xử lý cho cả môi trường development và production
        return path.startsWith('assets/')
            ? import.meta.env.BASE_URL + path
            : path;
    }

    return (
        <Link to={`/category/${slug}`} className='w-full'>
            <div className="aspect-square overflow-hidden rounded-3xl"> {/* Thêm container với tỷ lệ 1:1 */}
                <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                    src={getImageUrl(product.image)}
                    alt={product.name}
                />
            </div>
            <h3 className='text-sm pt-2 font-bold'>{product.name}</h3>

            <div className='flex text-sm tracking-widest'>
                <div>
                    <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
                    <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
                    <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
                    <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
                    <i className="text-[#ffc633] fa-sharp fa-solid fa-star-half"></i>
                </div>
                <div className="">
                    4.5/5
                </div>
            </div>
            <p className='font-bold text-lg'>${product.price}</p>

        </Link>
    );
}

export default ProductCard;
// <Link to='/product' className='w-full'>
//     <div className="overflow-hidden rounded-3xl">
//         <img className="hover:scale-105 transition-transform duration-300 ease-in-out w-full h-52 md:h-64 "
//             src={product.image} alt={product.name} />
//     </div>

//     <h3 className='text-sm pt-2 font-bold'>{product.name}</h3>

//     <div className='flex text-sm tracking-widest'>
//         <div>
//             <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
//             <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
//             <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
//             <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
//             <i className="text-[#ffc633] fa-sharp fa-solid fa-star-half"></i>
//         </div>
//         <div className="">
//             4.5/5
//         </div>
//     </div>
//     <p className='font-bold text-lg'>${product.price}</p>

// </Link>