import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='mt-16 mx-auto'>
            <h1 className='text-4xl'>Welcome to tshirt mania!!</h1>
            <nav className='flex items-center justify-center my-6 text-xl'>
                <CustomLink className='mr-8' to='/home'>Home</CustomLink>
                <CustomLink to='/orderreview'>Order Review</CustomLink>
                <CustomLink className='ml-8' to='/grandpa'>Grand pa</CustomLink>
            </nav>
            <hr />
        </div>
    );
};

export default Header;