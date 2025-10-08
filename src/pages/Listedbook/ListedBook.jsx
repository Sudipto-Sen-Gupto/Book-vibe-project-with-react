import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreData } from '../../utility/storeData';
import Storybook from '../book/Storybook';
const ListedBook = () => {
    const data=useLoaderData();
     const [dat,setDat]=useState([])
     const[sort,setSort]=useState();

    useEffect(()=>{
          const loadData=getStoreData();
        //   console.log(loadData);
       
          const intData=loadData.map(int=>parseInt(int))
        //   console.log(intData);
          const newData=data.filter(book=>intData.includes(book.bookId))
          setDat(newData);
    },[])
    const handleClick=(type)=>{
        setSort(type)
         if(type==="pages"){
            const sortedData=[...dat].sort((a,b)=>a.totalPages-b.totalPages);
            console.log(sortedData);
         }
         if(type==="rating"){
            const sortRate=[...dat].sort((a,b)=>a.rating-b.rating)
            setDat(sortRate);
         }
    }
    return (
        <div>
            <div>
                <details class="dropdown">
  <summary class="btn m-1">Sort By:{sort&&sort}</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>handleClick("page")}><a>Page</a></li>
    <li onClick={()=>handleClick("rating")}><a>Rating</a></li>
  </ul>
</details>
            </div>
            
           <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <div>
        {
              dat.map(d=><Storybook datum={d} key={d.bookId}></Storybook>)
        }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBook;