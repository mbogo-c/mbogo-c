import { useEffect, useState } from "react";
import AddItem from "./Components/AddItem";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./App.css"
import Search from "./Components/Search";

export default function (){
const [items,setItems] = useState(JSON.parse(localStorage.getItem("shoppingList") ) || [])
const [item,setItem] = useState("")
const [search,setSearch] = useState("")

     

     function setAndSaveItem(newItems){
     setItems(newItems)
     localStorage.setItem("shoppingList",JSON.stringify(newItems))
  }
  

  function AddItems(e){
     e.preventDefault()
     if(item.length){
     const listItem = {
          id:crypto.randomUUID(),
          checked:false,
          name:item.length ? item.charAt(0).toUpperCase() + item.slice(1) : setItem("") 
     }
     const newItems = [...items,listItem]
     setAndSaveItem(newItems)
     setItem("")
}else{
     setItem("")
}
  }

  function handleChecked(id){
     const listItem = items.map((item)=>
          item.id === id ? {...item,checked:!item.checked} : item
          
     )
     setAndSaveItem(listItem)
  }

  function handleDelete(id){
     const listItem = items.filter((item)=>
          item.id !== id 
     )
     setAndSaveItem(listItem)
  }
     function filteredItem(){
          return items.filter((item)=>(item.name).toLowerCase().includes(search.toLowerCase()))
     }
     
     return(
          <div className="App">
               <Header/>
               <AddItem
               item={item}
               setItem={setItem}
               AddItems={AddItems}
               />

               <Search
               search={search}
               setSearch={setSearch}
               />

               <Content
               handleChecked={handleChecked}
               handleDelete={handleDelete}
               items={filteredItem(items)}
               />
               <Footer
               items={filteredItem(items)}
               />
          </div>
     )
}