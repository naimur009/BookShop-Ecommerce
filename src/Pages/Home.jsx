import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Category from '../components/category/Category';
import PopularWriter from '../components/writer/PopularWriter';
import BookList from '../components/Booklist/BookList';

const Home = () => {

    useEffect(() => {
        document.title = "Home - Bookstore";
    }, [])

    return (

        <>
            <Hero />
            <Category />
            <PopularWriter />
            <BookList />
        </>
    );
};

export default Home;