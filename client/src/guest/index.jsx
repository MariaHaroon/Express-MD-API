import React from 'react'
import GuestNav from './component/GuestNav'
import {
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Home from './page/Home';
import Login from './page/Login'


export default function guest() {
    return (
        <>
            <GuestNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to='/login' replace={true} />} />
            </Routes>
        </>
    )
}