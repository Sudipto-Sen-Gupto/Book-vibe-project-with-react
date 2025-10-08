import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToDB } from '../../utility/storeData';


const Landingpage = () => {
    const {id}=useParams();
    const data=useLoaderData();
   const intId=parseInt(id)
   
    const singleBook =data.find(single=>single.bookId===intId)
    console.log(singleBook);
     const {bookName,author,image,rating,tags,category,review,totalPages,publisher,yearOfPublishing}=singleBook;
     
     const handleClick=(id)=>{
        addToDB(id)
     }

console.log(id);
    return (
        <div className='grid grid-cols-1 gap-10 my-6 md:grid-cols-2 items-center'>
           <div className='bg-gray-100 p-6'>
                 <img src={image} className=' h-[564px] mx-auto'  alt="" />
           </div>
           <div className='p-5'>
               <h1 className='text-2xl font-bold'>{bookName}</h1>
               <h1 className='font-semibold my-4'>by:{author}</h1>
               <hr />
               <h1 className='my-2 text-[18px]'>{category}</h1><hr />
               <p className='my-4'><span className='font-semibold'>Review:</span> {review}</p>
               <div className='flex my-4 items-center'>
                    <h1>Tag</h1>
                    {
                        tags.map(tag=><div>
                            <h1 className='font-semibold text-[#23BE0A] mx-5 bg-gray-50 p-2 rounded-xl'>{tag}</h1>
                       </div>)
                    } </div>
                    <hr />
                    <div>
                        <h1 className='my-4 '>Number of pages: <span className='font-bold ml-20'>{totalPages}</span></h1>
                        <h1 className='my-4 '>Publisher: <span className='font-bold ml-20'>{publisher}</span></h1>
                        <h1 className='my-4 '>Publishing: <span className='font-bold ml-20'>{yearOfPublishing}</span></h1>
                        <h1 className='my-4 '>Ratings: <span className='font-bold ml-20'>{rating}</span></h1>
                   <div>
                    
                    <button class="btn" onClick={()=>handleClick(id)}>Read</button>
                    <button class="btn bg-[#50B1C9] text-white">Wishlist</button>
                   </div>
                
               </div>
           </div>
        </div>
    );
};

export default Landingpage;