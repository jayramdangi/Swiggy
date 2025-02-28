export default function MakefoodData({foodData})
{
     


    return(
        <>
             <a href={foodData?.action.link}>
             <img className="h-50 w-40 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId} alt="" />
             </a>
           
        
        </>
    )
}