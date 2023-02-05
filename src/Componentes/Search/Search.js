import React, { useState } from "react";
import { SearchButton, SearchContainer, SearchInput } from "./StyleSeach";
import {FaSearch} from "react-icons/fa"

const SearchBar = () => {
const [searchTerm, setSearchTerm] = useState("");

const handleChange = (event) => {
setSearchTerm(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
}

return (
<SearchContainer>
<form onSubmit={handleSubmit}>
<SearchInput
       type="text"
       placeholder="Pesquisar..."
       value={searchTerm}
       onChange={handleChange}
     />
<SearchButton type="submit"><FaSearch/></SearchButton>
</form>
</SearchContainer>
);
};

export default SearchBar;