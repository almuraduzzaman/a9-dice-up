import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
            <Toaster/>
        </div>
    );
};

export default Home;