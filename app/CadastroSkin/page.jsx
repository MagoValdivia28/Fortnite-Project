"use client";

import { cosmeticos } from "@/data/fortinite";


export default function CadastroSkin() {

    const [apiData, setApidata] = useState(null);

    useEffect(() => {
        console.log(apiData);
        const fetchData = async () => {
            try {
                const dados = await cosmeticos();
                setApidata(dados.data);
            } catch (error) {
                throw error;
            }}
        fetchData();
    }, []);


    return (
        <main>
            <h1>Cadastro de Skins</h1>

        </main>
    )}