import styles from "./skin.module.css"
import Price from '../price/Price';

const Skin = ({ list, handleOpenSkin }) => {
  return (
    <div onClick={() => handleOpenSkin(list)} 
      className={styles[list.raridade] + ' ' + styles.card} key={list.id}>
      <img src={list.imagem} width={300} height={300} alt={list.name} />
      <div className={styles.cardDescription}>
        <h1>{list.nome}</h1>
        <p>Outfit</p>
        <div className={styles.vbucks}>
          <Price rarity={list.raridade} />
        </div>
      </div>
    </div>
  )
}

export default Skin;