import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="w-screen pb-[63px] shadow-lg">
            <div className="flex flex-col items-center justify-center bg-white fixed top-0 z-10">
                <nav className='h-[60px] lg:h-[80px] w-[80%] lg:w-[70%] m-auto flex justify-between'>

                    {/* logo */}
                    <div
                        className='h-full flex items-center hover:cursor-pointer'
                    >
                        <NavLink to='/'
                            className='text-2xl lg2:text-4xl font-bold italic'
                        >Book
                            <span
                                className="text-green-600">
                                Shop
                            </span>
                        </NavLink>
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
                    <div className="hidden lg:flex gap-6 lg:text-base lg2:text-xl font-medium items-center">
                        <button
                            className="p-2.5 ms-2 text-sm font-bold text-gray-900 rounded-lg flex justify-center items-center"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <svg className="w-6 h-6 lg:w-5 lg:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                        <NavLink to="/" className="hover:text-green-600"> Home </NavLink>
                        <NavLink to="/books" className="hover:text-green-600"> All-Books </NavLink>
                        <NavLink to="/cart" className="hover:text-green-600"> Cart </NavLink>
                        <NavLink to="/signin" className="hover:text-green-600"> Sign-in </NavLink>
                    </div>
                </nav>
                <div className="w-screen">
                    {
                        showMenu && <SearchBar />
                    }
                </div>
            </div>

        </div>
    );
};

export default Navbar;