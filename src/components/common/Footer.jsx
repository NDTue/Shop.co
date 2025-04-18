import React from 'react';

function Footer(props) {
    return (
        <footer className='relative'>
            <div className="max-w-96 md:max-w-[78rem] my-0 mx-auto pb-4">
                {/* Contact */}
                <div className="flex flex-col md:flex-row items-center justify-around bg-black rounded-2xl w-full p-6 md:p-4 md:h-44">
                    <h2 className="text-white font-extrabold uppercase text-4xl text-left md:max-w-lg pb-3">
                        Stay up to date about our latest offers
                    </h2>

                    <div className="w-full flex flex-col items-center gap-2 mt-4 md:mt-0 md:w-auto">
                        {/* Input */}
                        <form className="rounded-full flex items-center justify-center bg-white w-full md:w-80 h-12 px-4">
                            <label htmlFor="email_footer">
                                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.875 14.4973 1.07254 14.9742 1.42417 15.3258C1.77581 15.6775 2.25272 15.875 2.75 15.875H19.25C19.7473 15.875 20.2242 15.6775 20.5758 15.3258C20.9275 14.9742 21.125 14.4973 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM11 7.97375L4.89219 2.375H17.1078L11 7.97375ZM7.69906 8L3.125 12.1925V3.8075L7.69906 8ZM9.36406 9.52625L10.2397 10.3297C10.4472 10.52 10.7185 10.6255 11 10.6255C11.2815 10.6255 11.5528 10.52 11.7603 10.3297L12.6359 9.52625L17.1078 13.625H4.89219L9.36406 9.52625ZM14.3009 8L18.875 3.8075V12.1925L14.3009 8Z" fill="black" fillOpacity="0.4" />
                                </svg>
                            </label>

                            <input id="email_footer" className="ml-3 w-full py-2 focus:outline-none"
                                type="email" placeholder="Enter your email address" />
                        </form>

                        <button className="bg-white font-medium w-full md:w-80 h-12 rounded-full">
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>


                {/* Informations */}
                <div className="flex flex-col justify-between items-start md:flex-row py-8">
                    {/* Description */}
                    <div className="w-full md:w-1/4">
                        <a>
                            <h1 className='text-4xl font-extrabold '>SHOP.CO</h1>
                        </a>
                        <p className='opacity-60 mt-4 md:mt-4'>
                            We have clothes that suits your style and which you’re proud to wear. From women to men.
                        </p>

                        {/* Socials Network */}
                        <div className="flex flex-col mt-5 md:mt-3 md:flex-row md:justify-around md:items-center gap-3 md:gap-0">
                            {/* Row 1 for mobile - 2 buttons */}
                            <div className="flex md:flex-row w-full md:w-auto md:mr-8">
                                {/* LinkedIn */}
                                <a className="w-1/2 md:w-7 h-7 rounded-full bg-white border border-[#ccc] flex items-center justify-center hover:opacity-50 mr-3 py-5 md:p-5"
                                    target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/duc-tue-nguyen/"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                    <span className="text-sm ml-2 md:hidden">LinkedIn</span>
                                </a>

                                {/* GitHub */}
                                <a className="w-1/2 md:w-7 h-7 rounded-full bg-white border border-[#ccc] flex items-center justify-center hover:opacity-50 py-5 md:p-5"
                                    target="_blank" rel="noopener noreferrer" href="https://github.com/NDTue"
                                >
                                    <i className="fa-brands fa-github"></i>
                                    <span className="text-sm ml-2 md:hidden">GitHub</span>
                                </a>
                            </div>

                            {/* Figma */}
                            <a className="w-full md:w-auto md:flex-1 md:max-w-none h-7 rounded-full md:rounded-lg bg-black border border-[#ccc] flex items-center justify-center hover:opacity-50 py-5 md:p-5"
                                target="_blank" rel="noopener noreferrer" href="https://www.figma.com/community/file/1273571982885059508"
                            >
                                <span className="text-white text-sm">View Figma Template</span>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-14 md:gap-x-12">
                        {/* Company */}
                        <div className="mt-5 md:mt-0 flex flex-col">
                            <h3 className='uppercase mb-5 tracking-widest'>Company</h3>
                            <a className='opacity-50 mb-4 ' href='#'>About</a>
                            <a className='opacity-50 mb-4 ' href='#'>Features</a>
                            <a className='opacity-50 mb-4 ' href='#'>Works</a>
                            <a className='opacity-50 mb-4 ' href='#'>Career</a>
                        </div>

                        {/* Help */}
                        <div className="mt-5 md:mt-0 flex flex-col">
                            <h3 className='uppercase mb-5 tracking-widest'>Help</h3>
                            <a className='opacity-50 mb-4 ' href='#'>Customer Support</a>
                            <a className='opacity-50 mb-4 ' href='#'>Delivery Details</a>
                            <a className='opacity-50 mb-4 ' href='#'>Terms & Conditions</a>
                            <a className='opacity-50 mb-4 ' href='#'>Privacy Policy</a>
                        </div>

                        {/* FAQ */}
                        <div className="mt-5 md:mt-0 flex flex-col">
                            <h3 className='uppercase mb-5 tracking-widest'>FAQ</h3>
                            <a className='opacity-50 mb-4 ' href='#'>Account</a>
                            <a className='opacity-50 mb-4 ' href='#'>Manage Deliveries</a>
                            <a className='opacity-50 mb-4 ' href='#'>Orders</a>
                            <a className='opacity-50 mb-4 ' href='#'>Payments</a>
                        </div>

                        {/* Resources */}
                        <div className="mt-5 md:mt-0 flex flex-col">
                            <h3 className='uppercase mb-5 tracking-widest'>Resources</h3>
                            <a className='opacity-50 mb-4 ' href='#'>Free eBooks</a>
                            <a className='opacity-50 mb-4 ' href='#'>Develepmont Tutorial</a>
                            <a className='opacity-50 mb-4 ' href='#'>How to - Blog</a>
                            <a className='opacity-50 mb-4 ' href='#'>Youtube Playlist</a>
                        </div>
                    </div>


                </div>
                <hr className='border mt-8 md:mt-5 w-full' />

                {/* Copyright */}
                <div className="flex justify-between items-center md:pt-10">
                    <h4 className='opacity-50 text-sm'>Shop.co © 2000-2023, All Rights Reserved</h4>

                    {/* Payments */}
                    <div className="flex">
                        {/* Visa */}
                        <span>
                            <svg width="56" height="43" viewBox="0 0 56 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_dd_35_1052)">
                                    <rect x="8" y="5" width="39.9568" height="25.7414" rx="4.6104" fill="white" />
                                    <rect x="7.90395" y="4.90395" width="40.1489" height="25.9335" rx="4.70645" stroke="#D6DCE5" strokeWidth="0.1921" />
                                    <path d="M27.7341 13.6755L25.8703 22.3875H23.6167L25.4807 13.6755H27.7341ZM37.2159 19.3008L38.4024 16.0292L39.0851 19.3008H37.2159ZM39.7304 22.3875H41.8149L39.9959 13.6755H38.0718C37.6394 13.6755 37.2746 13.927 37.1122 14.3147L33.7311 22.3875H36.0978L36.5676 21.0865H39.459L39.7304 22.3875ZM33.8486 19.5429C33.8582 17.2436 30.6688 17.117 30.6908 16.0899C30.6974 15.7769 30.9955 15.4449 31.6465 15.3597C31.97 15.3175 32.8592 15.2853 33.869 15.7499L34.2644 13.9024C33.722 13.7055 33.0241 13.5161 32.1561 13.5161C29.9287 13.5161 28.3608 14.7004 28.3476 16.3962C28.3335 17.6503 29.4668 18.3501 30.3208 18.767C31.1987 19.1941 31.4938 19.4677 31.4899 19.8496C31.4841 20.4344 30.7895 20.692 30.1415 20.7022C29.0083 20.7201 28.3506 20.3964 27.8264 20.1521L27.4181 22.061C27.9445 22.3028 28.9164 22.5129 29.9248 22.5237C32.292 22.5237 33.8409 21.354 33.8486 19.5429ZM24.5137 13.6755L20.8624 22.3875H18.4797L16.683 15.4347C16.5738 15.0065 16.4789 14.8499 16.1472 14.6693C15.606 14.3756 14.7112 14.0996 13.924 13.9286L13.9777 13.6755H17.8124C18.301 13.6755 18.7408 14.0009 18.8517 14.5636L19.8008 19.6053L22.1459 13.6755H24.5137Z" fill="#1434CB" />
                                </g>
                                <defs>
                                    <filter id="filter0_dd_35_1052" x="0.123861" y="0.966105" width="55.7091" height="41.4935" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="0.3842" />
                                        <feGaussianBlur stdDeviation="1.921" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_35_1052" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="3.842" />
                                        <feGaussianBlur stdDeviation="3.842" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                        <feBlend mode="normal" in2="effect1_dropShadow_35_1052" result="effect2_dropShadow_35_1052" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_35_1052" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </span>
                        {/* Master Card */}
                        <span>
                            <svg width="57" height="43" viewBox="0 0 57 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_dd_35_1054)">
                                    <rect x="8.24292" y="5" width="39.9568" height="25.7414" rx="4.6104" fill="white" />
                                    <rect x="8.14687" y="4.90395" width="40.1489" height="25.9335" rx="4.70645" stroke="#D6DCE5" strokeWidth="0.1921" />
                                    <path d="M31.0915 12.5845H25.2085V23.1565H31.0915V12.5845Z" fill="#FF5F00" />
                                    <path d="M25.5821 17.8705C25.5811 16.8523 25.8118 15.8473 26.2568 14.9315C26.7017 14.0157 27.3491 13.2131 28.15 12.5845C27.1582 11.8048 25.967 11.32 24.7126 11.1854C23.4582 11.0507 22.1913 11.2717 21.0566 11.8231C19.9219 12.3745 18.9652 13.234 18.2959 14.3034C17.6265 15.3728 17.2716 16.6089 17.2716 17.8705C17.2716 19.1321 17.6265 20.3682 18.2959 21.4376C18.9652 22.507 19.9219 23.3665 21.0566 23.9178C22.1913 24.4692 23.4582 24.6902 24.7126 24.5556C25.967 24.4209 27.1582 23.9361 28.15 23.1565C27.3491 22.5279 26.7017 21.7253 26.2568 20.8095C25.8119 19.8937 25.5811 18.8886 25.5821 17.8705Z" fill="#EB001B" />
                                    <path d="M39.0281 17.8705C39.0282 19.132 38.6733 20.3682 38.004 21.4375C37.3347 22.5069 36.378 23.3664 35.2434 23.9178C34.1087 24.4692 32.8417 24.6902 31.5874 24.5556C30.333 24.4209 29.1419 23.9361 28.15 23.1565C28.9503 22.5272 29.5972 21.7245 30.042 20.8089C30.4869 19.8932 30.718 18.8885 30.718 17.8705C30.718 16.8525 30.4869 15.8478 30.042 14.9321C29.5972 14.0164 28.9503 13.2137 28.15 12.5845C29.1419 11.8048 30.333 11.32 31.5874 11.1854C32.8417 11.0507 34.1087 11.2717 35.2434 11.8231C36.378 12.3745 37.3347 13.234 38.004 14.3034C38.6733 15.3728 39.0282 16.6089 39.0281 17.8705Z" fill="#F79E1B" />
                                    <path d="M38.3867 22.0367V21.8203H38.4739V21.7762H38.2517V21.8203H38.339V22.0367H38.3867ZM38.8182 22.0367V21.7758H38.7501L38.6717 21.9553L38.5933 21.7758H38.5251V22.0367H38.5733V21.8399L38.6467 22.0096H38.6966L38.7701 21.8395V22.0367H38.8182Z" fill="#F79E1B" />
                                </g>
                                <defs>
                                    <filter id="filter0_dd_35_1054" x="0.366781" y="0.966105" width="55.7091" height="41.4935" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="0.3842" />
                                        <feGaussianBlur stdDeviation="1.921" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_35_1054" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="3.842" />
                                        <feGaussianBlur stdDeviation="3.842" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                        <feBlend mode="normal" in2="effect1_dropShadow_35_1054" result="effect2_dropShadow_35_1054" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_35_1054" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </span>
                        {/* PayPal */}
                        <span>
                            <svg width="57" height="43" viewBox="0 0 57 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_dd_35_1056)">
                                    <rect x="8.48596" y="5" width="39.9568" height="25.7414" rx="4.6104" fill="white" />
                                    <rect x="8.38991" y="4.90395" width="40.1489" height="25.9335" rx="4.70645" stroke="#D6DCE5" strokeWidth="0.1921" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.2267 14.1253H14.923C14.7654 14.1253 14.6313 14.2399 14.6067 14.3955L13.675 20.3021C13.6565 20.4186 13.7468 20.5237 13.865 20.5237H14.9648C15.1224 20.5237 15.2565 20.4091 15.2811 20.2533L15.5324 18.6602C15.5566 18.5042 15.691 18.3898 15.8484 18.3898H16.5776C18.0951 18.3898 18.9709 17.6555 19.1997 16.2005C19.3027 15.564 19.2041 15.0638 18.9059 14.7134C18.5785 14.3289 17.9977 14.1253 17.2267 14.1253ZM17.4925 16.2827C17.3665 17.1092 16.7349 17.1092 16.1242 17.1092H15.7766L16.0205 15.5655C16.035 15.4723 16.1158 15.4036 16.2101 15.4036H16.3695C16.7855 15.4036 17.1779 15.4036 17.3807 15.6407C17.5015 15.7822 17.5386 15.9923 17.4925 16.2827ZM24.1129 16.2562H23.0098C22.9158 16.2562 22.8345 16.3249 22.82 16.4183L22.7713 16.7267L22.6941 16.615C22.4553 16.2683 21.9228 16.1525 21.3912 16.1525C20.1721 16.1525 19.131 17.0757 18.9282 18.3708C18.8228 19.0167 18.9726 19.6343 19.3391 20.0651C19.6753 20.4612 20.1563 20.6263 20.7286 20.6263C21.7108 20.6263 22.2556 19.9947 22.2556 19.9947L22.2063 20.3013C22.1878 20.4185 22.278 20.5235 22.3956 20.5235H23.3893C23.5474 20.5235 23.6807 20.409 23.7056 20.2531L24.3019 16.4778C24.3207 16.3617 24.2308 16.2562 24.1129 16.2562ZM22.5752 18.403C22.4687 19.0332 21.9685 19.4562 21.3306 19.4562C21.0103 19.4562 20.7541 19.3535 20.5898 19.1588C20.4268 18.9655 20.3648 18.6903 20.4167 18.3838C20.5161 17.759 21.0248 17.3223 21.653 17.3223C21.9661 17.3223 22.2208 17.4262 22.3886 17.6226C22.5566 17.821 22.6233 18.0978 22.5752 18.403ZM28.8796 16.256H29.9883C30.1435 16.256 30.2341 16.4301 30.1459 16.5574L26.4588 21.8789C26.3991 21.9651 26.3007 22.0164 26.1957 22.0164H25.0884C24.9325 22.0164 24.8415 21.8409 24.9318 21.7132L26.0798 20.0929L24.8588 16.5099C24.8166 16.3854 24.9085 16.256 25.041 16.256H26.1303C26.2719 16.256 26.3967 16.3489 26.4376 16.4843L27.0856 18.6483L28.6146 16.3964C28.6745 16.3085 28.7739 16.256 28.8796 16.256Z" fill="#253B80" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M40.8995 20.3015L41.8449 14.2869C41.8594 14.1936 41.9403 14.1248 42.0343 14.1245H43.0987C43.2162 14.1245 43.3064 14.2299 43.2879 14.3465L42.3556 20.2527C42.3312 20.4086 42.1972 20.5232 42.0393 20.5232H41.0887C40.9712 20.5232 40.8809 20.4181 40.8995 20.3015ZM33.6589 14.1248H31.3549C31.1976 14.1248 31.0635 14.2394 31.0389 14.3949L30.1072 20.3015C30.0886 20.4181 30.1789 20.5232 30.2966 20.5232H31.4788C31.5887 20.5232 31.6827 20.4431 31.6998 20.3339L31.9642 18.6597C31.9885 18.5036 32.1229 18.3892 32.2802 18.3892H33.0091C34.5269 18.3892 35.4025 17.655 35.6315 16.2C35.7348 15.5634 35.6355 15.0633 35.3375 14.7129C35.0103 14.3284 34.4299 14.1248 33.6589 14.1248ZM33.9247 16.2821C33.7991 17.1087 33.1674 17.1087 32.5564 17.1087H32.2091L32.4533 15.565C32.4678 15.4718 32.548 15.4031 32.6426 15.4031H32.8019C33.2176 15.4031 33.6105 15.4031 33.8131 15.6401C33.9341 15.7816 33.9709 15.9918 33.9247 16.2821ZM40.5445 16.2556H39.4421C39.3474 16.2556 39.2669 16.3244 39.2527 16.4177L39.204 16.7262L39.1265 16.6144C38.8877 16.2678 38.3555 16.152 37.8239 16.152C36.6048 16.152 35.564 17.0752 35.3612 18.3702C35.2561 19.0161 35.4053 19.6338 35.7718 20.0646C36.1086 20.4607 36.589 20.6257 37.1613 20.6257C38.1435 20.6257 38.6881 19.9942 38.6881 19.9942L38.639 20.3008C38.6205 20.418 38.7107 20.523 38.8291 20.523H39.8223C39.9796 20.523 40.1137 20.4085 40.1383 20.2526L40.7349 16.4773C40.7531 16.3611 40.6628 16.2556 40.5445 16.2556ZM39.0069 18.4025C38.9011 19.0326 38.4002 19.4557 37.7622 19.4557C37.4425 19.4557 37.1859 19.3529 37.0215 19.1583C36.8584 18.965 36.7971 18.6897 36.8484 18.3833C36.9483 17.7585 37.4564 17.3217 38.0846 17.3217C38.3979 17.3217 38.6524 17.4257 38.8203 17.6221C38.989 17.8205 39.0557 18.0973 39.0069 18.4025Z" fill="#179BD7" />
                                </g>
                                <defs>
                                    <filter id="filter0_dd_35_1056" x="0.609823" y="0.966105" width="55.7091" height="41.4935" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="0.3842" />
                                        <feGaussianBlur stdDeviation="1.921" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_35_1056" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="3.842" />
                                        <feGaussianBlur stdDeviation="3.842" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                        <feBlend mode="normal" in2="effect1_dropShadow_35_1056" result="effect2_dropShadow_35_1056" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_35_1056" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </span>
                        {/* Apple Pay */}
                        <span>
                            <svg width="57" height="43" viewBox="0 0 57 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_dd_35_1058)">
                                    <rect x="8.72888" y="5" width="39.9568" height="25.7414" rx="4.6104" fill="white" />
                                    <rect x="8.63283" y="4.90395" width="40.1489" height="25.9335" rx="4.70645" stroke="#D6DCE5" strokeWidth="0.1921" />
                                    <path d="M21.6526 14.4989C21.9192 14.1654 22.1001 13.7177 22.0523 13.2603C21.6621 13.2797 21.1859 13.5177 20.9102 13.8514C20.6627 14.1371 20.4436 14.6036 20.5007 15.0419C20.9387 15.0799 21.3764 14.8229 21.6526 14.4989Z" fill="#000008" />
                                    <path d="M22.0474 15.1275C21.4112 15.0896 20.8703 15.4885 20.5665 15.4885C20.2626 15.4885 19.7974 15.1466 19.2942 15.1558C18.6393 15.1654 18.0316 15.5357 17.6993 16.1246C17.0157 17.3028 17.5189 19.0504 18.1836 20.0099C18.5064 20.4847 18.8954 21.0074 19.4081 20.9886C19.8924 20.9696 20.0822 20.675 20.671 20.675C21.2593 20.675 21.4303 20.9886 21.943 20.9791C22.4746 20.9696 22.807 20.5041 23.1298 20.0289C23.5001 19.4878 23.6517 18.9653 23.6613 18.9366C23.6517 18.9271 22.636 18.5374 22.6266 17.3691C22.617 16.3908 23.4241 15.9255 23.462 15.8966C23.0063 15.2226 22.2942 15.1466 22.0474 15.1275Z" fill="#000008" />
                                    <path d="M27.5865 13.8035C28.9692 13.8035 29.932 14.7566 29.932 16.1443C29.932 17.5369 28.9494 18.4949 27.5519 18.4949H26.021V20.9294H24.9149V13.8035L27.5865 13.8035ZM26.021 17.5665H27.2901C28.2531 17.5665 28.8012 17.048 28.8012 16.1492C28.8012 15.2505 28.2531 14.7369 27.2951 14.7369H26.021V17.5665Z" fill="#000008" />
                                    <path d="M30.221 19.4529C30.221 18.5442 30.9173 17.9862 32.1519 17.9171L33.574 17.8332V17.4332C33.574 16.8554 33.1839 16.5097 32.5322 16.5097C31.9148 16.5097 31.5296 16.806 31.4358 17.2702H30.4284C30.4877 16.3319 31.2876 15.6406 32.5716 15.6406C33.8308 15.6406 34.6357 16.3072 34.6357 17.3492V20.9294H33.6135V20.0751H33.5889C33.2877 20.6529 32.6309 21.0183 31.9494 21.0183C30.9321 21.0183 30.221 20.3862 30.221 19.4529ZM33.574 18.9838V18.5739L32.295 18.6529C31.658 18.6974 31.2975 18.9789 31.2975 19.4233C31.2975 19.8776 31.6728 20.1739 32.2457 20.1739C32.9913 20.1739 33.574 19.6603 33.574 18.9838Z" fill="#000008" />
                                    <path d="M35.6008 22.8406V21.9763C35.6797 21.9961 35.8574 21.9961 35.9464 21.9961C36.4402 21.9961 36.7069 21.7887 36.8698 21.2554C36.8698 21.2455 36.9637 20.9393 36.9637 20.9344L35.0872 15.7344H36.2426L37.5563 19.9616H37.576L38.8897 15.7344H40.0156L38.0697 21.201C37.6255 22.4603 37.1119 22.8652 36.0354 22.8652C35.9464 22.8652 35.6797 22.8553 35.6008 22.8406Z" fill="#000008" />
                                </g>
                                <defs>
                                    <filter id="filter0_dd_35_1058" x="0.852743" y="0.966105" width="55.7091" height="41.4935" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="0.3842" />
                                        <feGaussianBlur stdDeviation="1.921" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_35_1058" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="3.842" />
                                        <feGaussianBlur stdDeviation="3.842" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                        <feBlend mode="normal" in2="effect1_dropShadow_35_1058" result="effect2_dropShadow_35_1058" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_35_1058" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </span>
                        {/* G-Pay */}
                        <span>
                            <svg width="56" height="43" viewBox="0 0 56 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_dd_35_1060)">
                                    <rect x="7.9718" y="5" width="39.9568" height="25.7414" rx="4.6104" fill="white" />
                                    <rect x="7.87575" y="4.90395" width="40.1489" height="25.9335" rx="4.70645" stroke="#D6DCE5" strokeWidth="0.1921" />
                                    <path d="M27.0816 20.9559H26.1829V13.9628H28.5654C29.1692 13.9628 29.6841 14.1641 30.1054 14.5667C30.536 14.9692 30.7513 15.4607 30.7513 16.0411C30.7513 16.6356 30.536 17.127 30.1054 17.5249C29.6888 17.9228 29.1739 18.1194 28.5654 18.1194H27.0816V20.9559ZM27.0816 14.8241V17.2628H28.5841C28.9399 17.2628 29.2394 17.1411 29.4735 16.9024C29.7122 16.6636 29.8339 16.3734 29.8339 16.0458C29.8339 15.7228 29.7122 15.4373 29.4735 15.1986C29.2394 14.9505 28.9445 14.8288 28.5841 14.8288H27.0816V14.8241Z" fill="#3C4043" />
                                    <path d="M33.101 16.013C33.7656 16.013 34.2899 16.1909 34.6737 16.5466C35.0575 16.9024 35.2494 17.3892 35.2494 18.007V20.9559H34.3928V20.2913H34.3554C33.9856 20.8389 33.4895 21.1104 32.8716 21.1104C32.3427 21.1104 31.9027 20.9559 31.5469 20.6423C31.1912 20.3287 31.0133 19.9402 31.0133 19.4721C31.0133 18.976 31.2006 18.5828 31.575 18.2926C31.9495 17.9977 32.4503 17.8526 33.0729 17.8526C33.6065 17.8526 34.0465 17.9509 34.3882 18.1475V17.9415C34.3882 17.6279 34.2665 17.3658 34.0184 17.1458C33.7703 16.9258 33.4801 16.8181 33.1478 16.8181C32.6469 16.8181 32.2491 17.0287 31.9588 17.4547L31.1678 16.9585C31.6031 16.3266 32.2491 16.013 33.101 16.013ZM31.9401 19.4862C31.9401 19.7202 32.0384 19.9168 32.2397 20.0713C32.4363 20.2257 32.6703 20.3053 32.9371 20.3053C33.3163 20.3053 33.6533 20.1649 33.9482 19.884C34.2431 19.6032 34.3928 19.2755 34.3928 18.8964C34.112 18.6764 33.7235 18.564 33.2227 18.564C32.8576 18.564 32.5533 18.653 32.3099 18.8262C32.0618 19.0087 31.9401 19.2287 31.9401 19.4862Z" fill="#3C4043" />
                                    <path d="M40.1362 16.1675L37.1405 23.0576H36.2137L37.3277 20.647L35.3524 16.1675H36.3307L37.7537 19.6032H37.7724L39.1579 16.1675H40.1362Z" fill="#3C4043" />
                                    <path d="M23.5068 17.553C23.5068 17.26 23.4806 16.9796 23.4319 16.71H19.6649V18.2546L21.8344 18.2551C21.7464 18.7691 21.4632 19.2072 21.0293 19.4993V20.5014H22.3207C23.0748 19.8035 23.5068 18.7719 23.5068 17.553Z" fill="#4285F4" />
                                    <path d="M21.0298 19.4993C20.6703 19.7418 20.2074 19.8836 19.6658 19.8836C18.6197 19.8836 17.7322 19.1787 17.4144 18.2285H16.0822V19.262C16.7422 20.5717 18.0987 21.4704 19.6658 21.4704C20.7489 21.4704 21.6589 21.1142 22.3212 20.501L21.0298 19.4993Z" fill="#34A853" />
                                    <path d="M17.2889 17.4617C17.2889 17.1949 17.3333 16.937 17.4143 16.6945V15.661H16.0822C15.8093 16.2026 15.6558 16.8139 15.6558 17.4617C15.6558 18.1095 15.8098 18.7208 16.0822 19.2624L17.4143 18.2289C17.3333 17.9864 17.2889 17.7285 17.2889 17.4617Z" fill="#FABB05" />
                                    <path d="M19.6658 15.0394C20.257 15.0394 20.7864 15.243 21.2044 15.6409L22.3488 14.4974C21.6537 13.85 20.7475 13.4526 19.6658 13.4526C18.0992 13.4526 16.7422 14.3513 16.0822 15.661L17.4143 16.6945C17.7321 15.7443 18.6197 15.0394 19.6658 15.0394Z" fill="#E94235" />
                                </g>
                                <defs>
                                    <filter id="filter0_dd_35_1060" x="0.0956631" y="0.966105" width="55.7091" height="41.4935" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="0.3842" />
                                        <feGaussianBlur stdDeviation="1.921" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_35_1060" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="3.842" />
                                        <feGaussianBlur stdDeviation="3.842" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0" />
                                        <feBlend mode="normal" in2="effect1_dropShadow_35_1060" result="effect2_dropShadow_35_1060" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_35_1060" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Background Color */}
                <div className="bg-[#f0f0f0] absolute right-0 left-0 bottom-0 h-5/6 -z-10"></div>
            </div>
        </footer>
    );
}

export default Footer;