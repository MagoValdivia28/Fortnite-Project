"use client"

import { useEffect, useState } from 'react';
import styles from './cadastro.module.css';

const PopUpCadastro = ({ type, func }) => {
    const [nome, setNome] = useState(null);
    const [descricao, setDescricao] = useState(null);
    console.log(type, func);


    const handleNomeChange = (e) => {
        setNome(e.target.value);
    };
    const handleDescricaoChange = (e) => {
        setDescricao(e.target.value);
    }
    return (
        <div className={styles.card}>
            <h1 className={styles.title}>Cadastro</h1>
            <input
                type="text"
                name="nome"
                placeholder="Digite o nome de sua skin"
                onChange={handleNomeChange}
                value={nome}
            />

            <input
                type="text"
                name="nome"
                placeholder="Digite a descrição de sua skin"
                onChange={handleDescricaoChange}
                value={descricao}
            />
            


            <select name="rarity">
                <option value="Common">Common</option>
                <option value="Uncommon">Uncommon</option>
                <option value="Rare">Rare</option>
                <option value="Epic">Epic</option>
                <option value='Legendary'>Legendary</option>
            </select>

            <input
                type="date"
                name="date"
                placeholder='Digite a data de lançamento da skin'
            />

            <select name="" id="">
                <option value="Capitulo1">Capitulo 1</option>
                <option value="Capitulo2">Capitulo 2</option>
                {/* Dps add por um For/filter todos os capitulos, pois será mto mais facil e pratico */}

            </select>

            <button className={styles.bntCriar} onClick={() => addSkin()}>Criar</button>
        </div>
    )
}

export default PopUpCadastro;