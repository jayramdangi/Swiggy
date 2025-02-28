import imageGrid from "../Utils/FoodData"
import MakefoodData from "./MakefoodData"


export default function FoodOption()
{
     return(
        <>

         <div className="w-[80%] h-130 container mx-auto flex flex-wrap flex-col mt-20 gap-3 justify-around  overflow-x-scroll scrollbar-hidden">
            
             {
                imageGrid.map((foodData, index)=><MakefoodData foodData={foodData} key={foodData.id}></MakefoodData>)
             }

         </div>

        </>
     )
}