export default function Footer({items}){
     return(
          <footer>
                    {
                    items.length === 0 ? 
                    <h1>0 Items</h1> : items.length === 1 ? <h1>1 Item</h1>
                    : <h1>{items.length} Items</h1>
                    }
          </footer>
     )
}