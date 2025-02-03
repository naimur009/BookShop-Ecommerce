import React from 'react';

const PopularWriter = () => {

    const writer = [
        {
            name: "J. K. Rowling",
            image: "https://149690992.v2.pressablecdn.com/wp-content/uploads/2024/09/j-k-rowlings-early-life.jpeg",
        },

        {
            name: "Dan Brown",
            image: "https://play-lh.googleusercontent.com/_-PTjFD-mdkPW5XXOAMLetTSlw58BX1tYVYLhxXB_besp_MRBAYAIOpx7s3q5QKDYg=w3840-h2160-rw",
        },

        {
            name: "Stephen King",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Stephen_King_at_the_2024_Toronto_International_Film_Festival_2_%28cropped%29.jpg",
        },

        {
            name: "George R. R. Martin",
            image: "https://i0.wp.com/booksofbrilliance.com/wp-content/uploads/2022/05/George-R-R-MAritn.jpg?resize=512%2C687&ssl=1",
        },
        {
            name: "Leo Tolstoy",
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkRdfRvcojBnbsUcySv-9eQd93wIVPdkrSBrcV-Pp-mdwuyl9A",
        },
        {
            name: "Stan Lee",
            image: "https://media.wired.com/photos/5be9d68a5d7c6a7b81d79e25/16:9/w_2400,h_1350,c_limit/StanLee-610719480.jpg",
        },
        {
            name: "J. K. Rowling",
            image: "https://149690992.v2.pressablecdn.com/wp-content/uploads/2024/09/j-k-rowlings-early-life.jpeg",
        },

        {
            name: "Dan Brown",
            image: "https://play-lh.googleusercontent.com/_-PTjFD-mdkPW5XXOAMLetTSlw58BX1tYVYLhxXB_besp_MRBAYAIOpx7s3q5QKDYg=w3840-h2160-rw",
        },

        {
            name: "Stephen King",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Stephen_King_at_the_2024_Toronto_International_Film_Festival_2_%28cropped%29.jpg",
        },

        {
            name: "George R. R. Martin",
            image: "https://i0.wp.com/booksofbrilliance.com/wp-content/uploads/2022/05/George-R-R-MAritn.jpg?resize=512%2C687&ssl=1",
        },
        {
            name: "Leo Tolstoy",
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkRdfRvcojBnbsUcySv-9eQd93wIVPdkrSBrcV-Pp-mdwuyl9A",
        },
        {
            name: "Stan Lee",
            image: "https://media.wired.com/photos/5be9d68a5d7c6a7b81d79e25/16:9/w_2400,h_1350,c_limit/StanLee-610719480.jpg",
        },


    ]


    return (
        <div>
            <section className="bg-gray-50 py-4 lg:p-5 antialiased lg:py-8 rounded-lg mt-3 lg:w-[80%] xl:w-[70%] m-auto">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mb-4 flex items-center justify-between gap-4 lg:mb-8">
                        <h2 className="text-xl font-semibold sm:text-2xl">Popular Writer</h2>

                        <a href="#" title="" className="flex items-center text-base font-medium text-primary-700 hover:underline text-green-600">
                            See more
                            <svg className="ms-1 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                            </svg>
                        </a>
                    </div>

                    <div className="grid gap-4 grid-cols-3 md:grid-cols-5 xl:grid-cols-6">

                        {
                            writer.map((writer) => {
                                return (
                                    <a href='#' className='flex flex-col justify-center items-center gap-2 p-2 w-28 h-36 rounded-lg bg-white hover:border-green-600 hover:border-2 hover:cursor-pointer hover:text-green-600'>
                                        <div className='h-24 w-24 rounded-full'>
                                            <img className='h-[100%] w-[100%] rounded-full object-cover' src={writer.image} alt={writer.name} />
                                        </div>
                                        <p className='text-sm text-center font-medium'>{writer.name}</p>
                                    </a>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default PopularWriter;