export default function({item,setItem,AddItems}){
     return(
          <form
          className="form" onSubmit={AddItems}>
               <input className="input-add"
               value={item}
               placeholder="Add Item"
               type="text"
               onChange={(e)=>setItem(e.target.value)}
               />
               <button className="btn-add" type="submit">Add Item</button>
          </form>
     )
}