import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {

    const {resData} = props;
    const {cloudinaryImageId,cuisines,avgRating,costForTwo,deliveryTime,name} = resData?.info;
  // console.log(props);
  return (
    <div className="res-card m-4 p-4 w-[250px]  rounded-lg overflow-hidden object-cover transform transition duration-300  hover:scale-110"  >
      <img
        className="res-logo rounded-lg w-full h-full  "
        alt="res-logo"
        src={CDN_URL+cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}star</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
export const isOpenLable = (RestrauntCard) =>{

  return (props)=>{
    return(
      <div>
        <label className=" relative bg-black text-white ml-3 p-2  rounded-lg ">Open Now</label>
        <RestrauntCard {...props}/>
      </div>
    )
  }

}
export default RestrauntCard;