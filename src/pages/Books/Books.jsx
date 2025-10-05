import React, { useEffect, useState } from 'react';

const Books = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
          fetch('books.json').then(res=>res.json()).then(data=>setData(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Books;