import { useEffect, useState } from "react";

import Loader from "../components/elements/Loader";
import Card from "../components/modules/Card";

import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../services/Helpers";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../Redux/features/product/productSlice";
import { ProductDiv } from "../components/styled/Product.styled";
import SearchBox from "../components/modules/SearchBox";
import SideBar from "../components/modules/SideBar";
import { useDispatch, useSelector } from "react-redux";

const ProductsPage = () => {
  // ============= Context ============
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product);
  console.log(products);

  // ============= State ============
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState([]);
  const [query, setQuery] = useState({});

  // ============= Params ============
  const [searchParams, setSearchParams] = useSearchParams();

  // ============= Effect ============
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setDisplay(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplay(finalProducts);
  }, [query]);

  // ============= Rendering ============
  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <ProductDiv>
        <div className="products">
          {loading && <Loader />}
          {display.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <SideBar setQuery={setQuery} query={query} />
      </ProductDiv>
    </>
  );
};

export default ProductsPage;
