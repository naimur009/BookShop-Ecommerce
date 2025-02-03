import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="w-screen bg-gray-100 pb-[63px]">
            <div className="w-screen flex flex-col items-center justify-center bg-gray-100 fixed top-0 z-10">
                <nav className='h-[60px] lg:h-[80px] w-[80%] lg:w-[70%] m-auto flex justify-between'>

                    {/* logo */}
                    <div
                        className='h-full flex items-center hover:cursor-pointer'
                    >
                        <h1
                            className='text-2xl lg:text-4xl font-bold italic'
                        >Book
                            <span
                                className="text-green-600">
                                Shop
                            </span>
                        </h1>
                    </div>


                    {/* right side option */}

                    <div className="h-full flex justify-center items-center lg:hidden">
                        <button
                            className="p-2.5 ms-2 text-sm font-bold text-gray-900 rounded-lg flex justify-center items-center"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <svg className="w-6 h-6 lg:w-5 lg:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                    </div>

                    {/* link */}
                    <div className="hidden lg:flex gap-6 text-xl font-medium items-center">
                        <button
                            className="p-2.5 ms-2 text-sm font-bold text-gray-900 rounded-lg flex justify-center items-center"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <svg className="w-6 h-6 lg:w-5 lg:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                        <a href="#" className="hover:text-green-600"> Home </a>
                        <a href="#" className="hover:text-green-600"> All-Books </a>
                        <a href="#" className="hover:text-green-600"> Cart </a>
                        <a href="#" className="hover:text-green-600"> Sign-in </a>
                    </div>
                </nav>
                <div className="w-screen">
                    {
                        showMenu && <SearchBar />
                    }
                </div>
            </div>

            {/* search bar */}

        </div>
    );
};

export default Navbar;