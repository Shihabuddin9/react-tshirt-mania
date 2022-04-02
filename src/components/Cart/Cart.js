import React from 'react';
import './Cart.css'

const Cart = ({ cart, handelRemoveFromCart }) => {
    // Conditional Rendering option
    // 1. element
    // tarnary operator condition? true : false
    // true condition
    // false
    let command;
    if (cart.length === 0) {
        command = <p>Please Add at least one Item</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more...</p>
    }
    else {
        command = <p>Thinks for adding item</p>
    }

    return (
        <div>
            <h1 className='text-xl'>TOTAL ORDER: {cart.length}</h1>
            <hr />
            <p className='my-6'>{command}</p>
            {
                cart.map(tshirt => <p className='my-5 text-xl cart flex items-start	 justify-center	'>

                    <img src={tshirt.picture} alt="" />

                    <p className='mx-2'>{tshirt.name}</p>

                    <button onClick={() => handelRemoveFromCart(tshirt)} className='ml-2 bg-red-600 hover:bg-red-800 px-2 rounded-sm text-white'>X</button>

                </p>)
            }
            {/* false condition */}
            {cart.length === 0 || <div className='my-6 font-serif text-red-700 font-extrabold'><p> You are Buying</p></div>}

            {/* true condition */}
            {cart.length === 3 && <div className='my-6 font-serif text-red-700 font-extrabold'>
                <p>thanks you for 3 add</p>
            </div>}

            {/* tarnary operator condition? true : false */}
            {cart.length !== 4 ? <p>Keep adding</p> : <button className='bg-red-700 text-white p-2 rounded-sm'>Remove All</button>}

        </div>
    );
};

export default Cart;