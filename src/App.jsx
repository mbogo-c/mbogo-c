import { useState,useEffect } from "react";
import Form from "./Form";
import List from "./List";

export default function App(){
    const [req,setReq] = useState("users")
    const [items,setItem] = useState([])
    const API_URL = "https://jsonplaceholder.typicode.com/"

    useEffect(()=>{
        const fetchData = async() =>{
            try {
        fetch(`${API_URL}${req}`)
        const response = await fetch(`${API_URL}${req}`);
        const data = await response.json();
        setItem(data)}
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    fetchData()}
    ,[req])

    return(
        <div>
            <Form req={req} setReq={setReq} />
            <List items={items} />
        </div>
    )
}