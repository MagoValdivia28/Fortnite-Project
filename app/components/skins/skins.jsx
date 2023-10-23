import styles from "./skins.module.css"
import Price from '../price/Price';

const Skins = ({ h1, index, src, p, p1 }) => {
  const rarity = p1.rarity.displayValue;
  return (
    <div className={styles[rarity] + ' ' + styles.card} key={index}>
      <img src={src} width={300} height={300} />
      <div className={styles.cardDescription}>
        <h1>{h1}</h1>
        <p>{p}</p>
        <div className={styles.vbucks}>
          <Price item={p1} />
        </div>
      </div>
    </div>
  )
}

export default Skins;