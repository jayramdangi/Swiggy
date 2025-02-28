

export default function Sorting({setrestdata, restdata})
{

     function Ratingclick()
     {
           
          const data= [...restdata].sort((a,b)=>b.info.avgRating-a.info.avgRating);
          setrestdata(data); 

     }



    return(
            <>
             <div className="w-[80%] mx-auto flex flex-wrap gap-3 mt-10">
        <button className="restobtn">Filter</button>
        <button className="restobtn">Sort By</button>
        <button className="restobtn">Fast Delivery</button>
        <button className="restobtn">New on Swiggy</button>
        <button className="restobtn cursor-pointer" onClick={Ratingclick}>Ratings 4.0+</button>
        <button className="restobtn">Pure Veg</button>
        <button className="restobtn">Offers</button>
         <button className="restobtn">Rs.300-Rs.600</button>
         <button className="restobtn">Less than Rs.300</button>
         

        </div>
            
            </>
    )
}