import React from 'react';
import {  Navigate, Route, Routes } from 'react-router-dom';
import Home from '../container/home/Home';

const DashboardRouters = () => {
    return (
        <>
            <Routes>
                <Route path='/*' element={<Home/>} />
                {/* <Route path='/navBar' element={<NavBar /> /> */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default DashboardRouters;