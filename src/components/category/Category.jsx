

const Category = () => {

    const cate = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <section className="w-[95%] bg-white py-4 lg:p-5 antialiased lg:py-8 mt-3 rounded-lg shadow-md lg2:w-[80%] xl:w-[70%] m-auto ">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mb-4 flex items-center justify-between gap-4 lg:mb-8">
                    <h2 className="text-lg font-semibold">Category</h2>

                    {/* <a href="#" title="" className="flex items-center text-base font-medium text-primary-700 hover:underline text-green-600">
                        See more
                        <svg className="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                    </a> */}
                </div>

                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {
                        cate.map((item) => {
                            return (
                                <a href="#" className="flex items-center rounded-lg border-2 border-gray-200 bg-white px-4 py-2 hover:border-green-600 hover:text-green-600 font-medium">
                                    <svg className="me-2 h-4 w-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"></path>
                                    </svg>
                                    <span className="text-sm">Computer &amp; Office</span>
                                </a>
                            )
                        })
                    }


                </div>
            </div>
        </section>
    );
};

export default Category;