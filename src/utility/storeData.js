import { toast } from "react-toastify";

export const getStoreData=()=>{
    const storedData=localStorage.getItem("read");
    if(storedData){
        const storage=JSON.parse(storedData);
     return storage;
    }
    else {
        return [];
    }

}

export const addToDB=(id)=>{
    const addData=getStoreData();
    if(addData.includes(id)){
        toast("Book already added")
    }
    else{
        addData.push(id)
        const addBooks=JSON.stringify(addData);
        return localStorage.setItem("read",addBooks);
    }
}