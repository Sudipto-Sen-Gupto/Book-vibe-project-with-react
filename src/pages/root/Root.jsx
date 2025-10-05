import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
import { Outlet } from 'react-router';
const Root = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Navbar></Navbar>
             <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;