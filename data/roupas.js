import axios from "axios";

const API = 'https://fortnite-api.com/v2/cosmetics/br'

const fetchApiData = async () => {
    try {
        const response = await axios.get(API);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default fetchApiData;