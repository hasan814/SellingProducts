import { createQueryObject } from "../../services/Helpers";
import { SearchDiv } from "../styled/SearchDiv.styled";
import { ImSearch } from "react-icons/im";

const SearchBox = ({ search, setSearch, setQuery }) => {
  // ============= Functions ==============
  const searchHandler = () => {
    setQuery((prevQuery) => createQueryObject(prevQuery, { search }));
  };

  // ============= Rendering ==============
  return (
    <SearchDiv>
      <input
        type="text"
        placeholder="Search ...."
        value={search}
        onChange={(event) => setSearch(event.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </SearchDiv>
  );
};

export default SearchBox;
