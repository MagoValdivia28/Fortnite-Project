import { useEffect, useState } from 'react';
import styles from './cadastro.module.css';


const PopUpCadastro = ({novosCadastros}) => {
    const [nome, setNome] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [rarity, setRarity] = useState('Common');
    const [data, setData] = useState(null);
    const [capitulo, setCapitulo] = useState('Capitulo1');
    const [temporada, setTemporada] = useState('temporada1');

    const addSkin = () => {
        novosCadastros(nome, descricao, rarity, data, capitulo, temporada);
    }

    return (
        <div className={styles.card}>
            <h1 className={styles.title}>Cadastro</h1>
            <input
                type="text"
                name="nome"
                placeholder="Digite o nome de sua skin"
                onChange={(e) => setNome(e.target.value)}
                value={nome}
            />

            <input
                type="text"
                name="nome"
                placeholder="Digite a descrição de sua skin"
                onChange={(e) => setDescricao(e.target.value)}
                value={descricao}
            />

            <select value={rarity} onChange={(e) => setRarity(e.target.value)} name="rarity">
                <option value="Common">Common</option>
                <option value="Uncommon">Uncommon</option>
                <option value="Rare">Rare</option>
                <option value="Epic">Epic</option>
                <option value='Legendary'>Legendary</option>
            </select>

            <input onChange={(e) => setData(e.target.value)}
                type="date"
                name="date"
                placeholder='Digite a data de lançamento da skin'
            />

            <select onChange={(e) => setCapitulo(e.target.value)}>
                <option value="Capitulo1">Capitulo 1</option>
                <option value="Capitulo2">Capitulo 2</option>
                <option value="Capitulo3">capitulo 3</option>
                <option value="Capitulo4">capitulo 4</option>
                {/* Dps add por um For/filter todos os capitulos, pois será mto mais facil e pratico */}
            </select>

            <select onChange={(e) => setTemporada(e.target.value)}>
                <option value="temporada1">temporada 1</option>
                <option value="temporada2">temporada 2</option>
                <option value="temporada3">temporada 3</option>
                <option value="temporada4">temporada 4</option>
                <option value="temporada5">temporada 5</option>
                <option value="temporada6">temporada 6</option>
                <option value="temporada7">temporada 7</option>
                <option value="temporada8">temporada 8</option>
                <option value="temporada9">temporada 9</option>
                <option value="temporada10">temporada 10</option>
            </select>

            <button className={styles.bntCriar} onClick={addSkin}>Criar</button>
        </div>
        
    )
}

export default PopUpCadastro;