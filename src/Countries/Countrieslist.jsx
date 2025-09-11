import PropTypes from 'prop-types';
import { CountryCard } from '../components/CountryCard';

function CountriesList({ countries }) {
    if (countries.length === 0) {
        return <p>No hay países para mostrar.</p>;
    }
    return (
        <div className="countries-list">
            {countries.map((country) => (
                <CountryCard key={country.cca3} country={country} />
            ))}
        </div>
    );
}

CountriesList.PropTypes = {
    countries: PropTypes.array.isRequired,
};

export { CountriesList };