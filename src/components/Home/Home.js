import React, { useState } from 'react';
import useTshirt from '../../hooks/UserTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    // custom hook from useTshirt
    const [tshirts, setTshirts] = useTshirt()

    const [cart, setCart] = useState([])

    // event handel
    const addToCartHandel = (selectedItem) => {
        // Remove duplicate item
        const exists = cart.find(tshirt => tshirt._id === selectedItem._id)
        if (!exists) {
            const newCart = [...cart, selectedItem]
            setCart(newCart)
        }
        else {
            alert('Ha ha ha...')
        }


    }

    const handelRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id)
        setCart(rest)
    }

    return (
        <div className='mt-4 grid grid-cols-3 gap-2 '>
            <div className='grid grid-cols-4 gap-2 col-span-2'>

                {
                    tshirts.map(tshirt => <Tshirt
                        tshirt={tshirt}
                        key={tshirt._id}
                        addToCartHandel={addToCartHandel}
                    ></Tshirt>)
                }
            </div>
            <div className=' '>

                <Cart
                    cart={cart}
                    handelRemoveFromCart={handelRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;