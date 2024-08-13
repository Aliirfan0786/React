import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
const handleAddItem = (item) =>{
  dispatch(addItem(item))

}
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.itemCards[0].card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
           
            <div className="w-9/12">
          <div className="py-2">
            <span>{item.itemCards[0].card.info.name}</span>
            <span> - ₹ {item.itemCards[0].card.info.price / 100 ||item.itemCards[0].card.info.defaultPrice / 100}</span>
          </div>
          <p className="text-xs">{item.itemCards[0].card.info.description}</p>
          </div>
          <div className="w-3/12 h-1/4 p-4">
          <div className="absolute">
          <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg m-auto" onClick={() =>handleAddItem(item)}>Add +</button>

          </div>
            <img src={CDN_URL + item.itemCards[0].card.info.imageId} ></img>
            
            </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
