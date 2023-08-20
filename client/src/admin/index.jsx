import React from 'react'
import Sidebar from './component/Sidebar'
import Home from './page/Home'
import Category from './page/Category'
import Products from './page/Products'
import { Route, Routes } from "react-router-dom";

export default function Admin() {
    return (
        <div className="row m-0 p-0">
            <div className="col-md-3 m-0 p-0 bg-dark" style={{ height: '100vh' }}>
                <Sidebar />
            </div>
            <div className="col-md-9">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </div>
    )
}