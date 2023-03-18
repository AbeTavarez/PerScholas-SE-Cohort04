import axios from 'axios';

// AXIOS CONFIG
const swApi = axios.create({
    baseURL: 'https://swapi.dev/api',
})

export const getAllStarships = async () => {
    const data = await swApi('/starships');
    return data;
} 