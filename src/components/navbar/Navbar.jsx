import { useState } from "react";
import { NavLink } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../redux-features/book";
import { fetchCartData } from '../../redux-features/user';
import { useSelector } from "react-redux";



const Navbar = () => {

    const [user, setUser] = useState(localStorage.getItem("userId"));


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData())
        if (user) {
            dispatch(fetchCartData())
        }
    }, [])


    return (
        <div className="w-screen lg:pb-[62px] shadow-lg ">
            <div className="flex flex-col items-center justify-center bg-white lg:fixed top-0 z-10 border-b-2 border-gray-300">
                <nav className='h-[50px] lg:h-[70px] w-[80%] lg:w-[70%] m-auto flex justify-center lg:justify-between items-center gap-4'>

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

                    {/* link */}
                    <div className="hidden lg:flex gap-6 lg:text-base font-medium items-center">
                        <NavLink to="/" className={({ isActive }) => `hover:text-green-600 ${isActive ? "text-green-600" : ""}`}> Home </NavLink>
                        <NavLink to="/books" className={({ isActive }) => `hover:text-green-600 ${isActive ? "text-green-600" : ""}`}> All-Books </NavLink>
                        <NavLink to="/cart" className={({ isActive }) => `hover:text-green-600 ${isActive ? "text-green-600" : ""}`}> Cart </NavLink>
                        {
                            user ?
                                <NavLink to="/profile" className={({ isActive }) => `hover:text-green-600 ${isActive ? "text-green-600" : ""}`}> Account </NavLink>

                                :
                                <NavLink to="/signin" className={({ isActive }) => `hover:text-green-600 ${isActive ? "text-green-600" : ""}`}> Sign-in </NavLink>
                        }
                    </div>
                </nav>
                <div className="w-screen">
                </div>
            </div>

        </div>
    );
};

export default Navbar;