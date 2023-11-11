import React, { useState } from 'react';
import css from "./css/searchbar.module.css";

function SearchBar(props) {

    const [query, setQuery] = useState('');

const handleInputChange = (event) => {
    setQuery(event.target.value);
};

const handleSearch = () => {
    // here we will check whether the username is there or not then we will add that player to the clicked member
    // and we will add
};

    return (
        <div className={css.searchbox}>
            <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;