
import axios from "axios";

const API = 'https://fortnite-api.com/v2/cosmetics/br'

const fetchApiData = async () => {
    const filteredData = (response) => {
        const filteredData = response.filter(item => item.type.value === 'outfit' && item.name !== 'TBD' && item.name !== 'null' && item.introduction !== null);
        return filteredData;
    }
    try {
        const response = await axios.get(API);
        return filteredData(response.data.data);
    } catch (error) {
        throw error;
    }
};

export default fetchApiData;