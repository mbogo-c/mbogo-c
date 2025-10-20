export default function Footer({filteredItems}) {
     
     return (
          <footer className="footer">
               <h1>There are {filteredItems.length <= 1 ?
               `${filteredItems.length} Item `:
                `${filteredItems.length} Items`}</h1>
          </footer>
     )
}