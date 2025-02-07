import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const BookList = () => {
    const book = useSelector(state => state.book?.book?.data);

    return (
        <div className="flex flex-shrink-0 ">
            <section className="w-[95%] shadow-md bg-white py-4 lg:p-5 antialiased lg:py-8 rounded-lg mt-3 lg2:w-[80%] xl:w-[70%] m-auto">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mb-4 flex items-center justify-between gap-4 lg:mb-8">
                        <h2 className="text-lg font-semibold ">Featured Books</h2>

                        <NavLink to="/books" title="" className="flex items-center text-base font-medium text-primary-700 hover:underline text-green-600">
                            See more
                            <svg className="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                            </svg>
                        </NavLink>
                    </div>

                    <div className="grid gap-6 2xl:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">

                        {
                            book?.slice(0, 20).map((book, index) => {
                                return (
                                    <div key={book.id} className=' bg-white flex flex-col justify-center items-center rounded-lg hover:cursor-pointer hover:bg-gray-100 border-[1px] border-gray-400 p-2 md:p-4 hover:border-green-600'>
                                        {/* Image */}
                                        <img className='h-auto max-h-[280px]' src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1534070883i/6411961.jpg" alt="" />
                                        {/* book name */}
                                        <div className='flex flex-col items-center mt-1 mb-0'>
                                            <p className='text-sm font-medium text-center'>{book.tittle}</p>
                                            <p className='text-xs text-center'>{book.author}</p>
                                            <p>${book.price}</p>
                                        </div>
                                        <div className='w-full flex justify-center'>
                                            <button className='w-[100%] bg-green-600 text-white font-semibold py-1.5 rounded-lg hover:bg-white border-2 border-green-600 hover:text-green-600 text-xs md:text-sm'>
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

export default BookList;