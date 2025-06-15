import { useState } from "react";
import ListItems from "./ListItems";
const RestaurantCategory = ({name,dishes, showItems, setIndex})=>{
    console.log("inside res category");
    console.log(name,dishes, showItems, setIndex);
    // const [showItems, setShowItems] = useState(false)
    return (
        <div className="">
            {/* header */}
           <div className=" mx-auto  w-9/12 bg-gray-50 shadow-lg  m-2 p-2 border-b-2 border-gray-300">
                <div 
                    onClick={()=>{
                        setIndex()
                    }} 
                    className="flex justify-between items-center cursor-pointer mx-2 px-2">
                    <span className="text-lg font-semibold">{name} ({dishes.length})</span>
                    <span className="">⬇️</span>
                </div>
               { showItems &&  <ListItems items={dishes}/>}
           </div>
            {/* accordian body */}
        </div>
    )
}

export default RestaurantCategory;