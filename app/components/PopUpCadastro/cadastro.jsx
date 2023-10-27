"use client"

import { useEffect, useState } from 'react';
import styles from './cadastro.module.css';

const PopUpCadastro = ({ type, func }) => {
    const [nome, setNome] = useState(null);
    console.log(type, func);


    const handleNomeChange = (e) => {
        setNome(e.target.value);
    };
    return (
        <div className={styles.card}>
            <h1>Cadatro</h1>
            <input
                type="text"
                name="nome"
                placeholder="Digite o nome de sua skin"
                onChange={handleNomeChange}
                value={nome}
            />
            
            <select name="select">
                <option value="Common">Common</option>
                <option value="Uncommon">Uncommon</option>
                <option value="Rare">Rare</option>
                <option value="Epic">Epic</option>
                <option value='Legendary'>Legendary</option>
            </select>

            <button className={styles.bntCriar} onClick={() => addSkin()}>Criar</button>
        </div>
    )
}

export default PopUpCadastro;