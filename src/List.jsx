export default function  List({items}) {
     return(
     <ul>
        {items.map((item)=>(
            <li key={item.id}>
                {JSON.stringify(item)}
            </li>
        ))}
     </ul>
     )
}