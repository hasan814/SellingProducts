import { BasketSideBarDiv } from "../styled/BasketSideBar.styled";
import { BsPatchCheck } from "react-icons/bs";
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { checkout } from "../../Redux/features/cart/cartSlice";

const BasketSideBar = ({ state }) => {
  // ============ Context ==============
  const dispatch = useDispatch()
  
  // ============ Context ==============
  return (
    <BasketSideBarDiv>
      <div>
        <TbChecklist />
        <p>Total :</p>
        <span>{state.total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>State:</p>
        <span>{!state.checkout && "Pending ..."}</span>
      </div>
      <button onClick={() => dispatch(checkout())}>Checkout</button>
    </BasketSideBarDiv>
  );
};

export default BasketSideBar;
