export default function Header ({item,handleChange,AddItem}){

     
     return(
          <form onSubmit={(e)=>e.preventDefault()} className="header">
               <label htmlFor="">
               <input
               value={item}
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
               
          </form>
     );
}
