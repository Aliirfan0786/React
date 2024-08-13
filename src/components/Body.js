import RestrauntCard,{isOpenLable} from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  const [ListOfRestraunts, setListOfRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const OnlineStatus = useOnlineStatus();

  const RestaurantIsOpen = isOpenLable(RestrauntCard);

  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);

    const json = await data.json();

    console.log(json);

    setListOfRestraunts(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditional rendering
  if (ListOfRestraunts.length === 0) {
    return <Shimmer />;
  }

  if (OnlineStatus === false)
    return (
      <h1>oops something went wrong!! please check your internet connection</h1>
    );
  // ListOfRestraunts.length === 0 ? (
  //   <Shimmer/>
  // ) :

  return (
    <div className="body mx-auto">
      <div className="filter flex">
        <div className="search p-4 m-4 ">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-3 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const fitleredRestaurant =
                res?.data?.cards?.info?.name?.console.log(fitleredRestaurant);

              setListOfRestraunts(fitleredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn p-2 m-2 bg-blue-100 mt-12 rounded-lg"
            onClick={() => {
              const fitleredList = ListOfRestraunts.filter(
                (res) => res.info.avgRating > 4.4
              );
              setListOfRestraunts(fitleredList);
            }}
          >
            top rated restraunts
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {ListOfRestraunts.map((restraunt) => (
          <Link
            key={restraunt.info.id}
            to={"/restaurants/" + restraunt.info.id}
          >
            { restraunt.info.isOpen ? <RestaurantIsOpen resData={restraunt}/>:<RestrauntCard resData={restraunt} />}
            
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
