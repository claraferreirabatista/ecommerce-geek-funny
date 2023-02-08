import { SearchButton, SearchContainer, SearchInput } from "./StyleSeach";
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <SearchContainer>
      <form>
        <SearchInput
          type="text"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={handleChange}
        />
        <SearchButton type="submit">
          <FaSearch />
        </SearchButton>
      </form>
    </SearchContainer>
  );
};

export default SearchBar;