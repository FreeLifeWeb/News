import axios from 'axios';

const BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (page_number = 1, page_size = 10) => {
    try {
        const response = await axios.get(`${BASE_URL}`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
            },
        });
        return response.data;
    } catch (err) {
        console.log('Error getting news', err);
    }
};
