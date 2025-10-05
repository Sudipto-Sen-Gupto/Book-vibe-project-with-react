import React from 'react';
import book from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='p-10 my-5 md:flex justify-between items-center bg-gray-100 rounded-3xl'>
            <div className='p-2'>
                <h1 className='text-5xl font-bold my-10'>Books to freshen up <br />your bookshelf</h1>
                <button class="btn bg-[#23BE0A] text-white">View the list</button>
            </div>
            <img src={book} alt="" />
        </div>
    );
};

export default Banner;