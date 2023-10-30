// import Image from 'next/image';
import styles from './infoCard.module.css'
import Price from '../price/Price'

const InfoCard = ({ nome, raridade, descricao, imagem, vbucks, introduction, added, close }) => {
    function mesclar(rarity) {
        if(rarity == 'starwars' || rarity == 'gaminglegends' || rarity == 'shadow' ) {
            return 'normal'
        } else {
            return 'overlay';
        }
    }
    return (
        <div className={styles.containerBody}>
            <div className={styles.cardContainer + ' ' + styles[vbucks]}>
                <div className={styles.headerContainer}>
                    <button onClick={close} className={styles.x}>
                        X
                    </button>
                    <h2 style={{mixBlendMode:mesclar(vbucks)}} className={styles.raridade}>{raridade} | OUTFIT</h2>
                    <h1>{nome}</h1>
                </div>
                <div className={styles.mainContainer}>
                    <p>{introduction}</p>
                    <div className={styles.containerInfoImage}>
                        <div className={styles.avatar + ' ' + styles[vbucks]}>
                            <img src={imagem} width={166.5} height={253.5} alt={nome} />
                        </div>
                        <div className={styles.description}>
                            <p>{descricao}</p>
                            <span>Adicionado em: {added}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.endContainer}>
                    <div className={styles.price}>
                        {/* <Image src={"/fortnite-v-buck.png"} alt={"V-bucks"} width={32} height={32} /> */}
                        <Price rarity={vbucks} />
                    </div>
                    <button>Editar</button>
                    <button>Remover</button>
                </div>
            </div>
        </div>

    )
}

export default InfoCard