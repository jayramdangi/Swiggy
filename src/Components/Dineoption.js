import DineoutResto from "../Utils/Dineout";
import Dineoutcard from './Dineoutcard'

export default function Dineoption()
{
     
    return(
        <>
        
           <div className="w-[80%] mx-auto mt-10 mb-10">
               <div className="text-2xl font-bold">
                Discover best restaurant on Dineout
               </div>

               <div className="flex flex-nowrap  overflow-x-auto mt-5 gap-6 scrollbar-hidden mb-6 ">
                  
              {
                 DineoutResto.map((value)=><Dineoutcard key={value.info.id} value={value}/>)
              }

</div>
            
           </div>
        
        </>
    )
}