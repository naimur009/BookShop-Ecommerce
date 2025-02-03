import React from 'react';
import Hero from '../components/Hero/Hero';
import Category from '../components/category/Category';
import PopularWriter from '../components/writer/PopularWriter';
import { Book } from 'lucide-react';
import BookList from '../components/Booklist/BookList';

const Home = () => {
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