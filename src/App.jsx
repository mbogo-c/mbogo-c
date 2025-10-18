import Form from "./Form";
import List from "./List";

import { useState, useEffect } from "react";
export  default function App() {
    const [reqType, setReqType] = useState("users");
    const [data, setData] = useState([]);

    const API_URL = "https://jsonplaceholder.typicode.com/";



    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch(`${API_URL}${reqType}`)
                if(!response.ok){
                    throw new Error(`error status code: ${response.status}`)
                }{
                    const result = await response.json();
                    setData(result);
                    console.log("data fetched:", result);
                    console.log("reqType:", reqType);
                }
            }
        catch(error){
            console.error("error fetching data:", error)
        }}
        fetchData();
    }, [reqType]);
    return (
        <div className="App">
            <title>{reqType}</title>
           <Form reqType={reqType} setReqType={setReqType} />
           <List data={data} />
        </div>
    );
}
