import { useEffect, useState } from "react";
import { useParams } from "react-router";
import resList from "../utils/mockData"; // Import mock menu data
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    const { resId } = useParams(); // Get the resId from the route
    const [restaurant, setRestaurant] = useState(null);
    const [categories, setCategories] = useState([]);
    const [showIndex, setShowIndex] = useState(1);

    useEffect(() => {
        // Simulate fetching data with a delay of 1 second
        const fetchMenu = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
            console.log("resId", resId);
            console.log("resList", resList);
            const selectedRestaurant = resList.find((res) => res.id === parseInt(resId)); // Find menu by id
            setRestaurant(selectedRestaurant);
            setCategories(selectedRestaurant.categories);
        };
        fetchMenu();
    }, [resId]);

    if (!restaurant) {
        return <h2>Loading...</h2>; // Show loading state
    }

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{restaurant.resName}</h1>
            <h2 className="text-lg font-bold">{restaurant.cuisine}</h2>
            {categories.map((category,index)=>{
                return ( 
                <RestaurantCategory
                    key={category.name}
                    {...category}
                    showItems = {showIndex== index ? true : false}
                    setIndex = {()=>{
                        if(showIndex != index){
                            setShowIndex(index)
                        }
                        else{
                            setShowIndex(null)
                        }
                    }}
                 /> )
            })}
        </div>
    );
};

export default RestaurantMenu;