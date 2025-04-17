import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ValidateForm from '../pages/ValidateForm';
import Homepage from '../pages/Homepage';
import Cart from '../pages/Cart';
import ProductDetail from '../pages/ProductDetail';
import Category from '../pages/Category';

function AppRoutes(props) {
    return (
        <>
            <Routes> 
                <Route path='/' element={<Homepage />} />
                <Route path='/login' element={<ValidateForm />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/product' element={<ProductDetail />} />
                <Route path='/category' element={<Category />} />
            </Routes>
        </>
    );
}

export default AppRoutes;