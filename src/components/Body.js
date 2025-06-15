import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {
    // local state variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    // Simulate fetching data with a delay of 1000 ms
    const fetchData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(resList);
            }, 500);
        });
    };

    // useEffect is a hook that runs after the component is rendered
    useEffect(() => {
        console.log("useEffect is called");
        fetchData().then((data) => {
            setListOfRestaurant(data);
            setFilteredRestaurant(data);
        });
    }, []); // Empty dependency array ensures it runs only once after the component mounts

    if(listOfRestaurants.length === 0) {
        return <Shimmer />;
    }
    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4" >
                    <input type='text' className = "border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/> 
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg " onClick={()=>{
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter((res)=>{
                            return res.resName.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>   
                </div>
                <div className="m-4 p-4 flex items-center">
                <button
                    className="px-4 py-1 bg-gray-100 m-4 rounded-lg"
                    onClick={() => { 
                        const filteredList = listOfRestaurants.filter((res) => {
                            return res.rating > 4;
                        });
                        setFilteredRestaurant(filteredList);
                    }}
                >
                    Top rated restaurants
                </button>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
                        {
                        restaurant.isPromoted ? 
                        <RestaurantCardPromoted
                        {...restaurant}
                        /> : 
                        <RestaurantCard
                        {...restaurant}
                        />}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;