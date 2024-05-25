import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductsContext";
import Loader from "../components/elements/Loader";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { DetailsDiv } from "../components/styled/Details.styled";
import { shortenText } from "../services/Helpers";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/features/product/productSlice";

const DetailsPage = () => {
  // =========== Context ============
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((store) =>
    store.product.products.find((item) => item.id === +id)
  );

  // =========== Effect ============
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // =========== Rendering ============
  if (!productDetails) return <Loader />;
  const { image, title, description, category } = productDetails;
  return (
    <DetailsDiv>
      <img src={image} alt={title} />
      <div className="info">
        <h3 className="title">{shortenText(title)}</h3>
        <p className="description">{description}</p>
        <p className="category">
          <SiOpenproject />
          {category}
        </p>
        <div>
          <span className="price">
            <IoMdPricetag />
            {productDetails.price}
          </span>
          <Link to="/products">
            <FaArrowLeft />
            Back to Shop
          </Link>
        </div>
      </div>
    </DetailsDiv>
  );
};

export default DetailsPage;
