import GroceryData from "../Utils/Grocery"
import GroceryCard from "./GroceryCard"

export default function GroceryOption()
{
    

    




    return(
        <>
         <div className="w-[80%] container mx-auto  mt-14 mb-14">
            <div className="font-bold text-3xl mb-8 ">  Shop groceries on Instamart</div>
         
         <div className="flex container overflow-auto scrollbar-hidden">

           {
          GroceryData.map((gdata)=><GroceryCard key={gdata.id} gdata={gdata}></GroceryCard>)

       }
        </div>
     </div>
      
      
        </>
    )
}