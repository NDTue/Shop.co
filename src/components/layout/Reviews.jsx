import React, { useState, useRef, useEffect } from 'react'

function Reviews(props) {
  // Dữ liệu cho các review cards
  const reviewData = [
    {
      id: 1,
      name: "Bill Gate",
      text: "Wind-ui, is probaly one of the best libraries I've came across. Good looking, easy to use and above all super accessible."
    },
    {
      id: 2,
      name: "Darius",
      text: "An e-commerce platform meticulously crafted for the sale of cartoon-themed products, providing users with a delightful and hassle-free shopping experience."
    },
    {
      id: 3,
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
      id: 4,
      name: "Alex K.",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
      id: 5,
      name: "James L.",
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
      id: 6,
      name: "Rashel Ochoa",
      text: "Features an intuitive navigation and visually attractive design, making it easy for users to browse and find products."
    },
    {
      id: 7,
      name: "Claudia Ghera",
      text: "Ensures a seamless and engaging shopping experience with quick load times and responsive interactions."
    }
  ]

  // State để theo dõi vị trí hiện tại của carousel
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // State để theo dõi hướng của animation
  const [direction, setDirection] = useState(null)
  
  // State để kiểm soát animation
  const [isAnimating, setIsAnimating] = useState(false)

  // Tham chiếu đến phần tử DOM carousel
  const carouselRef = useRef(null)

  // Hàm xử lý khi người dùng nhấn nút Previous (trước đó)
  const handlePrev = () => {
    if (isAnimating) return // Ngăn chặn click liên tục trong khi đang animation
    
    setDirection('right') // Thiết lập hướng animation sang phải
    setIsAnimating(true)

    // Cập nhật index sau khi animation bắt đầu
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? reviewData.length - 1 : prevIndex - 1
      )
      setIsAnimating(false)
      setDirection(null)
    }, 500) // Thời gian phải khớp với duration của CSS transition
  }

  // Hàm xử lý khi người dùng nhấn nút Next (tiếp theo)
  const handleNext = () => {
    if (isAnimating) return // Ngăn chặn click liên tục trong khi đang animation
    
    setDirection('left') // Thiết lập hướng animation sang trái
    setIsAnimating(true)

    // Cập nhật index sau khi animation bắt đầu
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviewData.length - 1 ? 0 : prevIndex + 1
      )
      setIsAnimating(false)
      setDirection(null)
    }, 500) // Thời gian phải khớp với duration của CSS transition
  }

  // Lấy các reviews hiển thị trên mobile (1 review)
  const getMobileVisibleCard = () => {
    return reviewData[currentIndex]
  }

  // Lấy các reviews hiển thị trên desktop (3 reviews)
  const getDesktopVisibleCards = () => {
    const cards = []
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % reviewData.length
      cards.push(reviewData[idx])
    }
    return cards
  }

  // Hàm tạo class CSS cho animation dựa vào hướng
  const getAnimationClass = () => {
    if (!direction) return ''
    
    if (direction === 'left') {
      return 'animate-slide-in-left'
    } else if (direction === 'right') {
      return 'animate-slide-in-right'
    }
    
    return ''
  }

  // Hàm hiển thị một review card
  const renderReviewCard = (review) => {
    return (
      <div className='h-full border-2 border-[#e6e6e6] rounded-3xl px-6 py-6 transition-shadow'>
        {/* Phần đánh giá sao */}
        <div className="flex mb-4">
          <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
          <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
          <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
          <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
          <i className="text-[#ffc633] fa-sharp fa-solid fa-star"></i>
        </div>

        {/* Thông tin người dùng */}
        <div className="flex items-center gap-2 mb-3">
          <h3 className="font-semibold text-lg">{review.name}</h3>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.8291C10.0716 2.8291 8.18657 3.40093 6.58319 4.47227C4.97982 5.54362 3.73013 7.06636 2.99218 8.84794C2.25422 10.6295 2.06114 12.5899 2.43735 14.4812C2.81355 16.3725 3.74215 18.1098 5.10571 19.4734C6.46928 20.837 8.20656 21.7656 10.0979 22.1418C11.9892 22.518 13.9496 22.3249 15.7312 21.5869C17.5127 20.849 19.0355 19.5993 20.1068 17.9959C21.1782 16.3925 21.75 14.5075 21.75 12.5791C21.7473 9.99408 20.7192 7.51571 18.8913 5.68783C17.0634 3.85994 14.585 2.83183 12 2.8291ZM16.2806 10.8597L11.0306 16.1097C10.961 16.1795 10.8783 16.2348 10.7872 16.2725C10.6962 16.3103 10.5986 16.3297 10.5 16.3297C10.4014 16.3297 10.3038 16.3103 10.2128 16.2725C10.1218 16.2348 10.039 16.1795 9.96938 16.1097L7.71938 13.8597C7.57865 13.719 7.49959 13.5281 7.49959 13.3291C7.49959 13.1301 7.57865 12.9392 7.71938 12.7985C7.86011 12.6577 8.05098 12.5787 8.25 12.5787C8.44903 12.5787 8.6399 12.6577 8.78063 12.7985L10.5 14.5188L15.2194 9.79848C15.2891 9.72879 15.3718 9.67352 15.4628 9.63581C15.5539 9.59809 15.6515 9.57868 15.75 9.57868C15.8486 9.57868 15.9461 9.59809 16.0372 9.63581C16.1282 9.67352 16.2109 9.72879 16.2806 9.79848C16.3503 9.86816 16.4056 9.95088 16.4433 10.0419C16.481 10.133 16.5004 10.2306 16.5004 10.3291C16.5004 10.4276 16.481 10.5252 16.4433 10.6163C16.4056 10.7073 16.3503 10.79 16.2806 10.8597Z" fill="#01AB31" />
          </svg>
        </div>

        {/* Nội dung đánh giá */}
        <p className="opacity-60">
          "{review.text}"
        </p>
      </div>
    )
  }

  return (
    <section className="relative max-w-96 md:max-w-6xl mx-auto mt-10 pb-16 px-4">
      {/* Phần tiêu đề và các nút điều hướng */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="uppercase text-4xl md:text-5xl font-bold">
          Our happy Customers
        </h2>
        {/* Các nút mũi tên điều hướng */}
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 hover:bg-gray-100 rounded-full transition-all disabled:opacity-50"
            disabled={isAnimating}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.70406 4.4541L2.95406 11.2041C2.84918 11.3086 2.76597 11.4328 2.70919 11.5696C2.6524 11.7063 2.62317 11.8529 2.62317 12.001C2.62317 12.149 2.6524 12.2957 2.70919 12.4324C2.76597 12.5691 2.84918 12.6933 2.95406 12.7979L9.70406 19.5479C9.91541 19.7592 10.2021 19.8779 10.5009 19.8779C10.7998 19.8779 11.0865 19.7592 11.2978 19.5479C11.5092 19.3365 11.6279 19.0499 11.6279 18.751C11.6279 18.4521 11.5092 18.1654 11.2978 17.9541L6.46875 13.125L20.25 13.125C20.5484 13.125 20.8345 13.0065 21.0455 12.7955C21.2565 12.5846 21.375 12.2984 21.375 12C21.375 11.7017 21.2565 11.4155 21.0455 11.2045C20.8345 10.9936 20.5484 10.875 20.25 10.875L6.46875 10.875L11.2987 6.04598C11.5101 5.83463 11.6288 5.54799 11.6288 5.2491C11.6288 4.95022 11.5101 4.66357 11.2987 4.45223C11.0874 4.24088 10.8008 4.12215 10.5019 4.12215C10.203 4.12215 9.91634 4.24088 9.705 4.45223L9.70406 4.4541Z" fill="black" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="p-2 hover:bg-gray-100 rounded-full transition-all disabled:opacity-50"
            disabled={isAnimating}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2959 4.4541L21.0459 11.2041C21.1508 11.3086 21.234 11.4328 21.2908 11.5696C21.3476 11.7063 21.3768 11.8529 21.3768 12.001C21.3768 12.149 21.3476 12.2957 21.2908 12.4324C21.234 12.5691 21.1508 12.6933 21.0459 12.7979L14.2959 19.5479C14.0846 19.7592 13.7979 19.8779 13.4991 19.8779C13.2002 19.8779 12.9135 19.7592 12.7022 19.5479C12.4908 19.3365 12.3721 19.0499 12.3721 18.751C12.3721 18.4521 12.4908 18.1654 12.7022 17.9541L17.5313 13.125L3.75 13.125C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5846 2.625 12.2984 2.625 12C2.625 11.7017 2.74353 11.4155 2.95451 11.2045C3.16548 10.9936 3.45163 10.875 3.75 10.875L17.5313 10.875L12.7013 6.04598C12.4899 5.83463 12.3712 5.54799 12.3712 5.2491C12.3712 4.95022 12.4899 4.66357 12.7013 4.45223C12.9126 4.24088 13.1992 4.12215 13.4981 4.12215C13.797 4.12215 14.0837 4.24088 14.295 4.45223L14.2959 4.4541Z" fill="black" />
            </svg>
          </button>
        </div>
      </div>

      {/* Container cho carousel */}
      <div className="relative overflow-hidden">
        {/* Hiển thị mobile - một card */}
        <div className="md:hidden relative h-[300px]">
          <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            direction === 'left' ? '-translate-x-full' : 
            direction === 'right' ? 'translate-x-full' : 
            'translate-x-0'
          }`}>
            {renderReviewCard(getMobileVisibleCard())}
          </div>
          <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            direction === 'left' ? 'translate-x-0' : 
            direction === 'right' ? '-translate-x-full' : 
            'translate-x-full'
          }`}>
            {renderReviewCard(
              reviewData[
                currentIndex === 0 ? reviewData.length - 1 : currentIndex - 1
              ]
            )}
          </div>
        </div>

        {/* Hiển thị desktop - ba cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 relative">
          {getDesktopVisibleCards().map((review, index) => (
            <div 
              key={`${review.id}-${index}`} 
              className={`transition-all duration-500 ease-in-out ${
                isAnimating ? (
                  direction === 'left' ? 'animate-slide-in-left' : 
                  direction === 'right' ? 'animate-slide-in-right' : 
                  ''
                ) : ''
              }`}
            >
              {renderReviewCard(review)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews