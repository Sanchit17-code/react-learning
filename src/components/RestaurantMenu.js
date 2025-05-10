import { useEffect, useState } from "react";
import { useParams } from "react-router";
import resList from "../utils/mockData"; // Import mock menu data

const RestaurantMenu = () => {
    const { resId } = useParams(); // Get the resId from the route
    const [restaurant, setRestaurant] = useState(null);
    
    useEffect(() => {
        // Simulate fetching data with a delay of 1 second
        const fetchMenu = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
            console.log("resId", resId);
            console.log("resList", resList);
            const selectedRestaurant = resList.find((res) => res.id === parseInt(resId)); // Find menu by id
            setRestaurant(selectedRestaurant);
        };
        fetchMenu();
    }, [resId]);

    if (!restaurant) {
        return <h2>Loading...</h2>; // Show loading state
    }

    return (
        <div className="menu">
            <h1>{restaurant.resName}</h1>
            <h2>Menu</h2>
            <ul className="menu-list">
                {restaurant.menu.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;