import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useSelector } from "react-redux";
import { HeaderDiv } from "../styled/Header.styled";
import { Link } from "react-router-dom";

const Header = () => {
  // =========== Context ==========
  const state = useSelector((store) => store.cart)

  // =========== Rendering ==========
  return (
    <HeaderDiv>
      <Link to="/products">
        <h1>Selling Products</h1>
      </Link>
      <div>
        <Link to="/checkout">
          <PiShoppingCartSimpleBold />
          {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
        </Link>
      </div>
    </HeaderDiv>
  );
};

export default Header;
