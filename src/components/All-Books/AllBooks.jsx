import React from 'react';

const AllBooks = () => {
    let book = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]
    return (
        <div className='w-[95%] m-auto'>
            <section className="bg-white py-2 lg:p-5 antialiased lg:py-8 rounded-lg lg:mt-7">
                <div className="mx-auto max-w-screen px-4 2xl:px-0">
                    <div className="mb-4 flex items-center justify-between gap-1 lg:mb-8">
                        <h2 className="text-xl font-semibold sm:text-2xl">Books</h2>
                    </div>

                    <div className="grid gap-6 2xl:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">

                        {
                            book.map((book) => {
                                return (
                                    <div key={book} className=' bg-white flex flex-col justify-center items-center rounded-lg hover:cursor-pointer hover:bg-gray-100 border-[1px] border-gray-400 py-4 px-4 hover:border-green-600'>
                                        {/* Image */}
                                        <img className='h-[200px] lg:h-[250px]' src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1534070883i/6411961.jpg" alt="" />
                                        {/* book name */}
                                        <div className='flex flex-col items-center gap-1 mt-1 mb-1'>
                                            <p className='text-sm font-medium text-center'>The Lost Symbol</p>
                                            <p className='text-xs text-center'>Dan Brown</p>
                                            <p>$20</p>
                                        </div>
                                        <div className='w-full flex justify-center'>
                                            <button className='w-[90%] bg-green-600 text-white font-bold py-1.5 rounded-lg hover:bg-white border-2 border-green-600 hover:text-green-600'>
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllBooks;