import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Banner from '../components/layout/Homepage/Banner';
import DressStyle from '../components/layout/Homepage/DressStyle';
import NewArrivals from '../components/layout/Homepage/NewArrivals';
import Reviews from '../components/layout/Reviews';
import TopSelling from '../components/layout/Homepage/TopSelling';
import ValidateForm from './ValidateForm';


function Homepage(props) {
    return (
        // pt-32 md:pt-36
        <main className=''>
            <Header />
            <Banner />
            <NewArrivals />
            <TopSelling />
            <DressStyle />
            <Reviews />
            <Footer />
        </main>
    );
}

export default Homepage;