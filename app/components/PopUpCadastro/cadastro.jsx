import { useEffect, useState } from 'react';
import styles from './cadastro.module.css';


const PopUpCadastro = ({ novosCadastros, lista }) => {
    const [nome, setNome] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [rarity, setRarity] = useState('Common');
    const [data, setData] = useState(null);
    const [capitulo, setCapitulo] = useState('Capitulo1');
    const [temporada, setTemporada] = useState('temporada1');
    const [raridade, setRaridade] = useState([]);

    const addSkin = () => {
        novosCadastros(nome, descricao, rarity, data, capitulo, temporada, 'https://fortniteskins.net/wp-content/cache/thumb/dc/2ff2ec28cec1cdc_190x190.webp');
        // clear fields
        setNome('');
        setDescricao('');
        setRarity('Common');
        setData('');
        setCapitulo('Capitulo1');
        setTemporada('temporada1');
        
    }

    useEffect(() => {
        const raridadeFilter = lista.filter((skin, index) => lista.findIndex((skinUnica) => skinUnica.raridade == skin.raridade) == index);
        setRaridade(raridadeFilter.map((skin) => skin.raridade));
    }, [lista]);

    return (
        <div className={styles.card}>
            <h1 className={styles.title}>Cadastro</h1>
            <input
                type="text"
                name="nome"
                placeholder="Digite o nome de sua skin"
                onChange={(e) => setNome(e.target.value)}
            />

            <input
                type="text"
                name="nome"
                placeholder="Digite a descrição de sua skin"
                onChange={(e) => setDescricao(e.target.value)}
            />

            <select onChange={(e) => setRarity(e.target.value)} name="rarity">
                {
                    raridade.map((raridade) => (
                        <option value={raridade}>{raridade}</option>
                    ))
                }
            </select>

            <input onChange={(e) => setData(e.target.value)}
                type="date"
                name="date"
                placeholder='Digite a data de lançamento da skin'
            />

            <select onChange={(e) => setCapitulo(e.target.value)}>
                <option value="1">Capitulo 1</option>
                <option value="2">Capitulo 2</option>
                <option value="3">capitulo 3</option>
                <option value="4">capitulo 4</option>
                {/* Dps add por um For/filter todos os capitulos, pois será mto mais facil e pratico */}
            </select>

            <select onChange={(e) => setTemporada(e.target.value)}>
                <option value="1">temporada 1</option>
                <option value="2">temporada 2</option>
                <option value="3">temporada 3</option>
                <option value="4">temporada 4</option>
                <option value="5">temporada 5</option>
                <option value="6">temporada 6</option>
                <option value="7">temporada 7</option>
                <option value="8">temporada 8</option>
                <option value="9">temporada 9</option>
                <option value="10">temporada 10</option>
            </select>

            <button className={styles.bntCriar} onClick={addSkin}>Criar</button>
        </div>

    )
}

export default PopUpCadastro;