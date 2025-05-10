const resList = [
    {   id:1,
        resName: "Meghana Foods",
        cuisine: "Biryani, North Indian, Chinese",
        rating: "4.5",
        deliveryTime: "30 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        menu: [
            { id: 1, name: "Special Chicken Biryani", price: 299, description: "Signature Hyderabadi style biryani with tender chicken pieces" },
            { id: 2, name: "Paneer Butter Masala", price: 249, description: "Cottage cheese in rich tomato and butter gravy" },
            { id: 3, name: "Chicken Manchurian", price: 279, description: "Crispy chicken in spicy Chinese sauce" },
            { id: 4, name: "Veg Fried Rice", price: 199, description: "Stir-fried rice with fresh vegetables and soy sauce" }
        ]
    },
    {   id:2,
        resName: "KFC",
        cuisine: "Fast Food",
        rating: "2",
        deliveryTime: "25 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
        menu: [
            { id: 1, name: "8 Pc Chicken Bucket", price: 799, description: "8 pieces of KFC's signature fried chicken" },
            { id: 2, name: "Zinger Burger", price: 199, description: "Crispy chicken fillet with fresh lettuce and mayo" },
            { id: 3, name: "Popcorn Chicken", price: 249, description: "Bite-sized pieces of crispy chicken" },
            { id: 4, name: "Chicken Wings", price: 299, description: "Spicy chicken wings with KFC's secret recipe" }
        ]
    },
    {   id:3,
        resName: "Dominos",
        cuisine: "Pizza",
        rating: "4.1",
        deliveryTime: "35 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
        menu: [
            { id: 1, name: "Margherita", price: 199, description: "Classic pizza with tomato sauce and mozzarella" },
            { id: 2, name: "Pepperoni", price: 399, description: "Pizza topped with pepperoni and cheese" },
            { id: 3, name: "Veg Supreme", price: 349, description: "Loaded with fresh vegetables and cheese" },
            { id: 4, name: "Chicken Supreme", price: 449, description: "Loaded with chicken and vegetables" }
        ]
    },
    {   id:4,
        resName: "Pizza Hut",
        cuisine: "Pizza",
        rating: "4.3",
        deliveryTime: "40 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
        menu: [
            { id: 1, name: "Personal Pan Pizza", price: 249, description: "Small pizza perfect for one person" },
            { id: 2, name: "Stuffed Crust Pizza", price: 499, description: "Pizza with cheese-filled crust" },
            { id: 3, name: "Pasta Alfredo", price: 299, description: "Creamy pasta with parmesan sauce" },
            { id: 4, name: "Garlic Bread", price: 149, description: "Toasted bread with garlic butter" }
        ]
    },
    {   id:5,
        resName: "Burger King",
        cuisine: "Burger",
        rating: "4.4",
        deliveryTime: "20 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        menu: [
            { id: 1, name: "Whopper", price: 249, description: "Flame-grilled beef patty with fresh vegetables" },
            { id: 2, name: "Chicken Royale", price: 199, description: "Crispy chicken fillet with fresh lettuce" },
            { id: 3, name: "Veg Whopper", price: 229, description: "Plant-based patty with fresh vegetables" },
            { id: 4, name: "French Fries", price: 99, description: "Crispy golden fries" }
        ]
    },
    {   id:6,
        resName: "Subway",
        cuisine: "Healthy Food, Salads, Sandwiches",
        rating: "4.0",
        deliveryTime: "22 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b",
        menu: [
            { id: 1, name: "Veg Delite", price: 199, description: "Fresh vegetables with choice of bread" },
            { id: 2, name: "Chicken Teriyaki", price: 249, description: "Grilled chicken with teriyaki sauce" },
            { id: 3, name: "Tuna Sub", price: 229, description: "Tuna with fresh vegetables" },
            { id: 4, name: "Veggie Patty", price: 219, description: "Plant-based patty with vegetables" }
        ]
    },
    {   id:7,
        resName: "Beijing Bites",
        cuisine: "Chinese, Thai, Pan Asian",
        rating: "3.9",
        deliveryTime: "28 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4a3b48488e3aa9bda13efd8cfcd95284",
        menu: [
            { id: 1, name: "Chicken Noodles", price: 199, description: "Stir-fried noodles with chicken" },
            { id: 2, name: "Veg Fried Rice", price: 179, description: "Classic Chinese fried rice" },
            { id: 3, name: "Sweet and Sour Chicken", price: 249, description: "Crispy chicken in tangy sauce" },
            { id: 4, name: "Spring Rolls", price: 149, description: "Crispy vegetable rolls" }
        ]
    },
    {   id:8,
        resName: "Paradise Biryani",
        cuisine: "Biryani, Hyderabadi",
        rating: "0",
        deliveryTime: "32 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yktanq9i7yfjrixaghuj",
        menu: [
            { id: 1, name: "Hyderabadi Biryani", price: 299, description: "Traditional Hyderabadi style biryani" },
            { id: 2, name: "Chicken Biryani", price: 349, description: "Fragrant biryani with tender chicken" },
            { id: 3, name: "Veg Biryani", price: 249, description: "Vegetarian biryani with mixed vegetables" },
            { id: 4, name: "Mutton Biryani", price: 399, description: "Rich biryani with tender mutton" }
        ]
    },
    {   id:9,
        resName: "McDonald's",
        cuisine: "Burgers, Fast Food, Beverages",
        rating: "4.2",
        deliveryTime: "18 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6",
        menu: [
            { id: 1, name: "Big Mac", price: 249, description: "Two beef patties with special sauce" },
            { id: 2, name: "McChicken", price: 199, description: "Crispy chicken patty with lettuce" },
            { id: 3, name: "McVeggie", price: 179, description: "Vegetarian patty with fresh vegetables" },
            { id: 4, name: "French Fries", price: 99, description: "World famous fries" }
        ]
    },
    {   id:10,
        resName: "Taco Bell",
        cuisine: "Mexican, Fast Food",
        rating: "4.1",
        deliveryTime: "25 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        menu: [
            { id: 1, name: "Crunchy Taco", price: 149, description: "Crispy taco with seasoned beef" },
            { id: 2, name: "Bean Burrito", price: 179, description: "Flour tortilla with beans and cheese" },
            { id: 3, name: "Nachos", price: 199, description: "Crispy tortilla chips with cheese" },
            { id: 4, name: "Quesadilla", price: 249, description: "Grilled tortilla with cheese and chicken" }
        ]
    },
    {   id:11,
        resName: "Wow! Momo",
        cuisine: "Tibetan, Healthy Food",
        rating: "3",
        deliveryTime: "22 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5a148e63e9c54942e37627da1aa156be",
        menu: [
            { id: 1, name: "Chicken Momos", price: 199, description: "Steamed dumplings with chicken filling" },
            { id: 2, name: "Veg Momos", price: 179, description: "Steamed dumplings with vegetable filling" },
            { id: 3, name: "Paneer Momos", price: 189, description: "Steamed dumplings with paneer filling" },
            { id: 4, name: "Tandoori Momos", price: 249, description: "Grilled momos with spicy marinade" }
        ]
    },
    {   id:12,
        resName: "Behrouz Biryani",
        cuisine: "Biryani, Mughlai, Lucknowi",
        rating: "0",
        deliveryTime: "35 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/89fccaa76f2f760e2742b9e53d32bb69",
        menu: [
            { id: 1, name: "Royal Chicken Biryani", price: 399, description: "Premium biryani with tender chicken" },
            { id: 2, name: "Veg Biryani", price: 299, description: "Vegetarian biryani with fresh vegetables" },
            { id: 3, name: "Mutton Biryani", price: 449, description: "Rich biryani with tender mutton" },
            { id: 4, name: "Paneer Biryani", price: 349, description: "Vegetarian biryani with paneer" }
        ]
    },
    {   id:13,
        resName: "Faasos",
        cuisine: "Wraps, Fast Food",
        rating: "4.1",
        deliveryTime: "29 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/af33b81798b11deba338e94b7585d348",
        menu: [
            { id: 1, name: "Chicken Wrap", price: 199, description: "Grilled chicken with fresh vegetables" },
            { id: 2, name: "Paneer Wrap", price: 179, description: "Grilled paneer with vegetables" },
            { id: 3, name: "Veg Wrap", price: 159, description: "Fresh vegetables in a wrap" },
            { id: 4, name: "Chicken Roll", price: 189, description: "Spicy chicken in a paratha" }
        ]
    },
    {   id:14,
        resName: "The Bowl Company",
        cuisine: "Pan Asian, Continental",
        rating: "4.4",
        deliveryTime: "26 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb6049fae59b8a2413a9177eb0338b49",
        menu: [
            { id: 1, name: "Buddha Bowl", price: 299, description: "Healthy bowl with grains and vegetables" },
            { id: 2, name: "Poke Bowl", price: 349, description: "Hawaiian style bowl with fresh fish" },
            { id: 3, name: "Buddha Bowl", price: 299, description: "Healthy bowl with grains and vegetables" },
            { id: 4, name: "Buddha Bowl", price: 299, description: "Healthy bowl with grains and vegetables" }
        ]
    },
    {   id:15,
        resName: "Empire Restaurant",
        cuisine: "North Indian, Biryani, Kebabs",
        rating: "4.3",
        deliveryTime: "25 min",
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
        menu: [
            { id: 1, name: "Butter Chicken", price: 299, description: "Tender chicken in rich tomato gravy" },
            { id: 2, name: "Chicken Biryani", price: 249, description: "Fragrant biryani with chicken" },
            { id: 3, name: "Seekh Kebab", price: 199, description: "Grilled minced meat kebabs" },
            { id: 4, name: "Naan", price: 49, description: "Freshly baked tandoori bread" }
        ]
    }
];

export default resList;