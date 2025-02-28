import React from "react";
import ReactDOM from 'react-dom/client'
import Header from "./src/Components/Header";
import FoodOption from "./src/Components/FoodOption";
import GroceryOption from "./src/Components/GroceryOption";
import Dineoption from "./src/Components/Dineoption";
import Getapp from "./src/Components/Getapp";
import Restaurant from "./src/Components/Restaurant";

import { BrowserRouter } from "react-router";
import Home from "./src/Components/Home";
import { Routes, Route } from "react-router";
import Restaurantmenu from "./src/Components/Restaurantmenu";


function Swiggy()
{ 




 
     return(
        <>


          <BrowserRouter>
          
          <Routes>

           <Route path='/' element={<Home/>}></Route>
           <Route path='/restaurants' element={<Restaurant/>}></Route>

           <Route path='/city/delhi/:id' element={<Restaurantmenu/>}></Route>

          </Routes>

          </BrowserRouter>
          
           
         
       
       
        
        
        </>
     )

}








ReactDOM.createRoot(document.getElementById('root')).render(<Swiggy/>)