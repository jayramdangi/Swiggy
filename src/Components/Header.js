import { Link } from "react-router"

export default function Header()
{





    return(
        <>
            <header className="bg-[#ff5200] py-8 font-serif">
             
              <div className="flex justify-between items-center text-white  text-base font-bold container mx-auto ">
                  <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="" />
                
                  <div className="flex gap-15 items-center ">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>

                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>

                    <a className=" border border-white py-3 px-4 rounded-2xl" target="_blank" href="https://www.swiggy.com/corporate/">Get The App</a>

                    <a className="py-3 px-4 bg-black rounded-2xl" target="_blank" href="https://www.swiggy.com/corporate/">Sign In</a>
                   
                  </div>

              </div>

              <div className="pt-16 pb-6 relative" >
                 <img className=" h-110 w-60 absolute left-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
                 
                  <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />

                <div className="text-5xl text-white font-bold max-w-[63%] container mx-auto text-center  ">
                 Order food and groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className="max-w-[70%] container mx-auto flex gap-5 mt-5">

                    <input className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl" placeholder="Delhi, India" type="text" />
                    <input className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl" placeholder="Search for restaruant and items for more" type="text" />



                </div>

              </div>

              <div className="max-w-[80%] container mx-auto  flex ">
                
                  <Link to='/restaurants'>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png" alt="" />
                    </Link>
                

                <a href="">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png" alt="" />
                </a>
                <a href="">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png" alt="" />
                </a>
                <a href="">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png" alt="" />
                </a>



              </div>





            </header>

        
        
        </>
    )
}