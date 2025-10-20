import { useState } from "react";
import Header from "./Hearder";
import  Items from "./Items";
import Footer from "./Footer";
import  "./App.css";

export default function App (){
    const [items, setItems] = useState ([
        {
            id:1,
            checked: false,
            item: "Milk"    
        },{
            id:2,
            checked: true,
            item: "Eggs"
        },{
            id:3,
            checked: false,
            item: "Bread"
        },{
            id:4,
            checked: true,
            item: "Butter"
        },{
            id:5,
            checked: false,
            item: "Juice"
        }
    ]);
    const [item, setItem] = useState('');
    
    function handleChange(e){
        setItem(e.target.value.trimStart());          
    }

function AddItem (){
     const newItem = {
               id: items.length ? items[items.length -1].id +1 : 1,
               checked: false,
               item:item
          };
          item.length ? `
          ${setItems ([...items, newItem])} 
          ${setItem('')}`
          :
          setItem('');
}   

    return(
        <div className="App">
            <h1 className="head">Gocery List</h1>
            <Header
            item={item}
            handleChange={handleChange}
            AddItem={AddItem}
            />
            <Items   
             items={items}
              />
            <Footer items={items}/>
        </div>

    )
}