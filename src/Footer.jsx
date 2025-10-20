export default function Footer({items}){
     
     return (
          <footer className="footer">
               <h1>There are {items.length <= 1 ?
               `${items.length} Item `:
                `${items.length} Items`}</h1>
          </footer>
     )
}