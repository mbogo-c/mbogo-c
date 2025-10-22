import { useState } from "react"

export default function Content({items,handleChecked,handleDelete}){



     return(
          <main className="main">
               <ul className="ul">
                  {
                    items.map((item)=>{
                     return(    
                     <li className="list-item" key={item.id}>
                              <input className="input-checkbox"
                              onChange={()=>handleChecked(item.id)}
                              type="checkbox"
                              defaultChecked={item.checked}
                              />
                              <label
                         
                              onDoubleClick={()=>handleChecked(item.id)}
                              >{item.name}</label>
                              <button className="btn-delete" onClick={()=>handleDelete(item.id)}>Delete</button>
                         </li>)
                    })
                  }
               </ul>
          </main>
     )
}