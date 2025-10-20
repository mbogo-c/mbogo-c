import { Fragment } from "react"

export default function Items ({items}){
     
     return <main className="items">
      {items.map((item)=>{
                  return(  
                    <ul className="item" key={item.id}>
                         <input type="checkbox" className="checkbox" />
                         <li>{item.item}</li> 
                         <button  className="delete">Delete</button>
                         </ul>                 
               )})
          }
          </main>
}