import { useEffect, useState } from "react";
import { useParams } from "react-router"






export default function Restaurantmenu()
{

       let {id}= useParams(); 
       console.log(id); 

       const [resdata, setresdata]=useState(null);

       useEffect(() => {
        async function fetchresto() {
          const proxyserver = 'https://cors-anywhere.herokuapp.com/';
          const swiggyapi =
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02299636&lng=72.55675721&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
    
          const data = await fetch(proxyserver + swiggyapi);
          const response = await data.json();
    
          setresdata(response);
        }
    
        fetchresto();
      }, []);

      console.log(resdata)



    return(
        <>
         <h2>Hello</h2>
         
        
        </>
    )
}
