import axios from 'axios';
const url = "https://fortnite-api.com/v2/cosmetics/br";
const id = "https://fortnite-api.com/v2/cosmetics/br/{cosmetic-id}"

export const cosmeticos = async () => {
    try {
        const resposta = await axios.get(url);
        return resposta.data;
    }
    catch (error) {
        throw error;
    }
}

export const idCosmeticos = async (id) => {
    try {
        const resposta = await axios.get(id);
        return resposta.data;
    }
    catch (error) {
        throw error;
    }
}
