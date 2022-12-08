import RestaurantsSideBar from "./RestaurantsSideBar";

function Restaurants() {
    return (
        <div className="restaurantContent">
            <RestaurantsSideBar />
            <div className="restaurantDescriptions">
                <p>Here are the detes</p>
            </div>
        </div>
    );
}

export default Restaurants;