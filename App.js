import React from "react"
import ReactDom from "react-dom/client"


const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact US</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    )
}

const resList = [
    {
        resName: "Meghana Foods",
        cuisine: "Biryani, North Indian, Chinese",
        rating: "4.5",
        deliveryTime: "30 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
    },
    {
        resName: "KFC",
        cuisine: "Fast Food",
        rating: "4.2",
        deliveryTime: "25 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"
    },
    {
        resName: "Dominos",
        cuisine: "Pizza",
        rating: "4.1",
        deliveryTime: "35 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
    },
    {
        resName: "Pizza Hut",
        cuisine: "Pizza",
        rating: "4.3",
        deliveryTime: "40 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
    },
    {
        resName: "Burger King",
        cuisine: "Burger",
        rating: "4.4",
        deliveryTime: "20 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
    },
    {
        resName: "Subway",
        cuisine: "Healthy Food, Salads, Sandwiches",
        rating: "4.0",
        deliveryTime: "22 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b"
    },
    {
        resName: "Beijing Bites",
        cuisine: "Chinese, Thai, Pan Asian",
        rating: "4.3",
        deliveryTime: "28 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4a3b48488e3aa9bda13efd8cfcd95284"
    },
    {
        resName: "Paradise Biryani",
        cuisine: "Biryani, Hyderabadi",
        rating: "4.6",
        deliveryTime: "32 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yktanq9i7yfjrixaghuj"
    },
    {
        resName: "McDonald's",
        cuisine: "Burgers, Fast Food, Beverages",
        rating: "4.2",
        deliveryTime: "18 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6"
    },
    {
        resName: "Taco Bell",
        cuisine: "Mexican, Fast Food",
        rating: "4.1",
        deliveryTime: "25 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
    },
    {
        resName: "Wow! Momo",
        cuisine: "Tibetan, Healthy Food",
        rating: "4.3",
        deliveryTime: "22 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5a148e63e9c54942e37627da1aa156be"
    },
    {
        resName: "Behrouz Biryani",
        cuisine: "Biryani, Mughlai, Lucknowi",
        rating: "4.4",
        deliveryTime: "35 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/89fccaa76f2f760e2742b9e53d32bb69"
    },
    {
        resName: "Faasos",
        cuisine: "Wraps, Fast Food",
        rating: "4.1",
        deliveryTime: "29 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/af33b81798b11deba338e94b7585d348"
    },
    {
        resName: "The Bowl Company",
        cuisine: "Pan Asian, Continental",
        rating: "4.4",
        deliveryTime: "26 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb6049fae59b8a2413a9177eb0338b49"
    },
    {
        resName: "Empire Restaurant",
        cuisine: "North Indian, Biryani, Kebabs",
        rating: "4.3",
        deliveryTime: "25 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"
    }
];

const RestaurantCard = ({resName, cuisine, rating, deliveryTime, imageUrl}) => {
    return (
        <div className="res-card">
            <img 
                className="res-logo"
                alt="res-logo"
                src={imageUrl}
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} stars</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
           <div className="search">Search</div>
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

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout />)

