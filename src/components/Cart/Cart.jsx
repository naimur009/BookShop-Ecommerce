import React from 'react';

const Cart = () => {
    const cartItems = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    return (
        <div className='mt-7 flex flex-col w-[95%] lg2:w-[70%] items-center lg2:items-start m-auto gap-5 lg2:flex-row'>
            <div className='w-full lg:w-2/3 bg-white rounded-xl shadow-lg p-6 shrink-0'>
                <h1 className='font-bold text-lg  lg:text-2xl text-center mb-6'>Your Cart Items</h1>
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index} className='flex justify-between gap-8 items-center mb-4 p-4 border-b'>
                            <div className='flex items-center gap-4'>
                                <img className='h-20 lg:h-32' src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1534070883i/6411961.jpg" alt="Book" />
                                <div>
                                    <div className='text-xs lg:text-sm font-semibold'>The Lost Symbol The Lost Symbol The Lost Symbol The Lost Symbol </div>
                                    <div className='text-gray-600 text-xs'>Dan Brown</div>
                                    <div className='flex items-center mt-2'>
                                        <button className='text-gray-600 border rounded p-1'>
                                            <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h352c17.7 0 32 14.3 32 32z" /></svg>
                                        </button>
                                        <span className='mx-2'>1</span>
                                        <button className='text-gray-600 border rounded p-1'>
                                            <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='text-base font-semibold'>$20</div>

                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full lg2:w-[fit-content] bg-white rounded-xl shadow-lg p-6 h-[fit-content] flex shrink-0'>
                <div>
                    <h2 className='text-base font-bold mb-4'>Billing</h2>
                    <div className='flex justify-between mb-4'>
                        <span className='text-gray-600'>Subtotal</span>
                        <span className='font-semibold'>$80</span>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <span className='text-gray-600'>Delivery charges</span>
                        <span className='font-semibold'>Free</span>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <span className='text-gray-600'>Total</span>
                        <span className='font-semibold'>$80</span>
                    </div>
                    <input type="text" placeholder='Enter promo code' className='border border-gray-300 p-2 rounded w-full mb-4' />
                    <h2 className='text-base font-bold mb-4'>Shipping Address</h2>
                    <div className='flex flex-col gap-2 mb-4 text-base'>
                        <input type="text" placeholder='Full Name' className='border border-gray-300 p-2 rounded' />
                        <input type="text" placeholder='Address' className='border border-gray-300 p-2 rounded' />
                        <input type="text" placeholder='City' className='border border-gray-300 p-2 rounded' />
                        <input type="text" placeholder='Mobile Number' className='border border-gray-300 p-2 rounded' />
                        <input type="text" placeholder='Postal Code' className='border border-gray-300 p-2 rounded' />
                    </div>
                    <button className='w-full bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700'>
                        Proceed to checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;