import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import { CountriesList } from "./components/Countrieslist";
import { getCountriesByName } from "./actions/getCountriesByname";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false); // <- nuevo

  const handleSearch = async (name) => {
    if (!name.trim()) return;
    setLoading(true);
    setSearched(true); // <- ahora sabemos que se hizo búsqueda

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
      <Header title="countriesApp" description="Buscador de Paises" />
      <Search placeholder="Escribe un país" onSearch={handleSearch} />
      {loading && <p>Cargando...</p>}
      {!loading && searched && <CountriesList countries={countries} />}
    </div>
  );
}

export default App;
