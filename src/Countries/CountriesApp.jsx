import { useState } from "react";
import Search from "../components/Search";
import { CountriesList } from "../components/Countrieslist";
import { getCountriesByName } from "../actions/getCountriesByname";

export default function CountriesApp() {
    const [countries, setCountries] = useState([]);
    const [previousSearches, setPreviousSearches] = useState([]);

    const handleSearch = async (name) => {
        const newSearch = name.trim().toLowerCase();
        if (newSearch === "") return;

        if (!previousSearches.includes(newSearch)) {
            setPreviousSearches([newSearch, ...previousSearches].slice(0, 10));
        }

        const results = await getCountriesByName(newSearch);
        setCountries(results);
    };

    return (
        <div>
            <Search placeholder="Escribe un país" onSearch={handleSearch} />
            <CountriesList countries={countries} />
            <h4>Historial de búsquedas:</h4>
            <ul>
                {previousSearches.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
}