import axios from "axios";

const getCountriesByName = async (search) => {
    if (!search || search.trim() === "") 
        console.warn("Búsqueda vacía proporcionada, indique un término de búsqueda válido.");
        return [];
    try {
        const response = await axios.get(https://restcountries.com/v3.1/name/${search});
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
export { getCountriesByName };