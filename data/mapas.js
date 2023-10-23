import axios from "axios";

const URL = "https://fortnite-api.com/v1/map";

const maps = async () => {
    try{
        const resposta = await axios.get(URL);
        return resposta.data;
    }catch (error){
        throw error;
    }   
}

export default maps;