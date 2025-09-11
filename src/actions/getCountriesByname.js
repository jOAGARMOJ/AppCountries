export const getCountriesByName = async (name) => {
    const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error('No pude obtener los países');

    const data = await response.json();
    return data;
};