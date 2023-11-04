// import Image from 'next/image';
import styles from './infoCard.module.css'
import Price from '../price/Price'

const InfoCard = ({ list, close, remove, edit }) => {

    const formattedData = (date) => {
        const format = date.slice(0, 10);
        return format.split('-').reverse().join('/');
    }

    function mesclar(rarity) {
        if (rarity == 'starwars' || rarity == 'gaminglegends' || rarity == 'shadow') {
            return 'normal'
        } else {
            return 'overlay';
        }
    }
    return (
        <div className={styles.containerBody}>
            <div className={styles.cardContainer + ' ' + styles[list.raridade]}>
                <div className={styles.headerContainer}>
                    <button onClick={close} className={styles.x}>
                        X
                    </button>
                    <h2 style={{ mixBlendMode: mesclar(list.raridade) }} className={styles.raridade}>{list.raridade} | OUTFIT</h2>
                    <h1>{list.nome}</h1>
                </div>
                <div className={styles.mainContainer}>
                    <p> Introduzido no Capitulo {list.capitulo} temporada {list.temporada}</p>
                    <div className={styles.containerInfoImage}>
                        <div className={styles.avatar + ' ' + styles[list.raridade]}>
                            <img src={list.imagem} width={166.5} height={253.5} alt={list.nome} />
                        </div>
                        <div className={styles.description}>
                            <p>{list.descricao}</p>
                            <span>Adicionado em: {formattedData(list.dataLancamento)}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.endContainer}>
                    <div className={styles.price}>
                        <Price rarity={list.raridade} />
                    </div>
                    <button onClick={() => edit(list)}>Editar</button>
                    <button onClick={() => remove(list)}>Remover</button>
                </div>
            </div>
        </div>

    )
}

export default InfoCard