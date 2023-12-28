import { resList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(resList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
