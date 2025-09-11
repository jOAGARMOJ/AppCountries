import axios from "axios";

export async function getCountriesByName(name) {
    try {
        const response = await axios.get(
            `https://restcountries.com/v3.1/name/${name}?fields=flags,name,latlng,continents,capital,population,region`
        );
        console.log("API Response:", response.data); // 👀 para verificar en consola
        return response.data;
    } catch (error) {
        console.error("Error al obtener países:", error);
        return [];
    }
}
