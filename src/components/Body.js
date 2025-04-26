import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // local state variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    // Simulate fetching data with a delay of 1000 ms
    const fetchData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(resList);
            }, 2000);
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
            <div className="filter">
                <div className="search" >
                    <input type='text' className = "search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/> 
                    <button onClick={()=>{
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter((res)=>{
                            return res.resName.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setFilteredRestaurant(filteredRestaurant);
                    }} className="search-btn">Search</button>   
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => {
                            return res.rating > 4;
                        });
                        setListOfRestaurant(filteredList);
                    }}
                >
                    Top rated restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.resName}
                        {...restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;