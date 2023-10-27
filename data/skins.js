import axios from "axios";

const API = 'https://fortnite-api.com/v2/cosmetics/br/search/all?type=outfit'

const filteredData = (response) => {
    const filteredData = response.filter(item => item.name !== 'TBD' && item.name !== 'null' && item.introduction !== null);
    return filteredData;
}
const skins = async () => {
    try {
        const response = await axios.get(API);
        return filteredData(response.data.data);
    } catch (error) {
        throw error;
    }
};

export default skins;