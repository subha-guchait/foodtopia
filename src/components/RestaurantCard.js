import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  avgRating,
  cuisines,
  areaName,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{avgRating} stars</h4>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{areaName}</h3>
    </div>
  );
};

export default RestaurantCard;
