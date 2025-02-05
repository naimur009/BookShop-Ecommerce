import React, { useEffect } from 'react';
import { useState } from 'react';
import Filter from '../components/Filter/Filter';
import AllBooks from '../components/All-Books/AllBooks';

const AllBookList = () => {

    useEffect(() => {
        document.title = "All Books - Bookstore";
    }, [])

    const [showFilter, setShowFilter] = useState(false);

    return (
        <div className='w-screen'>
            <div className='w-[95%] sm:w-[85%] lg:w-[90%] m-auto flex flex-col lg2:flex-row flex-shrink-0 justify-center gap-3'>
                <div className='w-full m-auto mt-2 lg:mt-6 lg2:hidden '>

                    <div className='flex justify-between items-center p-2 bg-white rounded-lg shadow-md'>
                        <h3 className='font-semibold'>Filters</h3>
                        <button
                            onClick={() => setShowFilter(!showFilter)}
                        >
                            <svg className='h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                        </button>
                    </div>

                    {
                        showFilter && <Filter />
                    }

                </div>

                <div className='hidden lg2:flex lg2:flex-shrink-0'>
                    <Filter />
                </div>
                <AllBooks />
            </div>
        </div >
    );
};

export default AllBookList;