import { useSelector } from "react-redux";
import BasketCard from "../components/modules/BasketCard";
import BasketSideBar from "../components/modules/BasketSideBar";
import { CheckOutDiv } from "../components/styled/CheckOut.styled";
import { v4 as uuidv4 } from "uuid";

const CheckOutPage = () => {
  // ============ Context =============
  const state = useSelector((store) => store.cart);

  // ============ Rendering =============
  if (!state.itemsCounter) {
    return (
      <div>
        <p>Empty</p>
      </div>
    );
  }
  return (
    <CheckOutDiv>
      <BasketSideBar state={state} />
      <div className="products">
        {state.selectedItems.map((product) => (
          <BasketCard key={uuidv4()} data={product} />
        ))}
      </div>
    </CheckOutDiv>
  );
};

export default CheckOutPage;
