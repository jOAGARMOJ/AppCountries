import { useState } from "react";
import PropTypes from "prop-types";


function Search({ placeholder, onSearch }) {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    const handleChange = (e) => {
        if (e.key === "Enter") handleChange(e);
    };

    return (
        <form onSubmit={handleInputChange}>
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleChange}
            />
            <button type="submit">Buscar</button>
        </form>
    );
}

Search.propTypes = {
    placeholder: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
};

export default Search;
