import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    // local state variable
    const [listOfRestaurants,setListOfRestaurant] = useState(resList)
    return (
        <div className="body">
           <div className="filter">
             <button className="filter-btn" onClick={()=>{
                const filteredList = listOfRestaurants.filter((res)=>{
                    return res.rating > 4
                })
                setListOfRestaurant(filteredList)
                }}>Top rated restautrants</button>
            </div>
           <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard 
                        key={restaurant.resName} 
                        {...restaurant}
                    />
                ))}
           </div>
        </div>
    )
}

export default Body;