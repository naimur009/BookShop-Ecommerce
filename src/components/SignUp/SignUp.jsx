import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { signUp, signInWithGoogle } from "../../redux-features/auth";
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';


const SignUp = () => {

    useEffect(() => {
        document.title = "Sign Up - Bookstore";
    }, [])

    const isPending = useSelector(state => state.auth.auth.pending);
    const error = useSelector(state => state.auth.auth.error);

    useEffect(() => {
        if (popUp && error) {
            toast.error(error?.code);
        }
    }, [error])


    const [errorMessageEmail, setErrorMessageEmail] = useState();
    const [errorMessagePassword, setErrorMessagePassword] = useState();

    useEffect(() => {
        if (error) {
            if (error?.code === 'auth/email-already-in-use') {
                setErrorMessageEmail("Email elready in use.")
            }
            if (error?.code === 'auth/invalid-email') {
                setErrorMessageEmail("Invalid Email");
            }
            if (error?.code === 'auth/weak-password') {
                setErrorMessagePassword("Password should be at least 6 characters")
            }
        }
    }, [error])



    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const dispatch = useDispatch();
    const [popUp, setPopUp] = useState(false);


    const handleSignUpWithGoogle = () => {
        setPopUp(true);
        dispatch(signInWithGoogle());
    }

    const handleSubmit = (e) => {
        setPopUp(false);
        setErrorMessagePassword();
        setErrorMessageEmail();
        e.preventDefault();
        if (password !== confirmPassword) {
            setPassword("");
            setConfirmPassword("");
            setErrorMessagePassword("Password did not matched");
        }
        else {
            dispatch(signUp({ email, password }));
        }
    }

    return (
        <div className="w-[95%] m-auto flex items-center justify-center mt-3 lg:mt-8">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Create your Free Account</h2>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 mb-4"
                    onClick={handleSignUpWithGoogle}
                >
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="h-5 w-5 mr-2" />
                    Sign up with Google
                </button>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or</span>
                        </div>
                    </div>
                </div>
                <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                            placeholder="name@company.com"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        {errorMessageEmail && (
                            <p className="text-sm text-red-600">
                                {errorMessageEmail}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                            placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            value={confirmPassword}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                            placeholder="Confirm Password"
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                        {errorMessagePassword && (
                            <p className="text-sm text-red-600">
                                {errorMessagePassword}
                            </p>
                        )}
                    </div>

                    <div className="text-sm text-gray-600">
                        <p>By signing up, you are creating a BookShop account, and you agree to BookShop's <a href="#" className="font-medium text-green-600 hover:text-green-500">Terms of Use</a> and <a href="#" className="font-medium text-green-600 hover:text-green-500">Privacy Policy</a>.</p>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                            {
                                isPending ?
                                    <span className="loading loading-spinner loading-md"></span>
                                    : "Create an account"
                            }

                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <NavLink to="/signin" className="font-medium text-green-600 hover:text-green-500">
                            Sign in here
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;