import { SearchButton, SearchContainer, SearchInput } from "./StyleSeach";
import { FaSearch } from "react-icons/fa";


const SearchBar = ({searchQuery, setSearchQuery}) => {

  return (
    <SearchContainer>
      <form>
        <SearchInput
          type="text"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={setSearchQuery}
        />
        <SearchButton type="submit">
          <FaSearch />
        </SearchButton>
      </form>
    </SearchContainer>
  );
};

export default SearchBar;