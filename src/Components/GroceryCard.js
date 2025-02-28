export default function GroceryCard({gdata})
{
     
    return(
        <>
           
           <div className="mr-10  w-50  ">
           <a href={gdata.action.link}>
          <img className="h-50 w-40 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+gdata?.imageId} alt="" />

           </a>

           <div className=" text-center w-40 mt-2 font-semibold text-xl">{gdata.action.text}</div>

           </div>

         
        
        </>
    )
}