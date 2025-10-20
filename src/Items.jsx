

export default function Items ({items,filteredItems}){
     
     return <main className="items">
      {
           filteredItems &&
                 filteredItems.map((item)=>{
                  return(  
                    <ul className="item" key={item.id}>
                         <input type="checkbox" className="checkbox" />
                         <li>{item.item}</li> 
                         <button  className="delete">Delete</button>
                         </ul>                 
               )})
           ||
      items.map((item)=>{
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