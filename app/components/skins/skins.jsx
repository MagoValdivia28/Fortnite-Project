import styles from "./skins.module.css"
import Price from '../price/Price';

const Skins = ({ h1, key, src, p, p1 }) => {
  return (
    <div className={styles.card} key={key}>
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