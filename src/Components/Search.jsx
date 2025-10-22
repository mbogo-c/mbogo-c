export default function Search({search,setSearch}){
     return(
          <form className="Search" onSubmit={(e)=>e.preventDefault()} >
               <input 
               value={search}
               className="Search-inp"
               type="text"
               placeholder="Search"
               onChange={(e)=>setSearch(e.target.value)}
               />
          </form>
     )
}