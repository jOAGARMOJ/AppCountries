import { useState } from "react";
import PropTypes from "prop-types";

export default function Search({ placeholder, onSearch }) {

    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query); // Llama a la función pasada por props
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={handleChange}
                style={{
                    padding: "0.5rem",
                    width: "100%",
                    maxWidth: "400px",
                    margin: "0 auto",
                    display: "block",
                }}
            />
            <button className="btn-search"
            
                type="submit"
                
            >
                Buscar
            </button>
        </form>
    );
}

Search.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
};



