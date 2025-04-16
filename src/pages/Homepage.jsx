import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Banner from '../components/layout/Banner';
import DressStyle from '../components/layout/DressStyle';
import NewArrivals from '../components/layout/NewArrivals';
import Reviews from '../components/layout/Reviews';
import TopSelling from '../components/layout/TopSelling';


function Homepage(props) {
    return (
        // pt-32 md:pt-36
        <main className=''>
            <Header/>
            <Banner />
            <NewArrivals/>
            <TopSelling/>
            <DressStyle/>
            <Reviews/>
            <Footer/>
        </main>
    );
}

export default Homepage;