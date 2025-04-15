import React from 'react';
import Banner from '../components/layout/Banner';
import ProductList from '../components/product/ProductList';
import NewArrivals from '../components/common/NewArrivals';
import TopSelling from '../components/common/TopSelling';
import DressStyle from '../components/common/DressStyle';
import Reviews from '../components/common/Reviews';


function Homepage(props) {
    return (
        <main className='pt-32 md:pt-36'>
            <Banner />
            {/* <ProductList/> */}
            <NewArrivals/>
            <TopSelling/>
            <DressStyle/>
            <Reviews/>

            
        </main>
    );
}

export default Homepage;