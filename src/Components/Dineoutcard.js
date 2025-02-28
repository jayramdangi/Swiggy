
export default function Dineoutcard({value})
{
     return(
        <>
          <div className="border border-gray-300 rounded-2xl">
            <a href={value.cta.link} target="_blank">
            
             <div className=" w-81 relative ">
            
                <img className="rounded-t-2xl h-45 w-81" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value.info.mediaFiles[0].url} alt="" />
                <p className=" z-10 absolute bottom-0 left-[4px] font-bold text-white text-2xl w-[70%]  whitespace-nowrap overflow-hidden text-ellipsis">{value.info.name}</p>
                <p className=" z-10 absolute bottom-0 right-[4px] text-white text-xl font-bold  flex gap-1 items-center"><p className= " text-white h-5 w-5 flex justify-center items-center text-[16px] bg-green-800 rounded-[50%]  ">★</p><p>{value.info.rating.value}</p></p>
                <div className="absolute bg-gradient-to-t from-black h-16 bottom-0 left-0 right-0 "> </div>
             </div>

             {/* image section completed */}

             <div>
                
                {/* designing first line */}
               <div className=" pl-2 pr-2 flex justify-between text-gray-600 mt-2.5 w-81">
                  <p>
                    {value.info.cuisines[0]} • {value.info.cuisines[1]}
                    

                  </p>
                  <p>
                    {value.info.costForTwo}
                  </p>
               </div>
               <div className=" pl-2 pr-2 flex justify-between text-gray-600 w-81">
                  
                  <p className="w-[75%] whitespace-nowrap overflow-hidden text-ellipsis">
                    {value.info.locationInfo.formattedAddress}
                  </p>
                  <p>
                    {value.info.locationInfo.distanceString} 
                    

                  </p>
                   

               </div>

               {/* third line */}

               <div className="text-white bg-[#1ba672] ml-2 mr-2 w-77 font-bold text-center mt-3 rounded-[5px] pt-1 pb-1 capitalize ">
                    {value.info.offerInfoV2.otherOffers.offers[0].header+" on pre booking"}
                   </div>

                   <div className="text-[#1ba672] bg-[#c8f9e5] ml-2 mr-2 mt-3 mb-3 rounded-[5px] pt-1 pb-1 text-center w-77">
                      Up to 10% off with bank offers
                   </div>





             </div>


             </a>

          </div>
        
        
        
        </>
     )
}