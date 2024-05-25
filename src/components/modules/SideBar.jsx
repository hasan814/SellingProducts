import { FaListUl } from "react-icons/fa";
import { List } from "../../services/List";
import { createQueryObject } from "../../services/Helpers";
import { SideBarDiv } from "../styled/SideBar.styled";

const SideBar = ({ setQuery, query }) => {
  // ============= Function ============
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((prevQuery) => createQueryObject(prevQuery, { category }));
  };

  // ============= Rendering ============
  return (
    <SideBarDiv>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {List.map((item) => (
          <li
            key={item.id}
            className={
              item.name.toLocaleLowerCase() === query.category
                ? "selected"
                : null
            }
          >
            {item.name}
          </li>
        ))}
      </ul>
    </SideBarDiv>
  );
};

export default SideBar;
