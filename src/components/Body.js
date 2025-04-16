import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
    return (
        <div className="body">
           <div className="filter">
             <button className="filter-btn" onClick={()=>{console.log("button clicked")}}>Top rated restautrants</button>
            </div>
           <div className="res-container">
                {resList.map((restaurant) => (
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