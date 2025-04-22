import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewCard from '../../common/ReviewCard';

DetailsAndReviews.propTypes = {
    product: PropTypes.shape({
        desc: PropTypes.string.isRequired,
    }).isRequired,
}

function DetailsAndReviews({ product }) {
    // State để quản lý tab đang được chọn (mặc định là Product Details)
    const [selectedTab, setSelectedTab] = useState('details')

    // Hàm xử lý khi click vào tab
    const handleTabClick = (tab) => {
        setSelectedTab(tab)
    }

    // Hàm render nội dung dựa trên tab được chọn
    const renderContent = () => {
        if (selectedTab === 'details') {
            return (
                <div className="py-8 px-4 md:px-8">
                    <p className="text-gray-600">{product.desc}</p>
                </div>
            )
        }

        return (
            <div className="py-8 px-4 md:px-8 overflow-hidden">
                {/* Trên mobile: 1 cột, 3 card */}
                <div className="md:hidden">
                    <ReviewCard maxCards={3} isMobile={true} />
                </div>

                {/* Trên desktop: 2 cột, 4 card */}
                <div className="hidden md:block">
                    <ReviewCard maxCards={4} isMobile={false} />
                </div>
            </div>
        )
    }

    return (
        <section className='pt-5 pb-0 md:py-10 max-w-96 md:max-w-[78rem] mx-auto'>
            {/* Tab buttons */}
            <div className="flex justify-center items-center border-b">
                <button 
                    className={`w-full py-5 text-center text-lg font-medium transition-colors
                        ${selectedTab === 'details' 
                            ? 'border-b-2 border-black text-black' 
                            : 'text-gray-500 hover:text-black'
                        }`}
                    onClick={() => handleTabClick('details')}
                >
                    Product Details
                </button>

                <button 
                    className={`w-full py-5 text-center text-lg font-medium transition-colors
                        ${selectedTab === 'reviews' 
                            ? 'border-b-2 border-black text-black' 
                            : 'text-gray-500 hover:text-black'
                        }`}
                    onClick={() => handleTabClick('reviews')}
                >
                    Rating & Reviews
                </button>
            </div>

            {/* Tab content */}
            {renderContent()}
        </section>
    )
}

export default DetailsAndReviews;