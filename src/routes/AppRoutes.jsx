import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ValidateForm from '../pages/ValidateForm';
import Homepage from '../pages/Homepage';
import Cart from '../pages/Cart';
import ProductDetail from '../pages/ProductDetail';
import Category from '../pages/Category';
import Shirts from '../components/layout/Category/Shirts';
import T_Shirts from '../components/layout/Category/T_Shirts';
import Jeans from '../components/layout/Category/Jeans';
import Polos from '../components/layout/Category/Polos';

function AppRoutes(props) {
    return (
        <>
            <Routes>
                {/* Main Pages */}
                <Route path='/' element={<Homepage />} />
                <Route path='login' element={<ValidateForm />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/category' element={<Category />} /> {/* Product List */}
                <Route path='/category/:slug' element={<ProductDetail />} /> {/* Product Detail Info */}

                {/* Filter Product */}
                <Route path='/category/shirts' element={<Shirts />} />
                <Route path='/category/t-shirts' element={<T_Shirts />} />
                <Route path='/category/jeans' element={<Jeans />} />
                <Route path='/category/polos' element={<Polos />} />


            </Routes>
        </>
    );
}

export default AppRoutes;