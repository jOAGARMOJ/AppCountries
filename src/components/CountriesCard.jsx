import PropTypes from 'prop-types';

function CountryCard({ country }) {
    return (
        <div className="country-card">
            <h3>{country.name.common}</h3>
            <img src={countr.flags.svg} alt={`Bandera de ${country.name.common}`} width="100" />
            <p>Capital: {country.cpital?.[0] || "Desconocida"}</p>
            <p>Región: {country.region}</p>
            <p>Población: {country.population.toLocaleString()}</p>
        </div>
    );
}

CountryCard.propTypes = {
    country: PropTypes.shape({
        name: PropTypes.shape({
            common: PropTypes.string.isRequired,
        }).isRequired,
        flags: PropTypes.shape({
            svg: PropTypes.string.isRequired,
        }).isRequired,
        capital: PropTypes.arrayOf(PropTypes.string).isRequired,
        region: PropTypes.string.isRequired,
        population: PropTypes.number.isRequired,
    }).isRequired,
};

export default CountryCard;