import { decrease, increase, removeItem } from "../../Redux/features/cart/cartSlice";
import { MdDeleteOutline } from "react-icons/md";
import { BasketCardDiv } from "../styled/BasketCard.styled";
import { shortenText } from "../../services/Helpers";
import { useDispatch } from "react-redux";

const BasketCard = ({ data, clickHandler }) => {
  // ============== Constant ==============
  const { image, title, quantity } = data;

  // ============== Context ==============
  const dispatch = useDispatch();

  // ============== Rendering ==============
  return (
    <BasketCardDiv>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className="actions">
        {data.quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {data.quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </BasketCardDiv>
  );
};

export default BasketCard;
