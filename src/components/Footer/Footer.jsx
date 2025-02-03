import React from 'react';

const Footer = () => {
    return (
        <div>
            

            <footer className="bg-white rounded-lg shadow m-4 mb-16 flex flex-col lg:mb-3 justify-center items-center">
                <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-between gap-2 lg:flex-row">
                    <span className="text-sm sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline text-green-600">BookStore™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 hover:text-green-600">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 hover:text-green-600">All Books</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 hover:text-green-600">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline hover:text-green-600">Contact</a>
                        </li>
                    </ul>
                </div>
                <p className='text-sm pb-3'>Developed By <a className='font-bold hover:text-green-600 hover:cursor-pointer'>
                    Naimur Rahman</a></p>
            </footer>

            <div className="h-[60px] w-screen bg-gray-100 fixed bottom-0 lg:hidden flex justify-evenly items-center">

                {/* Home */}
                <a href='#' className='flex flex-col items-center'>
                    <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill='' d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                    </svg>
                    <p className='text-sm'>Home</p>
                </a>

                {/* All-Books */}
                <a href='#' className='flex flex-col items-center'>
                    <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                    </svg>
                    <p className='text-sm'>Books</p>
                </a>

                {/* wishlist */}
                <a href='#' className='flex flex-col items-center'>
                    <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill='red' d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                    <p className='text-sm'>WishList</p>
                </a>


                {/* Cart */}
                <a href='#' className='flex flex-col items-center'>
                    <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                    <p className='text-sm'>Cart</p>
                </a>


                {/* Profile */}
                <a href='#' className='flex flex-col items-center'>
                    <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                    </svg>
                    <p className='text-sm'>Account</p>
                </a>
            </div>

        </div>
    );
};

export default Footer;