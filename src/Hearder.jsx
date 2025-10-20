export default function Header ({handleChange,AddItem}){

     
     return(
          <nav className="header">
               <label htmlFor="add-item">
               <input
               onChange={handleChange}
                type="text"
                 placeholder="Add Item"
                  className="add-item"
                  />
               <button
               onClick={()=>AddItem()}
               >Add Item</button>  
               <input type="text " id="search" placeholder="Search Item"/>    
               </label>           
               
          </nav>
     );
}
