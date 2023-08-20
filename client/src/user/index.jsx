import React from 'react'
import UserNav from './component/UserNav'
import Home from './page/Home'
import Profile from './page/Profile'
import Brands from './page/Brands'
import Categories from './page/Categories'
import Products from './page/Products'
import ProductPage from './page/ProductPage'
import ProductsByBrand from './page/ProductsByBrand'
import ProductsByCategory from './page/ProductsByCategory'
import Cart from './page/Cart'
import { Navigate, Route, Routes } from "react-router-dom";


export default function User() {

    return (

        <>
            <UserNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:_id" element={<ProductPage />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/brands/:BrandName" element={<ProductsByBrand />} />
                <Route path="/category/:CategoryName" element={<ProductsByCategory />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Navigate to='/' replace={true} />} />
            </Routes>

        </>
    )
}