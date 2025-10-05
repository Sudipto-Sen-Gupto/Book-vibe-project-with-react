import React from 'react';
import Banner from '../banner/Banner';
import Books from '../Books/Books';
import { Suspense } from 'react';
import { useLoaderData } from 'react-router';
const Home = () => {
    // const data=fetch('books.json').then(res=>res.json())
    const data=useLoaderData()
   
    return (
        <div>
           <Banner></Banner>
           <Suspense fallback={<h1>Data loading...</h1>}>
            <Books data={data}></Books>
            
           </Suspense>
        </div>
    );
};

export default Home;