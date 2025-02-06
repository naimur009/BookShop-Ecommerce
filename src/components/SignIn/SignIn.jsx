import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { signIn, signInWithGoogle } from '../../redux-features/auth';
import { useDispatch, useSelector } from 'react-redux';

const SignIn = () => {

    useEffect(() => {
        document.title = "Sign In - Bookstore";
    }, [])

    const isPending = useSelector(state => state.auth.auth.pending);
    const logInError = useSelector(state => state.auth.auth.error)

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch()

    const handleSignUpWithGoogle = () => {
        dispatch(signInWithGoogle());
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        dispatch(signIn({ email, password }));
    }

    return (
        <div className="flex items-center justify-center w-[95%] m-auto mb-10 mt-3 lg:mt-0 lg:pt-10" style={{ minHeight: "calc(100vh - 240px)" }}>
            {
                !isPending &&
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        onClick={handleSignUpWithGoogle}
                    >
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="h-5 w-5 mr-2" />
                        Sign in with Google
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
                    <form className="mt-6 space-y-6" onSubmit={handleSignIn}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                                placeholder="Enter your email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                                placeholder="Password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            {logInError && (
                                <p className="text-sm text-red-600 pt-2">
                                    Invalid-credential
                                </p>
                            )}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    className="h-4 w-4  border-gray-300 rounded"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <NavLink to="/signup" className="font-medium text-green-600 hover:underlined">
                                Sign up
                            </NavLink>

                        </p>
                    </div>
                </div>
            }
            {
                isPending &&
                <div className="w-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-600"></div>
                </div>
            }
        </div>
    );
};

export default SignIn;