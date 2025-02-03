import React from 'react';

const SearchBar = () => {
    return (
        <div>
            <form className="flex justify-center w-[90%] max-w-[600px] m-auto lg:mt-3">
                <div className="w-[90%]">
                    <input type="text" className="bg-gray-50 border border-green-600 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full ps-10 p-2.5 py-3 lg:py-3.5 active:border-green-600" placeholder="Search books..." required />
                </div>

                <button type="submit" className="p-2.5 w-[60px] tablet:w-[100px] ms-2 text-sm font-medium text-white bg-green-600 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 flex justify-center items-center">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;