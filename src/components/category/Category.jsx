

const Category = () => {

    return (
        <section className="bg-gray-50 py-4 lg:p-5 antialiased lg:py-8 mt-3 rounded-lg lg:w-[80%] xl:w-[70%] m-auto ">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mb-4 flex items-center justify-between gap-4 lg:mb-8">
                    <h2 className="text-xl font-semibold sm:text-2xl">Category</h2>

                    <a href="#" title="" className="flex items-center text-base font-medium text-primary-700 hover:underline text-green-600">
                        See more 
                        <svg className="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                    </a>
                </div>

                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    <a href="#" className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-green-600">
                        <svg className="me-2 h-4 w-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                        </svg>
                        <span className="text-sm font-medium">Computer &amp; Office</span>
                    </a>
                    <a href="#" className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-green-600">
                        <svg className="me-2 h-4 w-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z"></path>
                        </svg>
                        <span className="text-sm font-medium">Collectibles &amp; Toys</span>
                    </a>
                    <a href="#" className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-green-600">
                        <svg className="me-2 h-4 w-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"></path>
                        </svg>
                        <span className="text-sm font-medium">Books</span>
                    </a>
                    <a href="#" className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-green-600">
                        <svg className="me-2 h-4 w-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"></path>
                        </svg>
                        <span className="text-sm font-medium">Fashion/Clothes</span>
                    </a>
                    <a href="#" className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-green-600">
                        <svg className="me-2 h-4 w-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                        <span className="text-sm font-medium">Sports &amp; Outdoors</span>
                    </a>
                    <a href="#" className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-green-600">
                        <svg className="me-2 h-4 w-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"></path>
                        </svg>
                        <span className="text-sm font-medium">Painting &amp; Hobby</span>
                    </a>
                    <a href="#" className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-green-600">
                        <svg className="me-2 h-4 w-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"></path>
                        </svg>
                        <span className="text-sm font-medium">Electronics</span>
                    </a>
                    
                    
                </div>
            </div>
        </section>
    );
};

export default Category;