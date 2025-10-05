import React from 'react';
import Storybook from '../book/Storybook';

const Books = ({data}) => {
    
    return (
        <div className=' p-4 grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
              data.map(datum=><Storybook key={datum.bookId} datum={datum}></Storybook>)
            }
        </div>
    );
};

export default Books;