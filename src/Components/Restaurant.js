import { useEffect, useState } from 'react';
import Restcard from './Restcard';
import Sorting from './Sorting';
import Shimmer from './Shimmer';

export default function Restaurant() {
  const [restdata, setrestdata] = useState([]);

  useEffect(() => {
    async function fetchresto() {
      const proxyserver = 'https://cors-anywhere.herokuapp.com/';
      const swiggyapi =
        'https://swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true';

      const data = await fetch(proxyserver + swiggyapi);
      const response = await data.json();

      setrestdata(
        response?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
    }

    fetchresto();
  }, []);

  console.log(restdata);

   if(restdata.length==0)
   {
    
     return(<>
          <Shimmer/>
          </>

     )

   }



  return (
    <>
      <div className="font-bold w-[80%] mx-auto text-2xl">
        Restaurants with online food delivery in Ahmedabad
      </div>

      <Sorting setrestdata={setrestdata} restdata={restdata} />

      <div className="flex mt-20 ml-10 mr-10 flex-col flex-wrap overflow-x-scroll items-center gap-8 h-[700] overflow-hidden scrollbar-hidden mr-[10%] ml-[10%]">
        {restdata.map((value) => {
          return <Restcard value={value} key={value?.info?.id} />;
        })}
      </div>

      <hr />
      <div>Hello</div>
    </>
  );
}
