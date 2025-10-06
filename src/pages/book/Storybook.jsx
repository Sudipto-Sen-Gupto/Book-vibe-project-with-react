import React from 'react';
import { Link } from 'react-router';
import { Star } from 'lucide-react';

const Storybook = ({datum}) => {
    
    console.log(datum);
  const {bookId,bookName,author,image,rating,tags,category}=datum
    return (
        <Link to={`storybook/${bookId}`}>
        <div className='lg:w-[374px] h-[450] shadow-lg p-5 rounded-2xl '>
            <div className='bg-gray-100 p-6 rounded-2xl'>
                   <img src={image} className='w-[134px] h-[164px] mx-auto' alt="" />
            </div>
         <div className='flex gap-10 my-4'>
            {
                tags.map(tag=>
                         <>
                         <h1 className='text-[#23BE0A] font-semibold bg-gray-100  rounded-xl p-2'>{tag}</h1>
           </>
                )
            }
           
         </div>
           <div>
            <h1 className='font-bold text-xl' >{bookName}</h1>
            <h1>by:{author}</h1>
           </div>
           <div className='flex justify-between my-4 border-t-1 border-dashed'><p>{category}</p>
           <p className='flex items-center gap-4'> <span>{rating}</span> <Star /> </p>
           </div>
        </div>
        </Link>
    );
};

export default Storybook;