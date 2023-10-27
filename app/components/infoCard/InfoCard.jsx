// import Image from 'next/image';
import styles from './infoCard.module.css'

const InfoCard = ({ nome, raridade, descricao, imagem, vbucks }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.headerContainer}>
                <h2>{raridade} | OUTFIT</h2>
                <h1>{nome}</h1>
            </div>
            <div className={styles.mainContainer}>
                <p>{descricao}</p>
                <div className={styles.avatar}>
                    <img src={imagem} width={111} height={169} alt={nome} />
                </div>
            </div>
            <div className={styles.endContainer}>
                <div className={styles.price}>
                    {/* <Image src={"/fortnite-v-buck.png"} alt={"V-bucks"} width={32} height={32} /> */}
                    <p>{vbucks}</p>
                </div>
                <button>Editar</button>
                <button>Remover</button>
            </div>
        </div>
    )
}

export default InfoCard