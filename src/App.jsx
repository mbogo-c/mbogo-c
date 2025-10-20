import { useEffect, useState } from "react";
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
    const [search, setSearch] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    
    function handleChange(e){
        setItem(e.target.value.trimStart()); 
        

    }
function AddItem (){
     const newItem = {
               id: items.length ? items[items.length -1].id +1 : 1,
               checked: false,
               item:item[0].toUpperCase() + item.slice(1)
          };
          item.length ? `${setItems ([...items, newItem])}${setItem('')}`
          :
          setItem('');
          console.log(items.length);
}   
console.log(search);

function handleSearch (e){    
    const filteredText = (e.target.value);
   const filteredList =  items.filter((item)=>item.item.toLocaleLowerCase().includes(filteredText.toLocaleLowerCase()))

   setFilteredItems(filteredList);
   
   
}
useEffect(()=>{
setFilteredItems(items);
},[items]);

    return(
        <div className="App">
            <h1 className="head">Gocery List</h1>
            <Header
            filteredItems={filteredItems}
            item={item}
            handleSearch={handleSearch}
            handleChange={handleChange}
            AddItem={AddItem}
            />
            <Items   
            items={items}
            filteredItems={filteredItems}   
              />
            <Footer filteredItems={filteredItems}/>
        </div>

    )
}