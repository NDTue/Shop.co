import React from 'react';

function DressStyle(props) {
    return (
        <div className="bg-[#f0f0f0] max-w-96 md:max-w-[78rem] my-0 mx-auto pb-10 md:pb-16 rounded-3xl">
            <h2 className='pt-10 pb-8 md:pt-16 text-5xl md:text-5xl uppercase text-center font-extrabold'>
                Browse by dress style
            </h2>

            {/* Images */}
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-stretch md:items-center gap-5">
                <div className="relative w-80 flex mx-auto max-w-sm h-60 rounded-xl overflow-hidden">
                    <img
                        className="w-full h-full object-cover "
                        src="/assets/products/Casual.png"
                        alt="Casual"
                    />
                    <div className="absolute top-5 left-5 z-10 text-3xl font-semibold">
                        Casual
                    </div>
                </div>
                <div className="relative w-80 flex mx-auto max-w-sm h-60 rounded-xl overflow-hidden">
                    <img
                        className="w-full h-full object-cover "
                        src="/assets/products/Formal.png"
                        alt="Formal"
                    />
                    <div className="absolute top-5 left-5 z-10 text-3xl font-semibold">
                        Formal
                    </div>
                </div>
                <div className="relative w-80 flex mx-auto max-w-sm h-60 rounded-xl overflow-hidden">
                    <img
                        className="w-full h-full object-cover "
                        src="/assets/products/Party.png"
                        alt="Party"
                    />
                    <div className="absolute top-5 left-5 z-10 text-3xl font-semibold">
                        Party
                    </div>
                </div>
                <div className="relative w-80 flex mx-auto max-w-sm h-60 rounded-xl overflow-hidden">
                    <img
                        className="w-full h-full object-cover "
                        src="/assets/products/Gym.png"
                        alt="Gym"
                    />
                    <div className="absolute top-5 left-5 z-10 text-3xl font-semibold">
                        Gym
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DressStyle;