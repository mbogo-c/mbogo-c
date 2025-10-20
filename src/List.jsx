export default function  List({data}) {
     return(
     <ul>
        {data.map((item)=>(
            <li key={item.id}>
                {JSON.stringify(item)}
            </li>
        ))}
     </ul>
     )
}