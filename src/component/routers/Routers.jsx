import { createBrowserRouter } from "react-router";
import Root from "../../pages/root/Root";
import Home from "../../pages/home/Home";
import Navbar from "../navbar/Navbar";
import ListedBook from "../../pages/Listedbook/ListedBook";
import ReadingPage from "../../pages/pagetoread/ReadingPage";
import Landingpage from "../../pages/Land/Landingpage";
 export const router =createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement: <h1>404 not found</h1>,
        children:[
            {
                index:true,
                loader:()=> fetch('books.json').then(res=>res.json()),
                Component:Home
            }
            ,{
                path:'list',
                Component:ListedBook
            },
            {
                path:'read',
                Component:ReadingPage
            },{
                path:'/storybook/:id',
                loader:()=> fetch("books.json").then(res=>res.json()) ,
                Component:Landingpage
            }
        ]
    }
])