import React from 'react';
import './Tshirt.css'

const Tshirt = ({ addToCartHandel, tshirt }) => {
    const { picture, name, gender, price } = tshirt
    return (
        <div className='tshirt-shadow rounded-lg relative'>
            <img className='p-3' src={picture} alt="" />
            <h3>{name}</h3>
            <p>{gender}</p>
            <p className='mb-14'>${price}</p>
            <button onClick={() => addToCartHandel(tshirt)} className='bg-slate-700 hover:bg-slate-900	p-2 rounded-md text-white absolute inset-x-0 bottom-0 w-3/4 mx-auto mt-5 mb-3'>Add to cart</button>
        </div>
    );
};

export default Tshirt;