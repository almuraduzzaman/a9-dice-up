import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='grid justify-items-center md:grid-cols-3 gap-5 pt-12 pb-10 md:px-[300px] bg-slate-100'>
            <h1 className='text-3xl font-extrabold '><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-purple-500' : 'text-black'}>DiceUp</NavLink></h1>
            <div className='flex gap-5 font-medium items-center'>
                <NavLink to={'/statistics'} className={({ isActive }) => isActive ? 'text-purple-500' : 'text-[#757575]'}><button>Statistics</button></NavLink>
                <NavLink to={'/applied_jobs'} className={({ isActive }) => isActive ? 'text-purple-500' : 'text-[#757575]'}><button>Applied Jobs</button></NavLink>
                <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'text-purple-500' : 'text-[#757575]'}><button>Blog</button></NavLink>
            </div>
            <div>
                <button className=' flex ml-auto px-5 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-extrabold rounded-md'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;