
import { useSelector } from 'react-redux';

const AllBooks = ({ data }) => {

    const allBooks = useSelector(state => state.book?.book?.data);

    const isPending = useSelector(state => state.book.book.pending);

    let book = [];
    if (!data) {
        book = allBooks;
    }
    else {
        allBooks.forEach((item) => {
            if (data.includes(item.author) || data.includes(item.category)) {
                book.push(item)
            }
        })
    }

    return (
        <div className='lg2:flex lg2:flex-shrink-0'>
            {
                !isPending &&
                <section className="bg-white py-2 lg2:p-5 antialiased lg:py-8 rounded-lg lg2:mt-7 shadow-md">
                    <div className="mx-auto px-4 2xl:px-0">
                        <div className="mb-4 flex items-center justify-between gap-1 lg:mb-4">
                            <h2 className="text-lg font-semibold">Books</h2>
                        </div>

                        <div className="grid gap-6 md:gap-4 2xl:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg2:grid-cols-3 2xl:grid-cols-4">

                            {
                                book?.map((book) => {
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
            }
            {
                isPending &&
                <div className="w-full flex items-center justify-center mt-[40%] mb-[40%]">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-600"></div>
                </div>
            }
        </div>
    );
};

export default AllBooks;