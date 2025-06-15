const RestaurantCard = ({resName, cuisine, rating, deliveryTime, imageUrl}) => {
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img 
                className="res-logo rounded-lg"
                alt="res-logo"
                src={imageUrl}
            />
            <h3 className="font-bold py-2 text-xl">{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} stars</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) =>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;