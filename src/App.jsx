import { useState } from "react";
import header from "./components/header";
import Search from "./components/Search";
import { CountriesList } from "./Countries/Countrieslist";
import { getCountriesByName } from "./actions/getCountriesByname";


function App() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (name) => {
      if (!name.trim()) return;
      setLoading(true);

      try {
        const results = await getCountriesByName(name);
        setCountries(results);
      } catch (error) {
        console.error(error);
        setCountries([]);
      } finally {
        setLoading(false);        
      }
    };
    
    return (
      <div>
        <header title="countriesApp" description="Buscador de Paises" />
        <Search placeholder= "Escribe un pais" onSearch={handleSearch} />
        {loading ? <p>Cargando...</p> : <CountriesList countries={countries} />}
      </div>
    );
  }

export default App;