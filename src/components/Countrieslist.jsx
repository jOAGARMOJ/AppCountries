import PropTypes from "prop-types";

export function CountriesList({ countries }) {
    if (!countries || countries.length === 0) {
        return <p>No se encontraron países.</p>;
    }

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
            marginTop: "1rem"
        }}>
            {countries.map((country) => (
                <div className="country-list" key={country.name.common} style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "0.5rem",
                    background: "#fff"
                }}>
                    <img src={country.flags.svg} alt={country.name.common} style={{ width: "100%", borderRadius: "4px" }} />
                    <h3>{country.name.common}</h3>
                    <p><strong>Capital:</strong> {country.capital?.[0] ?? "N/A"}</p>
                    <p><strong>Continente:</strong> {country.continents?.[0]}</p>
                    <p><strong>Región:</strong> {country.region}</p>
                    <p><strong>Población:</strong> {country.population.toLocaleString()}</p>
                    <p><strong>Latitud:</strong> {country.latlng?.[0]}</p>
                </div>
            ))}
        </div>
    );
}

CountriesList.propTypes = {
    countries: PropTypes.array.isRequired,
};
