const handleSearch = async (name) => {
    const newSearch = search.trim().tolowerCase();
    if (newSearch === "") return;


    if (!previousSearches.includes(newSearch)) {
        setPreviousSearches([newSearch, ...previousSearches].slice(0, 10));
    }

    const results = await getCountriesByName(newSearch);
    setCountries(results);
    
    
}