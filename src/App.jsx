import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import { CountriesList } from "./components/Countrieslist";
import { getCountriesByName } from "./actions/getCountriesByname";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [previousResults, setPreviousResults] = useState([]); // historial de búsquedas

  const handleSearch = async (name) => {
    if (!name.trim()) return;
    setLoading(true);
    setSearched(true);

    try {
      const results = await getCountriesByName(name);
      setCountries(results);

      // ✅ solo guardar si hay resultados válidos
      if (results && results.length > 0) {
        setPreviousResults((prev) => {
          const exists = prev.find((item) => item.search === name);
          if (exists) return prev;
          return [{ search: name, results }, ...prev].slice(0, 5); // máximo 5
        });
      }
    } catch (error) {
      console.error(error);
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header title="countriesApp" description="Buscador de Paises 2" />
      <Search placeholder="Escribe un país" onSearch={handleSearch} />

      {loading && <p>Cargando...</p>}

      {/* Resultados de la búsqueda actual */}
      {!loading && searched && countries.length > 0 && (
        <CountriesList countries={countries} />
      )}
      {!loading && searched && countries.length === 0 && (
        <p>No se encontraron resultados.</p>
      )}

      {/*  Historial de búsquedas anteriores */}
      {previousResults.length > 1 && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Búsquedas anteriores</h2>
          {previousResults
            .slice(1) //  omitimos la más reciente
            .map((entry) => (
              <div key={entry.search} style={{ marginBottom: "1.5rem" }}>
                <h3>{entry.search}</h3>
                <CountriesList countries={entry.results} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default App;
