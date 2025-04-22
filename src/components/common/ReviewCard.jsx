import React from 'react';
import PropTypes from 'prop-types';

ReviewCard.propTypes = {
    maxCards: PropTypes.number,
    isMobile: PropTypes.bool
};

function ReviewCard({ maxCards = 3, isMobile = false }) {
    // Mảng chứa tất cả reviews
    const allReviews = [
        {
            rating: 5,
            author: "Bill Gate",
            content: "Wind-ui, is probaly one of the best libraries I've came across. Good looking, easy to use and above all super accessible."
        },
        {
            rating: 4,
            author: "Darius",
            content: "An e-commerce platform meticulously crafted for the sale of cartoonthemed products, providing users with a delightful and hassle-free shopping experience."
        },
        {
            rating: 5,
            author: "Josh Somers",
            content: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        },
        {
            rating: 3,
            author: "Alex K",
            content: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable."
        },
        {
            rating: 4,
            author: "James L",
            content: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
        },
        {
            rating: 3,
            author: "Rashel Ochoa",
            content: "Features an intuitive navigation and visually attractive design, making it easy for users to browse and find products."
        }
    ]

    // Lấy ngẫu nhiên số lượng reviews theo maxCards
    const getRandomReviews = (count) => {
        const shuffled = [...allReviews].sort(() => 0.5 - Math.random())
        return shuffled.slice(0, count)
    }

    const reviews = getRandomReviews(maxCards)

    return (
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-6`}>
            {reviews.map((review, index) => (
                <div key={index} className="border border-gray-300 rounded-xl p-6">
                    {/* Rating stars */}
                    <div className="flex gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                            <i key={i} className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
                        ))}
                    </div>

                    {/* Author name and verified badge */}
                    <div className="flex items-center gap-2 mb-4">
                        <h3 className="font-medium">{review.author}</h3>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 1.97095C7.97338 1.97095 6.48104 2.42364 5.2117 3.27179C3.94235 4.11994 2.95302 5.32544 2.36881 6.73586C1.78459 8.14628 1.63174 9.69826 1.92957 11.1956C2.2274 12.6928 2.96254 14.0682 4.04202 15.1477C5.12151 16.2272 6.49686 16.9623 7.99415 17.2601C9.49144 17.558 11.0434 17.4051 12.4538 16.8209C13.8643 16.2367 15.0698 15.2473 15.9179 13.978C16.7661 12.7087 17.2188 11.2163 17.2188 9.6897C17.2166 7.64322 16.4027 5.68118 14.9556 4.2341C13.5085 2.78703 11.5465 1.97311 9.5 1.97095ZM12.8888 8.32853L8.73258 12.4848C8.67744 12.54 8.61195 12.5838 8.53987 12.6137C8.46779 12.6435 8.39053 12.6589 8.3125 12.6589C8.23448 12.6589 8.15721 12.6435 8.08513 12.6137C8.01305 12.5838 7.94757 12.54 7.89243 12.4848L6.11118 10.7035C5.99976 10.5921 5.93717 10.441 5.93717 10.2834C5.93717 10.1259 5.99976 9.97478 6.11118 9.86337C6.22259 9.75196 6.37369 9.68937 6.53125 9.68937C6.68881 9.68937 6.83992 9.75196 6.95133 9.86337L8.3125 11.2253L12.0487 7.48837C12.1038 7.4332 12.1693 7.38944 12.2414 7.35959C12.3135 7.32973 12.3907 7.31437 12.4688 7.31437C12.5468 7.31437 12.624 7.32973 12.6961 7.35959C12.7682 7.38944 12.8337 7.4332 12.8888 7.48837C12.944 7.54353 12.9878 7.60903 13.0176 7.6811C13.0475 7.75318 13.0628 7.83043 13.0628 7.90845C13.0628 7.98646 13.0475 8.06371 13.0176 8.13579C12.9878 8.20787 12.944 8.27336 12.8888 8.32853Z" fill="#01AB31" />
                        </svg>
                    </div>

                    {/* Review content */}
                    <p className="text-gray-600">{review.content}</p>
                </div>
            ))}
        </div>
    );
}

export default ReviewCard;